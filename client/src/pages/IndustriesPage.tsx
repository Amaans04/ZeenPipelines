import { Helmet } from "react-helmet-async";
import Industries from "@/components/Industries";
import { useTranslation } from "react-i18next";

export default function IndustriesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("industries.title")} | Zeen Pipes</title>
        <meta name="description" content={t("industries.description")} />
      </Helmet>
      <Industries />
    </>
  );
}