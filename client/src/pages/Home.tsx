import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

const Home = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com" />
        <html lang={i18n.language} />
      </Helmet>
      
      <Hero />
      <About />
      <Products />
      <Industries />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default Home;
