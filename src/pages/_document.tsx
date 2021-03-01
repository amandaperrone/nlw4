import Document, { Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.svg" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

                    <meta name="title" content="Bora!" />
                    <meta name="description" content="Não fique parado na frente do computador." />
           
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Bora!" />
                    <meta property="og:description" content="Não fique parado na frente do computador." />
                    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content="Bora!" />
                    <meta property="twitter:description" content="Não fique parado na frente do computador." />
                    <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}