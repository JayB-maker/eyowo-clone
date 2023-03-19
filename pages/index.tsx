import Layout from "@/src/components/layout";
import InfoBanner from "@/src/components/websiteSection/home/infoBanner";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Eyowo</title>
      </Head>
      <Layout>
        <InfoBanner />
      </Layout>
    </>
  );
};

export default Home;
