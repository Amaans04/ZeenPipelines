import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Industries from "@/components/Industries";
import PageTransition from "@/components/PageTransition";

const IndustriesPage = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <Helmet>
        <title>{t("industries.meta.title")}</title>
        <meta name="description" content={t("industries.meta.description")} />
      </Helmet>
      <Industries />
    </PageTransition>
  );
};

export default IndustriesPage; 