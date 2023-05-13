import "@/styles/globals.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import GlobalProvider from "lib/Context";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

declare module "next" {
  export interface NextComponentType<T> {
    layout?: T;
  }
}
NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const Layout =
    Component.layout ||
    (({ children }: { children: JSX.Element | JSX.Element[] }) => (
      <div className={poppins.className}>{children}</div>
    ));

  return (
    <GlobalProvider>
      <GeistProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeistProvider>
    </GlobalProvider>
  );
}
