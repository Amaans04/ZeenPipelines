import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { products } from "./data/products";
import { industries } from "./data/industries";
import { certifications } from "./data/certifications";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  inquiryType: z.string(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/products", (_req, res) => {
    res.json(products);
  });

  app.get("/api/industries", (_req, res) => {
    res.json(industries);
  });

  app.get("/api/certifications", (_req, res) => {
    res.json(certifications);
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real app, this would send an email, save to DB, etc.
      // For now, we'll just log it
      console.log("Contact form submission:", validatedData);
      
      // Simulate a delay to show loading state on frontend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.status(200).json({ success: true, message: "Message received successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Server error" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
