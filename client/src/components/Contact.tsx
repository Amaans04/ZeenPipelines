import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import LeadGenerationForm from "./LeadGenerationForm";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  inquiryType: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "quote",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.message"),
      });
      form.reset();
    } catch (error) {
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.message"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-24 pb-12 bg-[#f5f7fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">

              <div className="w-full">
                <LeadGenerationForm />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold font-condensed mb-6 text-secondary">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {t("contact.info.headquarters")}
                    </h4>
                    <p className="text-gray-600">{t("contact.info.address")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {t("contact.info.phone")}
                    </h4>
                    <p className="text-gray-600">+971 4 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {t("contact.info.email")}
                    </h4>
                    <p className="text-gray-600">info@zeeninternational.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {t("contact.info.hours")}
                    </h4>
                    <p className="text-gray-600">{t("contact.info.workdays")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-3">
                  {t("contact.info.social")}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
