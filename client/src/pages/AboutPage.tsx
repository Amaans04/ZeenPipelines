import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import About from "@/components/About";

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("about.title")} | Zeen International</title>
        <meta name="description" content={t("about.subtitle")} />
        <meta property="og:title" content={t("about.title")} />
        <meta property="og:description" content={t("about.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com/about" />
        <html lang={i18n.language} />
      </Helmet>
      
      <div className="pt-24">
        <About />
      </div>
    </>
  );
};

export default AboutPage;