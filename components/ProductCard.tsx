"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Package } from "lucide-react";
import { Product } from "@/data/products";
import { generateProductMessage, openWhatsApp } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleWhatsApp = () => {
    openWhatsApp(generateProductMessage(product.name));
  };

  return (
    <div className="group relative h-full">
      <div className="h-full bg-gradient-to-b from-gray-900/50 to-black border border-red-900/30 hover:border-red-500/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
        <div className="relative h-64 bg-gradient-to-br from-red-950/30 to-black overflow-hidden">
          <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-500" />

          <div className="w-full h-full flex items-center justify-center">
            {product.image && !imgError ? (
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-3"
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className="text-center space-y-2">
                <Package size={48} className="text-red-900/50 mx-auto" />
                <p className="text-gray-500 text-sm">{product.category}</p>
              </div>
            )}
          </div>

          <div className="absolute top-4 left-4">
            <span className="bg-red-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            <Heart
              size={18}
              className={isLiked ? "fill-red-500 text-red-500" : "text-gray-300"}
            />
          </button>

          <div className="absolute bottom-4 right-4">
            <span className="text-xs text-red-400 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
              {product.gender}
            </span>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
            {product.name}
          </h3>

          <div className="space-y-2">
            <p className="text-xs text-red-500 font-semibold uppercase tracking-wider">
              Notas Aromaticas
            </p>
            <div className="flex flex-wrap gap-2">
              {product.notes.map((note) => (
                <span
                  key={note}
                  className="text-xs bg-red-900/20 border border-red-700/40 text-gray-300 px-2 py-1 rounded-lg"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2">
            {product.description}
          </p>

          <div className="border-t border-red-900/30 pt-4">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              ${product.price.toLocaleString()}
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={handleWhatsApp}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Consultar
            </button>
            <button className="flex-1 border-2 border-red-500/40 hover:border-red-500 text-red-400 hover:text-red-300 font-bold py-3 px-4 rounded-lg transition-all duration-300">
              Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
