"use client";

import Image from "next/image";
import { generateContactMessage, openWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
  const handleWhatsApp = () => {
    openWhatsApp(generateContactMessage());
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 z-10 order-2 md:order-1">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-red-500 text-xs sm:text-sm font-bold tracking-widest uppercase">
              Perfumes de Lujo
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              Perfumes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Arabes
              </span>{" "}
              de Lujo
            </h1>
          </div>

          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-xl text-center md:text-left">
            Aromas intensos, elegantes y memorables para quienes buscan dejar
            huella.
          </p>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl text-center md:text-left">
            Descubri fragancias premium con notas de oud, ambar, musk, especias
            y maderas orientales. Cada frasco es una experiencia sensorial unica.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#perfumes"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base"
            >
              Ver Catalogo
            </a>
            <button
              onClick={handleWhatsApp}
              className="border-2 border-red-500 text-red-400 hover:bg-red-900/20 hover:text-red-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Consultar por WhatsApp
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-wrap sm:gap-8 pt-6 sm:pt-8 border-t border-red-900/30">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-red-500">50+</p>
              <p className="text-xs sm:text-sm text-gray-400">Fragancias</p>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-red-500">100%</p>
              <p className="text-xs sm:text-sm text-gray-400">Arabes</p>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-red-500">24/7</p>
              <p className="text-xs sm:text-sm text-gray-400">Atencion</p>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-red-500">ARG</p>
              <p className="text-xs sm:text-sm text-gray-400">Envios</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center order-1 md:order-2">
          <div className="animate-float">
            <Image
              src="/logo.png"
              alt="EXELSIOR"
              width={1280}
              height={854}
              className="w-48 sm:w-64 md:w-full md:max-w-lg mix-blend-screen"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </section>
  );
}
