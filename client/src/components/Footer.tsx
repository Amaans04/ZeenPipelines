import { useTranslation } from "react-i18next";
import { Download, Link } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
                <img src={logo} alt="Zeen International Pipeline Supply Logo" className="h-12 rounded-full" />
            <p className="text-gray-400 mb-6">{t("footer.about")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold font-condensed mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("nav.products")}
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("nav.industries")}
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("nav.whyUs")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-condensed mb-6">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("products.filters.pipes")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("products.filters.valves")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("products.filters.flanges")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("products.filters.fittings")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("products.filters.gaskets")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  {t("products.filters.bolts")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-condensed mb-6">
              {t("footer.download")}
            </h4>
            <p className="text-gray-400 mb-4">{t("footer.catalogInfo")}</p>
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded inline-flex items-center transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>{t("footer.catalogBtn")}</span>
            </a>

            <div className="mt-8">
              <h4 className="text-xl font-bold font-condensed mb-4">
                {t("footer.chat")}
              </h4>
              <a
                href="https://wa.me/+917738812758"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded inline-flex items-center transition-all"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                <span>+917738812758</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2025 Zeen International Pipeline Supply. All rights reserved.
              </p>
              <a
                href="https://theapexdev.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-all text-sm flex items-center group"
              >
                <span className="mr-1">Crafted with</span>
                <span className="text-red-500 mx-1 group-hover:scale-110 transition-transform">❤</span>
                <span className="mr-1">by</span>
                <span className="font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-primary transition-all">
                  TheApexDev
                </span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-gray-400 transition-all"
              >
                {t("footer.terms")}
              </a>
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-gray-400 transition-all"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-gray-400 transition-all"
              >
                {t("footer.sitemap")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
