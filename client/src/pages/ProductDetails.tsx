import { useTranslation } from "react-i18next";
import { useLocation, useRoute } from "wouter";
import { ArrowLeft, Download, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import PageTransition from "@/components/PageTransition";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/products/:id");
  const product = products.find(p => p.id === params?.id);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Extract unique categories from products data
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    setCategories(uniqueCategories);
  }, [params?.id]);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#f5f7fa] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
              <p className="text-gray-600 mb-8">The requested product could not be found.</p>
              <Button onClick={() => setLocation("/products")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white text-5xl font-bold font-condensed">
            {product.name}
          </h1>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#f5f7fa] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <button 
              onClick={() => setLocation("/products")}
              className="hover:text-primary transition-colors"
            >
              Products
            </button>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#f5f7fa] py-12">
        <div className="container mx-auto px-4">
          {/* Main Content Area (Two Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <h3 className="text-lg font-semibold px-6 py-4 bg-[#197519] text-white">
                  Products
                </h3>
                <ul>
                  {categories.map((category, index) => (
                    <li 
                      key={index} 
                      className={`px-6 py-3 border-b border-gray-200 last:border-b-0 cursor-pointer ${
                        category === product.category ? 'bg-gray-200 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        // Find the first product in the clicked category and navigate
                        const categoryProduct = products.find(p => p.category === category);
                        if (categoryProduct) {
                          setLocation(`/products/${categoryProduct.id}`);
                        }
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 space-y-8">
                {/* Product Description/Intro */}
                <div>
                  <h2 className="text-3xl font-bold font-condensed mb-4">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {product.types.join(", ")}
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">
                    <Mail className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Specs
                  </Button>
                </div>

                {/* Product Specifications */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-4">
                    Product Specifications
                  </h3>
                  <div className="space-y-4">
                    {/* Material Grades */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Material Grades</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.materialGrades.map((grade, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                            <span className="text-gray-600">{grade}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Available Types */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Available Types</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.types.map((type, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                            <span className="text-gray-600">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Available Sizes */}
                    {product.sizes && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Available Sizes</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.sizes.map((size, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                              <span className="text-gray-600">{size}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Features */}
                    {product.features && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Key Features</h4>
                        <div className="space-y-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1" />
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetails; 