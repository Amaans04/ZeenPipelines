import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowRight, Star, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import LeadGenerationForm from "@/components/LeadGenerationForm";
import LeadFormOverlay from "@/components/LeadFormOverlay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClientMarquee = () => {
  // List of notable clients/companies served with their logos
  const clients = [
    {
      name: "Saudi Aramco",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Saudi_Aramco_logo.svg/440px-Saudi_Aramco_logo.svg.png"
    },
    {
      name: "ADNOC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Abu_Dhabi_National_Oil_Company_logo.svg/1200px-Abu_Dhabi_National_Oil_Company_logo.svg.png"
    },
    {
      name: "Qatar Gas",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/94/Qatargas_logo.svg"
    },
    {
      name: "Kuwait Oil Company",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Kuwait_Oil_Company_logo.png"
    },
    {
      name: "Shell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png"
    }, 
    {
      name: "ExxonMobil",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ExxonMobil_logo.svg/1200px-ExxonMobil_logo.svg.png"
    },
    {
      name: "BP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/BP_logo.svg/1200px-BP_logo.svg.png"
    },
    {
      name: "Total Energies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/TotalEnergies_logo.svg/2560px-TotalEnergies_logo.svg.png"
    },
    {
      name: "Petrofac",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Petrofac.svg"
    },
    {
      name: "McDermott",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/McDermott_Logo.svg/2560px-McDermott_Logo.svg.png"
    },
    {
      name: "Saipem",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Saipem_logo.svg/2560px-Saipem_logo.svg.png"
    },
    {
      name: "Worley",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Worley_logo.svg/1280px-Worley_logo.svg.png"
    },
    {
      name: "NPCC",
      logo: "https://www.npcc.ae/wp-content/uploads/2022/03/NPCC-logo.svg"
    }
  ];
  
  return (
    <div className="bg-white py-6 border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-3">
        <h4 className="text-center text-lg font-semibold text-gray-700">Our Trusted Clients</h4>
      </div>
      <div className="animate-marquee whitespace-nowrap">
        {clients.map((client, index) => (
          <div key={index} className="inline-block mx-6">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all" 
              title={client.name}
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
  description: string;
  spec: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
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
        <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">{product.spec}</p>
        <Link
          href={`/products#${product.id}`}
          className="text-primary hover:text-secondary font-medium flex items-center"
        >
          View Details
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Farsi",
    title: "Procurement Manager",
    company: "Gulf Petrochemicals",
    text: "Zeen International has been our trusted supplier for over 5 years. Their quality products and exceptional service have never disappointed us. Even during the most urgent shutdowns, they managed to deliver on time.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Thompson",
    title: "Project Director",
    company: "GCC Pipeline Solutions",
    text: "We've worked with many suppliers, but Zeen stands out for their technical expertise and commitment to quality. Their team goes above and beyond to ensure that specifications are met precisely.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Al-Dosari",
    title: "Operations Manager",
    company: "Petrochemical Industries Co.",
    text: "During a critical plant shutdown, Zeen International delivered essential components 2 days ahead of schedule. Their responsiveness and reliability have made them our primary supplier for all pipeline materials.",
    rating: 5
  }
];

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
  const { t, i18n } = useTranslation();
  
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });
  
  // Select featured products (first 3 from different categories)
  const featuredProducts = products
    .filter((product, index, self) => 
      // Only include the first product from each category
      index === self.findIndex(p => p.category === product.category)
    )
    .slice(0, 3);
  
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
      
      {/* Lead Form Overlay - displays 10 seconds after page load */}
      <LeadFormOverlay />
      
      <Hero />
      
      <ClientMarquee />
      
      {/* About Us Section */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&h=800" 
                  alt="Steel Pipes" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our high-quality industrial pipeline products trusted by leading companies worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders for our reliability, quality and exceptional service
            </p>
          </motion.div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2" />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Lead Generation Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LeadGenerationForm />
      </motion.div>
    </>
  );
};

export default Home;
