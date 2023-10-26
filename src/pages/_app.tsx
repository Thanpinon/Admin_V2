import { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Router from "next/router";
import { AppProps } from "next/app";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import GoogleAnalytics from "@component/GoogleAnalytics";
import { AppProvider } from "@context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../__server__";
import theme from "../theme";
import GlobalStyles from "theme/globalStyles";
import clearExpirationCompare from "./clearExpirationCompare";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

// ============================================================
interface MyAppProps extends AppProps {
  Component: NextPage & { layout?: () => JSX.Element };
}
// ============================================================

const App = ({ Component, pageProps }: MyAppProps) => {
  let Layout = Component.layout || Fragment;
  // const [compareList, setCompareList] = useState([]);
  clearExpirationCompare();
  // useEffect(() => {
  //   const storedCompareList =
  //     JSON.parse(localStorage.getItem("compareList")) || [];
  //   setCompareList(storedCompareList);
  // }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:url" content="https://ihavecpu.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ถ้าคุณชอบคอม เราคือเพื่อนกัน" />
        <meta
          property="og:description"
          content="iHAVECPU ร้านขายและจำหน่ายอุปกรณ์คอมพิวเตอร์แบบครบวงจร รับประกันทุกชิ้น รับจัดสเปกคอมพิวเตอร์ตามสั่ง"
        />
        <meta
          property="og:image"
          content="/assets/images/landing/preview.png"
        />

        {/* Google analytics */}
        <GoogleAnalytics />
      </Head>

      <AppProvider>
        <ThemeProvider theme={theme()}>
          <GlobalStyles />
          <ToastContainer />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppProvider>
    </Fragment>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
