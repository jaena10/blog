import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I’m Chelsea, an IT student and an aspiring developer specializing in web technologies. My hobbies include playing video games and badminton. My favorite songs are “Banana Pancakes” by Jack Johnson, “Better” by Zayn Malik, and some K-pop songs. My favorite food is anything with soup.
           In five years, I see myself living in another country and enjoying life to the fullest.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}