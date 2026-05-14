"use client";

import { Landmark, Smartphone, Shield, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const paymentOptions = [
  {
    icon: Landmark,
    title: "Transferencia Bancaria",
    description:
      "Transferi directamente a nuestra cuenta. Te enviamos los datos por WhatsApp al confirmar tu pedido.",
    details: ["CBU / Alias disponible", "Confirmacion inmediata"],
  },
  {
    icon: Smartphone,
    title: "Mercado Pago",
    description:
      "Paga con Mercado Pago de forma rapida y segura. Aceptamos todas las tarjetas y dinero en cuenta.",
    details: ["Tarjetas de credito y debito", "Dinero en cuenta MP"],
  },
];

const securityPoints = [
  "Pago 100% seguro",
  "Coordinamos por WhatsApp",
  "Comprobante de pago al instante",
];

export default function PaymentMethods() {
  const handleWhatsApp = () => {
    openWhatsApp(
      "Hola EXELSIOR, quiero consultar sobre los medios de pago disponibles.",
    );
  };

  return (
    <section
      id="medios-de-pago"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black"
    >
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-900/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Medios de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              pago
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Elegí tu perfume y coordinamos el pago de la forma que te resulte
            mas comoda. Aceptamos transferencia bancaria y Mercado Pago.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paymentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="group p-8 bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 hover:border-red-500/50 rounded-2xl transition-all duration-500 hover:shadow-2xl space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-red-900/20 border border-red-700/40 group-hover:bg-red-900/40 group-hover:border-red-500/60 transition-all duration-300">
                    <Icon
                      size={32}
                      className="text-red-400 group-hover:text-red-300 transition-colors"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {option.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {option.description}
                </p>

                <ul className="space-y-3">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-500" />
              </div>
            );
          })}
        </div>

        <div className="border border-red-900/30 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-red-950/30 to-black p-12 text-center space-y-6">
            <div className="inline-flex p-4 rounded-xl bg-red-900/20 border border-red-700/40">
              <Shield size={32} className="text-red-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Compra{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                segura y simple
              </span>
            </h3>

            <p className="text-gray-400 max-w-xl mx-auto">
              Escribinos por WhatsApp, elegimos juntos tu perfume ideal y te
              enviamos el link de pago o los datos para transferir. Asi de
              facil.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-2">
              {securityPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <p className="text-sm text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Consultar medios de pago
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
