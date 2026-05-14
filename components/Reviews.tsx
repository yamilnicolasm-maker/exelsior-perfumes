"use client";

import { Star } from "lucide-react";
import { reviews } from "@/data/products";

export default function Reviews() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            Lo que dicen nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              clientes
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Personas que disfrutan nuestras fragancias premium cada dia.
            Estas son sus historias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="group relative">
              <div className="h-full p-8 bg-gradient-to-b from-gray-900/40 to-black border border-red-900/30 hover:border-red-500/50 rounded-xl transition-all duration-500 hover:shadow-xl space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="border-t border-red-900/30 pt-6">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-red-500 text-sm font-semibold">Cliente verificado</p>
                </div>
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 rounded-t-xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-red-900/30 pt-12 mt-12">
          <div className="bg-gradient-to-r from-red-950/20 to-black border border-red-900/30 rounded-xl p-8 text-center space-y-4">
            <p className="text-gray-400 text-sm uppercase tracking-widest">Que mas dicen?</p>
            <p className="text-2xl font-bold text-white">
              5 estrellas en todas nuestras resenas
            </p>
            <div className="flex justify-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="fill-red-500 text-red-500" />
              ))}
            </div>
            <p className="text-gray-400">
              Basado en +50 compras verificadas y experiencias reales de clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
