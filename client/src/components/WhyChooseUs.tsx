import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Globe, Award, Truck, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Certification {
  id: string;
  name: string;
  image: string;
}

const WhyChooseUs = () => {
  const { t } = useTranslation();
  
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

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
            {t("whyUs.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#f5f7fa] p-8 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="bg-secondary inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-condensed mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Certification Carousel */}
        <div className="mt-20">
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
                  <div className="certification-item text-center px-6">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="h-24 mx-auto grayscale hover:grayscale-0 transition-all"
                    />
                    <p className="text-sm text-gray-500 mt-2">{cert.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
