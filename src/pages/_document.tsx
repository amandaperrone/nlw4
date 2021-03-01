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
                    <meta property="og:image" content="https://scontent.fsod2-1.fna.fbcdn.net/v/t1.0-9/154706148_5820098148007706_8477647560436831650_o.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=fSaY4-YIB90AX-8mNE4&_nc_ht=scontent.fsod2-1.fna&oh=2e54155b6ebb2ab5157d9473d6ed81eb&oe=60613659" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content="Bora!" />
                    <meta property="twitter:description" content="Não fique parado na frente do computador." />
                    <meta property="twitter:image" content="https://scontent.fsod2-1.fna.fbcdn.net/v/t1.0-9/154706148_5820098148007706_8477647560436831650_o.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=fSaY4-YIB90AX-8mNE4&_nc_ht=scontent.fsod2-1.fna&oh=2e54155b6ebb2ab5157d9473d6ed81eb&oe=60613659" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}