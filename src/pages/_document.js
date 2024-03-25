/* eslint-disable @next/next/google-font-display */
// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang='en'>
//       <Head>
//         <link
//           href='/assets/dist/css/bootstrap.min.css'
//           rel='bootstrap'
//           type='text/css'
//         />
//         <link
//           href='/assets/dist/css/margo.css'
//           rel='margo.css'
//           type='text/css'
//         />
//         <script
//           href='/assets/dist/js/bootstrap.js'
//           rel='bootstrap.js'
//           type='text/javascript' async>
//         </script>

//         <script
//           href='/assets/dist/js/bootstrap.js'
//           rel='bootstrap.js'
//           type='text/javascript' async>
//         </script>
//         <link
//         href="https://assets.calendly.com/assets/external/widget.css"
//         rel="stylesheet"
//         />
//         <script
//         src="https://assets.calendly.com/assets/external/widget.js"
//         type="text/javascript" async>
//         </script>
//       </Head>
//     </Html>
//   )
// }

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        {/* <script
          href='/assets/dist/js/script.js'
          rel='script.js'
          type='text/javascript' async>
        </script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}