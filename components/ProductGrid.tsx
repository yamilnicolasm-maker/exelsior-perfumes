"use client";

import { useState, useMemo, useCallback } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";

const BRAND_MAP: Record<string, string> = {
  "khamrah-edp": "Lattafa",
  "khamrah-qahwa": "Lattafa",
  "yara-edp": "Lattafa",
  "yara-elixir": "Lattafa",
  "asad": "Lattafa",
  "asad-bourbon": "Lattafa",
  "asad-elixir": "Lattafa",
  "his-confession": "Lattafa",
  "mussaman-black": "Lattafa",
  "mussaman-white": "Lattafa",
  "fakhar-gold": "Lattafa",
  "mayar": "Lattafa",
  "teriaq": "Lattafa",
  "the-kingdom": "Lattafa",
  "nebras": "Lattafa",
  "qimmah": "Lattafa",
  "shaheen-gold": "Lattafa",
  "shaheen-silver": "Lattafa",
  "art-of-nature-ii": "Lattafa",
  "art-of-universe": "Lattafa",
  "noble-ameer": "Lattafa",
  "pride-ishq-al-shuyukh-gold": "Lattafa",
  "vintage-radio": "Lattafa",
  "hawas-elixir": "Rasasi",
  "hawas-fire": "Rasasi",
  "hawas-malibu": "Rasasi",
  "9pm-night-out": "Afnan",
  "9pm-rebel": "Afnan",
  "supremacy-collection": "Afnan",
  "shc-ii": "Afnan",
  "cdn-precieux": "Armaf",
  "cdn-intense-men": "Armaf",
  "cdn-milestone": "Armaf",
  "cdn-woman": "Armaf",
  "odyssey-homme-white": "Armaf",
  "odyssey-homme-edp": "Armaf",
  "odyssey-mandaryn-sky": "Armaf",
  "odyssey-aoud": "Armaf",
  "odyssey-revolucion": "Armaf",
  "odyssey-mega": "Armaf",
  "odyssey-wild-one-gold": "Armaf",
  "odyssey-aqua": "Armaf",
  "salvo-intense": "Maison Alhambra",
  "salvo-elixir": "Maison Alhambra",
  "philos-pura": "Maison Alhambra",
  "alpine": "Maison Alhambra",
  "jorge-di-profumo-blue": "Maison Alhambra",
  "jorge-di-profumo-edp": "Maison Alhambra",
  "al-haramain-amber-oud-gold": "Al Haramain",
  "avenue-veneno-bianco": "French Avenue",
  "avenue-spectre-ghost": "French Avenue",
  "evoke-gold": "Ajmal",
  "kit-victoria-secret": "Victoria's Secret",
};

const BRAND_ORDER = [
  "Lattafa",
  "Armaf",
  "Rasasi",
  "Afnan",
  "Maison Alhambra",
  "Al Haramain",
  "French Avenue",
  "Ajmal",
  "Victoria's Secret",
];

type GenderFilter = "Masculino" | "Femenino" | "Unisex";

const GENDER_TABS: { label: string; value: GenderFilter }[] = [
  { label: "Hombre", value: "Masculino" },
  { label: "Mujer", value: "Femenino" },
  { label: "Unisex", value: "Unisex" },
];

function groupByBrand(items: Product[]): { brand: string; products: Product[] }[] {
  const groups: Record<string, Product[]> = {};

  for (const product of items) {
    const brand = BRAND_MAP[product.id] ?? "Otros";
    if (!groups[brand]) {
      groups[brand] = [];
    }
    groups[brand].push(product);
  }

  return BRAND_ORDER
    .filter((brand) => groups[brand] && groups[brand].length > 0)
    .map((brand) => ({ brand, products: groups[brand] }));
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const INITIAL_VISIBLE = 3;

export default function ProductGrid() {
  const [selectedGender, setSelectedGender] = useState<GenderFilter>("Masculino");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>({});

  const toggleBrand = useCallback((brand: string) => {
    setExpandedBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = normalizeText(searchQuery.trim());
    return products.filter((p) => {
      const name = normalizeText(p.name);
      const brand = normalizeText(BRAND_MAP[p.id] ?? "");
      const category = normalizeText(p.category);
      const notes = p.notes.map(normalizeText).join(" ");
      return (
        name.includes(query) ||
        brand.includes(query) ||
        category.includes(query) ||
        notes.includes(query)
      );
    });
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;
  const genderProducts = products.filter((p) => p.gender === selectedGender);
  const brandGroups = groupByBrand(isSearching && searchResults ? searchResults : genderProducts);

  return (
    <section id="perfumes" className="relative py-12 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            Nuestras{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Fragancias
            </span>{" "}
            Premium
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
            Cada aroma es una historia. Descubri nuestras fragancias arabes
            premium, cuidadosamente seleccionadas para quienes aprecian la
            verdadera calidad y sofisticacion.
          </p>
        </div>

        <div className="max-w-xl mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre, marca o notas..."
            className="w-full pl-11 pr-11 py-3 sm:py-4 bg-gray-900/50 border border-red-900/30 focus:border-red-500/50 rounded-xl text-white placeholder-gray-500 outline-none transition-colors duration-300 text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-400 transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {isSearching ? (
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              {searchResults && searchResults.length > 0
                ? `${searchResults.length} resultado${searchResults.length > 1 ? "s" : ""} para "${searchQuery}"`
                : `No se encontraron resultados para "${searchQuery}"`}
            </p>
          </div>
        ) : (
          <div className="flex justify-center gap-2 sm:gap-4">
            {GENDER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setSelectedGender(tab.value);
                  setExpandedBrands({});
                }}
                className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-all duration-300 ${
                  selectedGender === tab.value
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                    : "border-2 border-red-900/30 text-gray-300 hover:border-red-500/50 hover:text-red-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {brandGroups.map((group) => {
          const isExpanded = expandedBrands[group.brand] || isSearching;
          const visibleProducts = isExpanded
            ? group.products
            : group.products.slice(0, INITIAL_VISIBLE);
          const hasMore = group.products.length > INITIAL_VISIBLE;

          return (
            <div key={group.brand} className="space-y-6 sm:space-y-8">
              <div className="text-center border-t border-red-900/30 pt-6 sm:pt-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  {group.brand}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  {group.products.length} {group.products.length === 1 ? "fragancia" : "fragancias"}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {hasMore && !isExpanded && (
                <div className="text-center">
                  <button
                    onClick={() => toggleBrand(group.brand)}
                    className="inline-flex items-center gap-2 border-2 border-red-500/40 hover:border-red-500 text-red-400 hover:text-red-300 font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Ver {group.products.length - INITIAL_VISIBLE} mas de {group.brand}
                    <ChevronDown size={18} />
                  </button>
                </div>
              )}
              {hasMore && isExpanded && !isSearching && (
                <div className="text-center">
                  <button
                    onClick={() => toggleBrand(group.brand)}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-red-400 font-medium py-2 px-4 transition-colors duration-300 text-sm"
                  >
                    Ver menos
                    <ChevronDown size={16} className="rotate-180" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
