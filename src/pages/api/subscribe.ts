import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { stripe } from '../../services/stripe';

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }

    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
    });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
        customer: stripeCustomer.id,
        mode: 'subscription',
        allow_promotion_codes: true,
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        cancel_url: process.env.STRIPE_CANCEL_URL,
        success_url: process.env.STRIPE_SUCCESS_URL,
        line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
};

export default subscribe;
