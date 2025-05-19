import { Helmet } from "react-helmet-async";
import About from "@/components/About";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("about.title")} | Zeen Pipes</title>
        <meta name="description" content={t("about.description")} />
      </Helmet>
      <About />
    </>
  );
}