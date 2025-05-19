import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Factory, Ship, Zap, Building2, ChevronRight } from "lucide-react";

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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-condensed mb-6">
            {t("industries.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    {industry.icon}
                    <h3 className="text-2xl font-bold font-condensed">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {industry.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/products?industry=${industry.id}`}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    <span>View Products</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts can help you find the perfect pipeline components for your specific industry requirements.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all inline-flex items-center"
          >
            <span>Contact Our Experts</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
