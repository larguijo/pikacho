import Head from "next/head";
import "style/css/global.css";
const SITE_NAME = "Pikacho View Guest House";
const DESCRIPTION =
  '“Pikacho View Guest House”, nuestra pequeña casa de huéspedes en el Volcán de San Salvador (“El Boqueron"). Contamos con una cabaña con dos habitaciones espaciosas y acogedoras, área de servicio, espacio para acampar y más';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_NAME} />
        <meta name="description" content={DESCRIPTION} />
        <meta name="og:description" content={DESCRIPTION} />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
