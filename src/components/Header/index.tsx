import Image from 'next/image';

import { SignInButton } from '../SignInButton';

import { ActiveLink } from './ActiveLink';

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
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}
