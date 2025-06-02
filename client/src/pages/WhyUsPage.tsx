import { Helmet } from "react-helmet-async";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslation } from "react-i18next";
import PageTransition from "@/components/PageTransition";

export default function WhyUsPage() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <>
        <Helmet>
          <title>{t("whyUs.title")} | Zeen Pipes</title>
          <meta name="description" content={t("whyUs.description")} />
        </Helmet>
        <WhyChooseUs />
      </>
    </PageTransition>
  );
}