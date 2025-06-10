import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Factory, Ship, Zap, Building2, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndustryCard = ({
  title,
  description,
  image,
  index,
  icon,
  features,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  icon: React.ReactNode;
  features: string[];
}) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">{t("industries.keyFeatures")}</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const { t } = useTranslation();

  const industries = [
    {
      id: "oil",
      icon: <Factory className="h-8 w-8 text-primary" />,
      image: "/industries/oil-gas.webp",
      title: t("industries.oil.title"),
      description: t("industries.oil.text"),
      features: [
        "Upstream pipeline components",
        "Midstream transportation solutions",
        "Downstream processing equipment",
        "Safety-certified materials",
        "High-pressure rated components"
      ]
    },
    {
      id: "marine",
      icon: <Ship className="h-8 w-8 text-primary" />,
      image: "/industries/marine.webp",
      title: t("industries.marine.title"),
      description: t("industries.marine.text"),
      features: [
        "Marine-grade stainless steel",
        "Corrosion-resistant materials",
        "Offshore platform components",
        "Shipbuilding solutions",
        "Saltwater environment rated"
      ]
    },
    {
      id: "power",
      icon: <Zap className="h-8 w-8 text-primary" />,
      image: "/industries/power.webp",
      title: t("industries.power.title"),
      description: t("industries.power.text"),
      features: [
        "High-temperature rated materials",
        "Pressure vessel components",
        "Steam system solutions",
        "Renewable energy equipment",
        "Power plant maintenance parts"
      ]
    },
    {
      id: "infra",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      image: "/industries/infrastructure.webp",
      title: t("industries.infra.title"),
      description: t("industries.infra.text"),
      features: [
        "Water treatment systems",
        "Municipal pipeline solutions",
        "Urban infrastructure components",
        "Construction materials",
        "Public works projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-condensed">
            {t("industries.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              title={industry.title} 
              description={industry.description} 
              image={industry.image} 
              index={index}
              icon={industry.icon}
              features={industry.features}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">{t("industries.cta.title")}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("industries.cta.description")}
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all inline-flex items-center"
          >
            <span>{t("industries.cta.button")}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Industries;
