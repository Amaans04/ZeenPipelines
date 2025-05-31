import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import WhyChooseUs from "@/components/WhyChooseUs";
import PageTransition from "@/components/PageTransition";

const WhyChooseUsPage = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <Helmet>
        <title>{t("whyUs.meta.title")}</title>
        <meta name="description" content={t("whyUs.meta.description")} />
      </Helmet>
      <WhyChooseUs />
    </PageTransition>
  );
};

export default WhyChooseUsPage; 