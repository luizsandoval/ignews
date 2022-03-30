import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={styles['header-content']}>
                <img
                    src='/images/logo.svg'
                    alt='Ig news - the best and newly news about the react world!'
                />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    );
}
