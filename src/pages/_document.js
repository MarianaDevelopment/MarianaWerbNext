import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


class Mariana extends Document {
  render() {
    return (
      <Html lang="es">
        <title>MarianaRE</title>
        <Head>
          <body></body>
          <meta charset="UTF-8" />
          <link
            rel="icon"
            type="image/svg+xml"
            href="../../public/hoobank.svg"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="A bot of discord that helps you to manage your server"
          />
          <meta name="author" content="MarianaRE" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <div id="root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Mariana;
