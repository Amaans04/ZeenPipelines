import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import Products from "@/components/Products";
import ProductDetails from "@/pages/ProductDetails";
import ContactPage from "@/pages/ContactPage";
import WhyUsPage from "@/pages/WhyUsPage";
import IndustriesPage from "@/pages/IndustriesPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/why-us" component={WhyUsPage} />
            <Route path="/industries" component={IndustriesPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
