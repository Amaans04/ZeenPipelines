import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Globe, Award, Truck, Users, Target, Eye, BarChart3, Heart, Shield, Clock, Headphones, LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Certification {
  id: string;
  name: string;
  image: string;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

interface CompanyValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const CompanyValue = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<MVOKey>("mission");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts to trigger animations
    setIsVisible(true);
  }, []);
  
  const { data: certifications = [] } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  const features = [
    {
      id: "global",
      icon: <Globe className="h-6 w-6" />,
      title: t("whyUs.global.title"),
      text: t("whyUs.global.text"),
    },
    {
      id: "quality",
      icon: <Award className="h-6 w-6" />,
      title: t("whyUs.quality.title"),
      text: t("whyUs.quality.text"),
    },
    {
      id: "delivery",
      icon: <Truck className="h-6 w-6" />,
      title: t("whyUs.delivery.title"),
      text: t("whyUs.delivery.text"),
    },
    {
      id: "team",
      icon: <Users className="h-6 w-6" />,
      title: t("whyUs.team.title"),
      text: t("whyUs.team.text"),
    },
  ];
  
  const companyValues = [
    {
      title: "Extensive Inventory",
      description: "We hold massive stocks of pipes, tubes, fittings and flanges to meet urgent requirements during shutdowns, shortfalls and maintenance.",
      icon: <BarChart3 className="h-6 w-6 text-primary" />
    },
    {
      title: "Quality Assurance",
      description: "Our company is well equipped with technical strength and a quality team approving all incoming and outgoing materials with precise certification and 100% traceability.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Exceptional Service",
      description: "We strive to offer a quality of service that will surpass our client's expectations in every interaction.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Cultural Understanding",
      description: "We understand the complexities of our client's culture and fulfill requirements accordingly.",
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Relationship Building",
      description: "We start our service by building relationships with clients and work on focused, well-defined skills to undertake any challenges.",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  type MVOKey = 'mission' | 'vision' | 'objective';
  
  interface MVOContent {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  const mvoContent: Record<MVOKey, MVOContent> = {
    mission: {
      title: "Our Mission",
      description: "To consistently perform the role as a business catalyst by acting as a bridge between buyers and their requirements.",
      icon: <Target className="h-12 w-12 text-primary" />
    },
    vision: {
      title: "Our Vision",
      description: "To become one-stop-destination for all needs of our customers & give a satisfactory service to Clients and their requirements.",
      icon: <Eye className="h-12 w-12 text-primary" />
    },
    objective: {
      title: "Our Objective",
      description: "Zeen Pipe Line exists with the sole objective to dedicate itself for quality service to our most valuable customers.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />
    }
  };

  const values = [
    {
      icon: Shield,
      title: t("whyUs.values.quality.title"),
      description: t("whyUs.values.quality.description"),
    },
    {
      icon: Truck,
      title: t("whyUs.values.delivery.title"),
      description: t("whyUs.values.delivery.description"),
    },
    {
      icon: Clock,
      title: t("whyUs.values.reliability.title"),
      description: t("whyUs.values.reliability.description"),
    },
    {
      icon: Users,
      title: t("whyUs.values.expertise.title"),
      description: t("whyUs.values.expertise.description"),
    },
    {
      icon: Award,
      title: t("whyUs.values.certification.title"),
      description: t("whyUs.values.certification.description"),
    },
    {
      icon: Headphones,
      title: t("whyUs.values.support.title"),
      description: t("whyUs.values.support.description"),
    },
  ];

  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
              {t("whyUs.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("whyUs.subtitle")}
            </p>
          </div>
        </AnimatedSection>

        {/* Mission, Vision, Objective tabs */}
        <div className="mb-20">
          <div className="flex justify-center mb-10 flex-wrap">
            {(Object.keys(mvoContent) as MVOKey[]).map((key, idx) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`px-6 py-3 mx-2 my-2 rounded-full font-medium transition-all ${
                  activeTab === key 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(key as MVOKey)}
              >
                {mvoContent[key].title}
              </motion.button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            
            {(Object.keys(mvoContent) as MVOKey[]).map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeTab === key ? 1 : 0,
                  x: activeTab === key ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
                className={`flex items-center ${activeTab === key ? "block" : "hidden"}`}
              >
                <div className="mr-8 hidden md:block">
                  {mvoContent[key].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{mvoContent[key].title}</h3>
                  <p className="text-lg text-gray-700">{mvoContent[key].description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.id} delay={0.1 * index}>
              <div
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center transform hover:-translate-y-1"
              >
                <div className="bg-secondary inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-condensed mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Our Values Section */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-condensed text-center mb-12 relative">
              <span className="bg-[#f5f7fa] px-4 relative z-10">Our Values</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0"></div>
            </h3>
            
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
              className="grid md:grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <CompanyValue key={index} {...value} />
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Certification Carousel - Temporarily Commented Out
        <AnimatedSection delay={0.5}>
          <div className="mt-20 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-condensed text-center mb-10">
              {t("whyUs.certifications.title")}
            </h3>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {certifications.map((cert) => (
                  <CarouselItem key={cert.id} className="md:basis-1/3 lg:basis-1/5">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="certification-item text-center px-6"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="h-24 mx-auto grayscale hover:grayscale-0 transition-all"
                      />
                      <p className="text-sm text-gray-500 mt-2">{cert.name}</p>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </AnimatedSection>
        */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
