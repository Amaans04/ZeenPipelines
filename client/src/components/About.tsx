import { useTranslation } from "react-i18next";
import { Check, Globe, Truck } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=600"
              alt="Industrial engineers inspecting pipeline equipment"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold font-condensed mb-6 text-secondary">
              {t("about.historyTitle")}
            </h3>
            <p className="mb-4 text-gray-700">{t("about.historyText")}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-full text-white mr-4">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {t("about.values.quality.title")}
                  </h4>
                  <p className="text-gray-600">
                    {t("about.values.quality.text")}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-full text-white mr-4">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {t("about.values.global.title")}
                  </h4>
                  <p className="text-gray-600">
                    {t("about.values.global.text")}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-full text-white mr-4">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {t("about.values.delivery.title")}
                  </h4>
                  <p className="text-gray-600">
                    {t("about.values.delivery.text")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <img
                src="https://via.placeholder.com/120x60?text=ISO+9001"
                alt="ISO Certification"
                className="h-16"
              />
              <img
                src="https://via.placeholder.com/120x60?text=API+Cert"
                alt="API Certification"
                className="h-16"
              />
              <img
                src="https://via.placeholder.com/120x60?text=Industry+Award"
                alt="Industry Award"
                className="h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
