import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import DashboardLayout from "../components/dashboardLayout";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Suma Wealth Prototype</title>
      </Head>
      <DashboardLayout>
        
        <Component {...pageProps} />
      </DashboardLayout>
    </SessionProvider>
  );
}

export default MyApp;
