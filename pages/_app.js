import Head from "next/head";
import "style/css/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Pikacho View Guest House" />
        <meta property="og:title" content="Pikacho View Guest House" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
