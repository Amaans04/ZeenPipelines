import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import IndustriesPage from "@/pages/IndustriesPage";
import WhyUsPage from "@/pages/WhyUsPage";
import ContactPage from "@/pages/ContactPage";
import Layout from "@/components/Layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/why-us" component={WhyUsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // This hook will scroll to top on route changes
  useScrollToTop();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
