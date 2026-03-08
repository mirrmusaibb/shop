import type { AppProps } from "next/app";
import { Layout } from "@/components/layout/Layout";
import { LanguageProvider } from "@/hooks/useLanguage";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LanguageProvider>
      <Layout routeKey={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
