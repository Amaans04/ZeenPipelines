import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Contact from "@/components/Contact";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("contact.title")} | Zeen International</title>
        <meta name="description" content={t("contact.subtitle")} />
        <meta property="og:title" content={t("contact.title")} />
        <meta property="og:description" content={t("contact.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com/contact" />
        <html lang={i18n.language} />
      </Helmet>
      
      <div className="pt-24">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;