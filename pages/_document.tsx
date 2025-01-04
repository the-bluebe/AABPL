import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Primary Meta Tags */}
                <meta charSet="UTF-8" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <meta name="title" content="AABPL - Innovate, Inspire, Influence" />
                <meta
                    name="description"
                    content="Abhi Anmol Bharat Pvt Ltd. (AABPL) is a leading construction and service provider company based in Delhi. Specializing in civil, mechanical, and electrical fields, we innovate to shape the nation's future."
                />
                <meta name="keywords" content="AABPL, construction, civil engineering, mechanical services, electrical projects, financial services, Delhi construction company" />
                <meta name="author" content="Abhi Anmol Bharat [P] Ltd." />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aanmolbharat.com/" />
                <meta property="og:title" content="AABPL - Innovate, Inspire, Influence" />
                <meta
                    property="og:description"
                    content="Discover Abhi Anmol Bharat Pvt Ltd, a premier construction and service provider in Delhi. Explore our civil, mechanical, electrical, and financial solutions for building a better tomorrow."
                />
                <meta property="og:image" content="https://aanmolbharat.com/assets/images/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://aanmolbharat.com/" />
                <meta name="twitter:title" content="AABPL - Innovate, Inspire, Influence" />
                <meta
                    name="twitter:description"
                    content="Abhi Anmol Bharat [P] Ltd. (AABPL) is a Delhi-based construction company specializing in civil, mechanical, and electrical services. Join us in building the future!"
                />
                <meta name="twitter:image" content="https://aanmolbharat.com/assets/images/twitter-image.jpg" />

                {/* Favicon */}
                <link rel="icon" href="/logo.png" />

                {/* Additional Fonts or Styles */}
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
