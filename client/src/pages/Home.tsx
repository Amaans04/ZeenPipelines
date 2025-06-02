import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowRight, Star, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LeadGenerationForm from "@/components/LeadGenerationForm";
import LeadFormOverlay from "@/components/LeadFormOverlay";
import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/hooks/useLanguage";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { useLocation } from "wouter";

const ClientMarquee = () => {
  // List of notable clients/companies served with their logos
  const clients = Array.from({ length: 10 }, (_, i) => ({
    name: `Company ${i + 1}`,
    logo: `/logos/cmpimg-${i + 1}.webp`
  }));
  
  return (
    <div className="bg-white py-6 border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-3">
        <h4 className="text-center text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Our Trusted Clients
        </h4>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      <div className="animate-marquee whitespace-nowrap">
        {clients.map((client, index) => (
          <div key={index} className="inline-block mx-6">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all" 
              title={client.name}
              onError={(e) => {
                console.error(`Failed to load image: ${client.logo}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {clients.map((client, index) => (
          <div key={index + 100} className="inline-block mx-6">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all" 
              title={client.name}
              onError={(e) => {
                console.error(`Failed to load image: ${client.logo}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
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

interface Product {
  id: string;
  category: string;
  name: string;
  types: string[];
  materialGrades: string[];
  image: string;
  features?: string[];
  sizes?: string[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const [, setLocation] = useLocation();
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => setLocation(`/products/${product.id}`)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="text-xs uppercase text-gray-500 mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{product.types.join(", ")}</p>
        <p className="text-sm text-gray-500 mb-4">{product.materialGrades.join(", ")}</p>
        <div className="text-primary hover:text-secondary font-medium flex items-center">
          View Details
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="border-0 shadow-md h-full">
      <CardContent className="p-6">
        <div className="mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`inline-block h-5 w-5 ${
                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 rotate-180" />
          <p className="text-gray-700 mb-6 relative z-10 italic">"{testimonial.text}"</p>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center text-secondary font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-3">
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">
              {testimonial.title}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeeninternational.com" />
        <html lang={language} />
      </Helmet>
      
      {/* Lead Form Overlay - displays 10 seconds after page load */}
      <LeadFormOverlay />
      
      <Hero />
      
      <ClientMarquee />
      
      {/* About Us Section */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div>
                <img 
                  src="/products/hero img.webp" 
                  alt="Steel Pipes" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Premier Steel Pipe Supplier
                </h2>
                <p className="text-gray-700 mb-4">
                  Zeen International Pipeline Supply, a premier <span className="text-primary font-semibold">steel pipe supplier</span>, excels in delivering 
                  comprehensive piping solutions to a variety of industries including oil and gas, petrochemical, 
                  power, civil, and process sectors. As a renowned <span className="text-primary font-semibold">valve supplier</span>, we also offer an 
                  extensive selection of pipes, fittings, flanges, and valves, along with other necessary 
                  accessories to fulfill the diverse needs of our clients.
                </p>
                <p className="text-gray-700 mb-6">
                  Our presence as a leading <span className="text-primary font-semibold">flanges supplier</span> is strengthened by our strong regional and global footprint, 
                  with offices in key cities across over 60 countries. With a rich legacy spanning over 45 years in the pipe fittings 
                  industry, Zeen is committed to providing quality-assured, internationally-certified products 
                  and services. Upholding our brand promise of "Your Business, Our Commitment," we are 
                  dedicated to ensuring excellence and reliability in every engagement.
                </p>
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all inline-flex items-center"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-condensed">
              {t("home.featuredProducts.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.featuredProducts.subtitle")} 
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.slice(0, 3).map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button variant="outline" size="lg">
                {t("home.featuredProducts.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-condensed">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.testimonials.subtitle")}
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Lead Generation Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <LeadGenerationForm />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
