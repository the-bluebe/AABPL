import 'normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
          <Head>
            <title>About Abhi Anmol Bharat - Innovate, Inspire, Influence</title>
            <meta name="description" content="Abhi Anmol Bharat Pvt Ltd. is a leading construction and service provider specializing in civil, mechanical, and electrical projects." />
          </Head>
          <Component {...pageProps} />
        </>
      );
};

export default MyApp;

