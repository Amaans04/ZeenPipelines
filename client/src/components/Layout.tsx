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
    <div className={`min-h-screen flex flex-col w-full overflow-x-hidden ${language === "ar" ? "rtl" : ""}`}>
      <Navbar />
      <main className="flex-1 pt-[72px] w-full overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
