import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import Stripe from 'stripe';
import { stripe } from '../../services/stripe';

async function buffer(readable: Readable) {
    const chunks = [];

    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }

    return Buffer.concat(chunks);
}

const relevantEvents = new Set(['checkout.session.completed']);

const webhooks = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method not allowed');
    }

    const buf = await buffer(req);
    const secret = req.headers['stripe-signature'];

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            buf,
            secret,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        return res.status(400).send(`Webhook error: ${error.message}`);
    }

    const { type } = event;

    if (relevantEvents.has(type)) {
        try {
            switch (type) {
                case 'checkout.session.completed':
                    break;

                default:
                    throw new Error('Unhandled event');
            }
        } catch (error) {
            return res.json({ error: 'Webhook handler failed' });
        }
    }

    res.json({ received: true });
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default webhooks;
