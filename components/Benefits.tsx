"use client";

import { Clock, Sparkles, Truck, MessageCircle, Gift, MapPin } from "lucide-react";
import { benefits } from "@/data/products";

const ICONS = [Clock, Sparkles, Truck, MessageCircle, Gift];

export default function Benefits() {
  return (
    <section id="nosotros" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black -z-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Por que elegir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              EXELSIOR
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nos comprometemos a entregar la mejor experiencia en perfumeria arabe
            premium. Cada detalle cuenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-red-500 flex-shrink-0" />
              <p className="text-red-400 font-bold text-sm uppercase tracking-widest">
                Comodoro Rivadavia, Chubut, Argentina
              </p>
            </div>
            <h3 className="text-3xl font-bold text-white leading-tight">
              Pasion por la perfumeria arabe desde la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Patagonia
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Somos un emprendimiento nacido en Comodoro Rivadavia dedicado a
              traer las mejores fragancias arabes a toda la Argentina. Trabajamos
              con las casas mas reconocidas del mundo oriental como Lattafa,
              Armaf, Rasasi, Afnan y Maison Alhambra.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Cada fragancia que ofrecemos fue cuidadosamente seleccionada para
              garantizar calidad, duracion y una experiencia olfativa unica.
              Creemos que un buen perfume habla por vos.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 rounded-xl p-6 text-center space-y-2">
                <p className="text-3xl font-bold text-red-500">50+</p>
                <p className="text-gray-400 text-sm">Fragancias Premium</p>
              </div>
              <div className="bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 rounded-xl p-6 text-center space-y-2">
                <p className="text-3xl font-bold text-red-500">9+</p>
                <p className="text-gray-400 text-sm">Casas Arabes</p>
              </div>
              <div className="bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 rounded-xl p-6 text-center space-y-2">
                <p className="text-3xl font-bold text-red-500">24/7</p>
                <p className="text-gray-400 text-sm">Atencion Personal</p>
              </div>
              <div className="bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 rounded-xl p-6 text-center space-y-2">
                <p className="text-3xl font-bold text-red-500">ARG</p>
                <p className="text-gray-400 text-sm">Envios a Todo el Pais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = ICONS[index] ?? Clock;
            return (
              <div key={index} className="group relative h-full">
                <div className="h-full p-8 bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 hover:border-red-500/50 rounded-xl transition-all duration-500 hover:shadow-xl space-y-4">
                  <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 mt-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
