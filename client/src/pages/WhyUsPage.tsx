import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import WhyChooseUs from "@/components/WhyChooseUs";

const WhyUsPage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("whyUs.title")} | Zeen International</title>
        <meta name="description" content={t("whyUs.subtitle")} />
        <meta property="og:title" content={t("whyUs.title")} />
        <meta property="og:description" content={t("whyUs.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com/why-us" />
        <html lang={i18n.language} />
      </Helmet>
      
      <div className="pt-24">
        <WhyChooseUs />
      </div>
    </>
  );
};

export default WhyUsPage;