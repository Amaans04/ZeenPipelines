import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Products from "@/components/Products";

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("products.title")} | Zeen International</title>
        <meta name="description" content={t("products.subtitle")} />
        <meta property="og:title" content={t("products.title")} />
        <meta property="og:description" content={t("products.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com/products" />
        <html lang={i18n.language} />
      </Helmet>
      
      <Products />
    </>
  );
};

export default ProductsPage;