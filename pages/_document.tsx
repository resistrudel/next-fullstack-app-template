import Document, { Head, Html, Main, NextScript } from 'next/document';
import theme from '../src/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <link
            href="https://unpkg.com/tailwindcss@^3/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant+Garamond:wght@300;400;700&family=Montserrat:wght@100;400;600&display=swap"
            rel="stylesheet"
          />
          <title>ARA Med Spa Beverly Hills</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
