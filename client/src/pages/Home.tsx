import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";

const ClientMarquee = () => {
  // List of notable clients/companies served
  const clients = [
    "Saudi Aramco", "ADNOC", "Qatar Gas", "Kuwait Oil Company", "Shell", 
    "ExxonMobil", "BP", "Total Energies", "Petrofac", "McDermott", 
    "Saipem", "Worley Parsons", "NPCC"
  ];
  
  return (
    <div className="bg-secondary text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-lg font-semibold">Our Trusted Clients:</span>
        {clients.map((client, index) => (
          <span key={index} className="mx-4 text-lg">
            {client}
            <span className="mx-2">•</span>
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        <span className="mx-4 text-lg font-semibold">Our Trusted Clients:</span>
        {clients.map((client, index) => (
          <span key={index + 100} className="mx-4 text-lg">
            {client}
            <span className="mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const FeatureCard = ({ title, description, icon, link }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold font-condensed mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={link} 
        className="text-secondary hover:text-primary transition-all font-medium flex items-center"
      >
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const Home = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com" />
        <html lang={i18n.language} />
      </Helmet>
      
      <Hero />
      
      <ClientMarquee />
      
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
              {t("home.keyAreas")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("home.keyAreasSubtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title={t("nav.products")}
              description={t("home.productsSummary")}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>}
              link="/products"
            />
            <FeatureCard 
              title={t("nav.industries")}
              description={t("home.industriesSummary")}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M6 17v1"/><path d="M12 17v1"/><path d="M18 17v1"/><path d="M12 6V2"/><path d="M10 2h4"/></svg>}
              link="/industries"
            />
            <FeatureCard 
              title={t("nav.whyUs")}
              description={t("home.whyUsSummary")}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M19 3h.01"/><path d="M3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"/><path d="M15 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/></svg>}
              link="/why-us"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <span>{t("nav.getQuote")}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
