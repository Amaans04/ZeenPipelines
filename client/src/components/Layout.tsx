import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";
import { useLanguage } from "@/hooks/useLanguage";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language } = useLanguage();
  
  return (
    <div className={language === "ar" ? "rtl" : ""}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
