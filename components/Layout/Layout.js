import Head from 'next/head';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal Portfolio for Nick De Raj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <main>{children}</main>
      {/* Footer */}
    </>
  );
}
