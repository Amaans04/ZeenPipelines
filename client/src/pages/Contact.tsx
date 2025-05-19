import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f5f7fa] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Content coming soon...
        </p>
      </div>
    </div>
  );
};

export default Contact; 