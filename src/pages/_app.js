import '@/styles/bootstrap.min.css'
import '@/styles/ekaigpt.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
  
// }

import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
     integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
     crossorigin="anonymous" async></script>
    </>
  );
}
export default MyApp;