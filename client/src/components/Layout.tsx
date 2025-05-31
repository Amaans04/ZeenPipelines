import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";
import { useLanguage } from "@/hooks/useLanguage";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language } = useLanguage();
  const [location] = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className={`min-h-screen flex flex-col ${language === "ar" ? "rtl" : ""}`}>
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <div key={location}>
            {children}
          </div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
