import Image from 'next/image';
import Link from 'next/link';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={styles['header-content']}>
                <Image
                    width={100}
                    height={100}
                    src='/images/logo.svg'
                    alt='Ig news - the best and newly news about the react world!'
                />
                <nav>
                    <Link href='/'>
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href='/posts'>
                        <a>Posts</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}
