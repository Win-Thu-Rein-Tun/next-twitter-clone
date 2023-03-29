import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import LoginModal from "@/components/helpers/LoginModal";
import RegisterModal from "@/components/helpers/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
