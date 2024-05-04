
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/layouts/Layout";
import withTheme from "@/theme/theme";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
