import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Industries from "@/components/Industries";

const IndustriesPage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("industries.title")} | Zeen International</title>
        <meta name="description" content={t("industries.subtitle")} />
        <meta property="og:title" content={t("industries.title")} />
        <meta property="og:description" content={t("industries.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com/industries" />
        <html lang={i18n.language} />
      </Helmet>
      
      <div className="pt-24">
        <Industries />
      </div>
    </>
  );
};

export default IndustriesPage;