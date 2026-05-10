"use client";

import { MessageCircle, Mail, Share2, MapPin, Check } from "lucide-react";
import { generateContactMessage, openWhatsApp } from "@/lib/whatsapp";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 297 528 6617",
    href: "https://wa.me/542975286617",
    description: "Respuesta inmediata",
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "exelsiorcomodoro@gmail.com",
    href: "mailto:exelsiorcomodoro@gmail.com",
    description: "Consultas y pedidos",
    highlight: false,
  },
  {
    icon: Share2,
    label: "Instagram",
    value: "@exelsiorcr",
    href: "https://instagram.com/exelsiorcr",
    description: "Seguinos para novedades",
    highlight: false,
  },
];

const trustPoints = [
  "Fragancias autenticas",
  "Atencion inmediata",
  "Envios a todo el pais",
];

export default function FinalCTA() {
  const handleWhatsApp = () => {
    openWhatsApp(generateContactMessage());
  };

  return (
    <section
      id="contacto"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-red-950/20 to-black"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Ponete en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              contacto
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Escribinos por cualquiera de nuestros canales y te asesoramos de
            forma personalizada para encontrar tu perfume ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 rounded-2xl border transition-all duration-500 hover:shadow-2xl text-center space-y-4 ${
                  method.highlight
                    ? "bg-gradient-to-b from-red-950/40 to-black border-red-500/50 hover:border-red-400"
                    : "bg-gradient-to-b from-gray-900/40 to-black border-red-900/30 hover:border-red-500/50"
                }`}
              >
                <div className="inline-flex p-4 rounded-xl bg-red-900/20 border border-red-700/40 group-hover:bg-red-900/40 group-hover:border-red-500/60 transition-all duration-300">
                  <Icon
                    size={32}
                    className="text-red-400 group-hover:text-red-300 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-red-500 font-bold uppercase tracking-widest">
                    {method.label}
                  </p>
                  <p className="text-white font-bold text-lg group-hover:text-red-400 transition-colors duration-300">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="border border-red-900/30 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-red-950/30 to-black p-12 sm:p-16 space-y-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Descubri tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                aroma ideal
              </span>
            </h3>

            <p className="text-gray-300 max-w-xl mx-auto">
              Contactanos hoy y encontra el perfume arabe perfecto para ti.
              Nuestro equipo te asesora de forma personalizada.
            </p>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Escribinos por WhatsApp
            </button>

            <div className="border-t border-red-900/30 pt-8 mt-8">
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 justify-center">
                    <Check size={18} className="text-red-500" />
                    <p className="text-sm text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <MapPin size={14} />
              <span>Comodoro Rivadavia, Chubut, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
