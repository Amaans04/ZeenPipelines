import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  phone: z.string().min(6, { message: "Phone number must be at least 6 characters." }),
  message: z.string().optional(),
  subscribe: z.boolean().default(false),
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

interface LeadGenerationFormProps {
  isOverlay?: boolean;
  onClose?: () => void;
}

const LeadGenerationForm = ({ isOverlay = false, onClose }: LeadGenerationFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      subscribe: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Google Script URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbz-AH-gqvON0xuTql78LPsxZXM8zLt7EQHeLoFErPpeIpDFcHBTNqIxN11iGjXmHJDqFQ/exec";
      
      // Build URL with query parameters
      const url = new URL(scriptURL);
      url.searchParams.append("name", data.name);
      url.searchParams.append("email", data.email);
      url.searchParams.append("company", data.company);
      url.searchParams.append("phone", data.phone);
      url.searchParams.append("message", data.message || "");
      url.searchParams.append("subscribe", data.subscribe ? "Yes" : "No");
      url.searchParams.append("timestamp", new Date().toISOString());
      url.searchParams.append("sourceUrl", window.location.href);

      // Use XMLHttpRequest instead of fetch
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url.toString(), true);
      
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("Form submitted successfully:", xhr.responseText);
          toast({
            title: t("form.successTitle"),
            description: t("form.successMessage"),
          });
          form.reset();
          if (isOverlay && onClose) {
            onClose();
          }
        } else {
          console.error("Error submitting form:", xhr.statusText);
          toast({
            title: t("form.errorTitle"),
            description: t("form.errorMessage"),
            variant: "destructive"
          });
        }
        setIsSubmitting(false);
      };
      
      xhr.onerror = function() {
        console.error("Network error during form submission");
        toast({
          title: t("form.errorTitle"),
          description: t("form.errorMessage"),
          variant: "destructive"
        });
        setIsSubmitting(false);
      };
      
      xhr.send();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t("form.errorTitle"),
        description: t("form.errorMessage"),
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  // Base classes for the form container
  const containerClasses = isOverlay
    ? "bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
    : "w-full";

  const formContent = (
    <div className={containerClasses}>
      {isOverlay && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-primary">
            {t("leadForm.title")}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      {!isOverlay && (
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
            {t("leadForm.title")}
          </h2>
          <p className="text-gray-600">
            {t("leadForm.subtitle")}
          </p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("leadForm.nameLabel")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("leadForm.namePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("leadForm.emailLabel")}</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder={t("leadForm.emailPlaceholder")} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("leadForm.companyLabel")}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={t("leadForm.companyPlaceholder")} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("leadForm.phoneLabel")}</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder={t("leadForm.phonePlaceholder")} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("leadForm.messageLabel")}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t("leadForm.messagePlaceholder")} 
                    {...field} 
                    rows={isOverlay ? 3 : 5}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="subscribe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    {t("leadForm.subscribeLabel")}
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : t("leadForm.submitButton")}
          </Button>
        </form>
      </Form>
    </div>
  );

  // For regular form, just return the form content
  if (!isOverlay) {
    return formContent;
  }

  // For overlay form, wrap in AnimatePresence for animation
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {formContent}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadGenerationForm;