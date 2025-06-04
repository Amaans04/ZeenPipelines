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
  
  // Enhanced scroll to top when location changes
  useEffect(() => {
    try {
      // Use smooth scrolling behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <div className={`min-h-screen flex flex-col ${language === "ar" ? "rtl" : ""}`}>
      <Navbar />
      <main className="flex-grow pt-24">
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
