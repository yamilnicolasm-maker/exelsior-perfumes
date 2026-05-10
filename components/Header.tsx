"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const BRANDS = [
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

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Recomendador", href: "#recomendador" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [perfumesOpen, setPerfumesOpen] = useState(false);
  const [mobilePerfumesOpen, setMobilePerfumesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="EXELSIOR"
                width={1280}
                height={854}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#inicio"
              className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium tracking-wide"
            >
              Inicio
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setPerfumesOpen(true)}
              onMouseLeave={() => setPerfumesOpen(false)}
            >
              <Link
                href="#perfumes"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium tracking-wide"
              >
                Perfumes
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${perfumesOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {perfumesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-black/95 backdrop-blur-lg border border-red-900/30 rounded-xl p-2 min-w-[220px] shadow-2xl shadow-red-900/10">
                    <Link
                      href="#perfumes"
                      className="block px-4 py-2.5 text-sm text-white hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-200 font-semibold"
                      onClick={() => setPerfumesOpen(false)}
                    >
                      Ver Todo el Catalogo
                    </Link>
                    <div className="h-px bg-red-900/30 my-1" />
                    {BRANDS.map((brand) => (
                      <Link
                        key={brand}
                        href="#perfumes"
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-200"
                        onClick={() => setPerfumesOpen(false)}
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-900/20 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-red-900/30">
            <div className="flex flex-col gap-1 pt-4">
              <Link
                href="#inicio"
                className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-red-900/10"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>

              <button
                onClick={() => setMobilePerfumesOpen(!mobilePerfumesOpen)}
                className="flex items-center justify-between text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-red-900/10 text-left"
              >
                Perfumes
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobilePerfumesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobilePerfumesOpen && (
                <div className="pl-4 space-y-0.5">
                  <Link
                    href="#perfumes"
                    className="block text-sm text-white font-semibold hover:text-red-400 px-4 py-2 rounded-lg hover:bg-red-900/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ver Todo
                  </Link>
                  {BRANDS.map((brand) => (
                    <Link
                      key={brand}
                      href="#perfumes"
                      className="block text-sm text-gray-400 hover:text-red-400 px-4 py-2 rounded-lg hover:bg-red-900/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-red-900/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
