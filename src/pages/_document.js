/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='/assets/dist/css/bootstrap.min.css'
          rel='bootstrap'
          type='text/css'
        />
        <link
          href='/assets/dist/css/margo.css'
          rel='margo.css'
          type='text/css'
        />
        <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
        />
        <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript" async>
        </script>
      </Head>
    </Html>
  )
}
