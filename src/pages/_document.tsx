import Document, { Html, Head, Main, NextScript } from 'next/document'

// eslint-disable-next-line functional/no-class
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
            rel='unnessary'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
