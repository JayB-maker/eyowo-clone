import Layout from "@/src/components/layout";
import HomeHeroSection from "@/src/components/websiteSection/home/homeHeroSection";
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
        <HomeHeroSection />
      </Layout>
    </>
  );
};

export default Home;
