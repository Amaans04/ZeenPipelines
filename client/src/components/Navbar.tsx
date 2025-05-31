import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "/", label: t("nav.home") },
    { id: "/about", label: t("nav.about") },
    { id: "/products", label: t("nav.products") },
    { id: "/industries", label: t("nav.industries") },
    { id: "/why-us", label: t("nav.whyUs") },
    { id: "/contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-[calc(100%-10px)] z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/">
                <img src={logo} alt="Zeen International Pipeline Supply Logo" className="h-12" />
              </Link>
            </motion.div>
            <div className="ml-4 hidden md:block">
              <ul className="flex space-x-6 font-condensed">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={item.id}
                      className="text-foreground hover:text-primary font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <div className="hidden md:flex items-center space-x-2 border-r pr-4 border-gray-200">
              <button
                className={`px-2 py-1 text-sm font-medium rounded hover:bg-gray-100 transition-all ${
                  language === "en" ? "bg-gray-100" : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-2 py-1 text-sm font-medium rounded hover:bg-gray-100 transition-all ${
                  language === "ar" ? "bg-gray-100" : ""
                }`}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
              <button
                className={`px-2 py-1 text-sm font-medium rounded hover:bg-gray-100 transition-all ${
                  language === "fr" ? "bg-gray-100" : ""
                }`}
                onClick={() => changeLanguage("fr")}
              >
                FR
              </button>
            </div>
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary/90 transition-all hidden md:block"
            >
              {t("nav.getQuote")}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-3 border-t mt-3 max-h-[calc(100vh-72px)] overflow-y-auto"
            >
              <ul className="space-y-3 font-condensed">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.id}
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 mt-4 pt-3 border-t border-gray-200"
              >
                <button
                  className={`px-2 py-1 text-sm font-medium rounded hover:bg-gray-100 transition-all ${
                    language === "en" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  English
                </button>
                <button
                  className={`px-2 py-1 text-sm font-medium rounded hover:bg-gray-100 transition-all ${
                    language === "ar" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => changeLanguage("ar")}
                >
                  Arabic
                </button>
                <button
                  className={`px-2 py-1 text-sm font-medium rounded hover:bg-gray-100 transition-all ${
                    language === "fr" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => changeLanguage("fr")}
                >
                  French
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary/90 transition-all inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.getQuote")}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
