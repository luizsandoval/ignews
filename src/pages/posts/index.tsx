import Head from 'next/head';

import styles from './styles.module.scss';
const Posts = () => {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>06 de Abril de 2022</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Iusto ullam quis non ea eum quod dolore
                            delectus, animi deserunt aliquid aperiam distinctio
                            dolores incidunt quam ex maiores? Dolor, voluptas
                            sed.
                        </p>
                    </a>
                    <a>
                        <time>06 de Abril de 2022</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Iusto ullam quis non ea eum quod dolore
                            delectus, animi deserunt aliquid aperiam distinctio
                            dolores incidunt quam ex maiores? Dolor, voluptas
                            sed.
                        </p>
                    </a>
                    <a>
                        <time>06 de Abril de 2022</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Iusto ullam quis non ea eum quod dolore
                            delectus, animi deserunt aliquid aperiam distinctio
                            dolores incidunt quam ex maiores? Dolor, voluptas
                            sed.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
};

export default Posts;
