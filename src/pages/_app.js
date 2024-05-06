
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/layouts/Layout";
import withTheme from "@/theme/theme";
import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import english from "@/locale/en.json"
import vietnam from "@/locale/vi.json"
import czech from "@/locale/cs.json"
import { useAppData } from "@/store/appStore";

export default function App({ Component, pageProps }) {
  const { language: lang } = useAppData()
  const [dataLanguage, setDataLanguage] = useState(null);
  const queryClient = new QueryClient();

  useEffect(() => {
    switch (lang) {
      case "en":
        setDataLanguage(english)
        break;
      case "vi":
        setDataLanguage(vietnam)
        break;
      case "cs":
        setDataLanguage(czech)
        break;
      default: setDataLanguage(english)
        break;
    }
  }, [lang])
  return withTheme(
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Nika Cofee and Tea</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="author" content="Hatsolution" />
        <meta name="description" content="Nika - Coffee and Tea" />
        <meta name="keywords" content="Nika - Coffee and Tea" />
        <link rel="shortcut icon" href="/assets/img/logoNika3-03.png" />
      </Head>
      <IntlProvider messages={dataLanguage} locale={lang} defaultLocale={lang}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </QueryClientProvider>
  )
}
