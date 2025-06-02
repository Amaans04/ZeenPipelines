import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

interface Product {
  id: string;
  category: string;
  name: string;
  types: string[];
  materialGrades: string[];
  image: string;
  features?: string[];
  sizes?: string[];
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [, setLocation] = useLocation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={() => setLocation(`/products/${product.id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all"
    >
      <div className="aspect-video relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div className="space-y-2">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-1">Types:</h4>
            <p className="text-gray-700 line-clamp-2">
              {product.types.join(", ")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-1">Material Grades:</h4>
            <p className="text-gray-700 line-clamp-2">
              {product.materialGrades.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.types.some(type => type.toLowerCase().includes(search.toLowerCase())) ||
        product.materialGrades.some(grade => grade.toLowerCase().includes(search.toLowerCase()))
      : true;

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f5f7fa] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-condensed">
              {t("products.title")}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t("products.subtitle")}
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={t("products.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t("products.filters.all")}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                {t("products.noResults")}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Products;
