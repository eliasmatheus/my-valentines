import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <link rel="icon" href="/favicon.ico" />

          <meta name="author" content="Elias Oliveira" />
          <meta property="article:author" content="Elias Oliveira" />

          <meta property="og:type" content="page" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@somosagility" />
          <meta name="twitter:creator" content="@somosagility" />

          <meta name="theme-color" content="#283c5f" />

          {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link> */}
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
