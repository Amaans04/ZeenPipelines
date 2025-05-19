import { useTranslation } from "react-i18next";
import { useLocation, useRoute } from "wouter";
import { ArrowLeft, Download, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const ProductDetails = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/products/:id");
  const product = products.find(p => p.id === params?.id);

  if (!product) {
    return (
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
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <button 
            onClick={() => setLocation("/products")}
            className="hover:text-primary transition-colors"
          >
            Products
          </button>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-primary font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Column - Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div className="space-y-8">
              {/* Header Section */}
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold font-condensed mb-4">
                  {product.name}
                </h1>
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

              {/* Product Types */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  Available Types
                </h3>
                <div className="space-y-2">
                  {product.types.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Grades */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  Material Grades
                </h3>
                <div className="space-y-2">
                  {product.materialGrades.map((grade, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{grade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Sizes */}
              {product.sizes && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Available Sizes
                  </h3>
                  <div className="space-y-2">
                    {product.sizes.map((size, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Features */}
              {product.features && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
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
  );
};

export default ProductDetails; 