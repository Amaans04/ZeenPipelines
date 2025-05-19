import { useTranslation } from "react-i18next";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-24 md:pt-0 relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1920&h=1080"
          alt="Industrial pipeline facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-condensed leading-tight mb-4">
            {t("hero.title")}
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8">{t("hero.tagline")}</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <span>{t("hero.getQuote")}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border border-white border-opacity-30 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <span>{t("hero.downloadCatalog")}</span>
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
