import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Search, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  spec: string;
  image: string;
}

const Products = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  useEffect(() => {
    if (products) {
      let result = [...products];

      // Apply category filter
      if (filter !== "all") {
        result = result.filter((product) => product.category === filter);
      }

      // Apply search filter
      if (searchTerm.trim() !== "") {
        const search = searchTerm.toLowerCase();
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search)
        );
      }

      setFilteredProducts(result);
    }
  }, [filter, searchTerm, products]);

  const categories = [
    { id: "all", label: t("products.filters.all") },
    { id: "pipes", label: t("products.filters.pipes") },
    { id: "valves", label: t("products.filters.valves") },
    { id: "flanges", label: t("products.filters.flanges") },
    { id: "fittings", label: t("products.filters.fittings") },
    { id: "gaskets", label: t("products.filters.gaskets") },
    { id: "bolts", label: t("products.filters.bolts") },
  ];

  return (
    <section id="products" className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-condensed mb-4">
            {t("products.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Product Filters */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category.id
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-foreground hover:bg-gray-300"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder={t("products.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-3"
            />
            <Search className="absolute right-3 top-3 text-gray-500 h-5 w-5" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold font-condensed mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {product.spec}
                  </span>
                  <a
                    href="#contact"
                    className="text-secondary hover:text-primary transition-all font-medium flex items-center"
                  >
                    <span>{t("products.inquire")}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500 mb-4">
              {t("products.noResults")}
            </p>
            <Button variant="outline" onClick={() => {
              setFilter("all");
              setSearchTerm("");
            }}>
              {t("products.resetFilters")}
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-all"
          >
            <span>{t("products.viewAllBtn")}</span>
            <ExternalLink className="ml-2 inline-block h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
