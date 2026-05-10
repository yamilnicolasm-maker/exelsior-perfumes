"use client";

import { useState } from "react";
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

export default function ProductGrid() {
  const [selectedGender, setSelectedGender] = useState<GenderFilter>("Masculino");

  const genderProducts = products.filter((p) => p.gender === selectedGender);
  const brandGroups = groupByBrand(genderProducts);

  return (
    <section id="perfumes" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Nuestras{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Fragancias
            </span>{" "}
            Premium
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Cada aroma es una historia. Descubri nuestras fragancias arabes
            premium, cuidadosamente seleccionadas para quienes aprecian la
            verdadera calidad y sofisticacion.
          </p>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4">
          {GENDER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedGender(tab.value)}
              className={`px-5 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                selectedGender === tab.value
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "border-2 border-red-900/30 text-gray-300 hover:border-red-500/50 hover:text-red-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {brandGroups.map((group) => (
          <div key={group.brand} className="space-y-8">
            <div className="text-center border-t border-red-900/30 pt-10">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                {group.brand}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
