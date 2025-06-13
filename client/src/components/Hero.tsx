import { useTranslation } from "react-i18next";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[86.5vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ZeenWebBackground.jpeg"
          alt="Industrial pipeline facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-condensed leading-tight mb-4">
            {t("hero.title")}
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8">{t("hero.tagline")}</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <span>{t("hero.getQuote")}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border border-white border-opacity-30 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <span>View Products</span>
              <Package className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
