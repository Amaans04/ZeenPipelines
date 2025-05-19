import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";

interface Industry {
  id: string;
  title: string;
  text: string;
  image: string;
}

const Industries = () => {
  const { t } = useTranslation();
  
  const { data: industries = [] } = useQuery<Industry[]>({
    queryKey: ["/api/industries"],
  });

  return (
    <section id="industries" className="py-20 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
            {t("industries.title")}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-gray-800 rounded-lg overflow-hidden group hover:bg-primary transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={t(`industries.${industry.id}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-condensed mb-3">
                  {t(`industries.${industry.id}.title`)}
                </h3>
                <p className="text-gray-300 group-hover:text-white">
                  {t(`industries.${industry.id}.text`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
