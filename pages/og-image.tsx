import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      title: context.query?.title ?? 'Mate',
    },
  };
};

const Home: NextPage = ({ title }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const ogImageUrl = `https://next-dynamic-og-image.vercel.app/api/og?title=${title}`;

  return (
    <div className={styles.container}>
      <Head>
        {/* Open Graph (OG) Tags */}
        <title>Hello There! {title}</title>
        <meta property="og:title" content={`Hello There! ${title}`} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Welcome to our Next.js application!" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Hello There! ${title}`} />
        <meta name="twitter:description" content="Welcome to our Next.js application!" />
        <meta name="twitter:image" content="https://s.udemycdn.com/meta/default-meta-image-v2.png" />
        <meta name="twitter:site" content="@udemy"></meta>
        <meta itemprop="name" content="Online Courses - Learn Anything, On Your Schedule | Udemy"></meta>
        <meta itemprop="image" content="https://s.udemycdn.com/meta/default-meta-image-v2.png"></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;