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
        <div className="relative h-40 sm:h-64 bg-gradient-to-br from-red-950/30 to-black overflow-hidden">
          <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-500" />

          <div className="w-full h-full flex items-center justify-center">
            {product.image && !imgError ? (
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2 sm:p-3"
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className="text-center space-y-1">
                <Package size={32} className="text-red-900/50 mx-auto sm:hidden" />
                <Package size={48} className="text-red-900/50 mx-auto hidden sm:block" />
                <p className="text-gray-500 text-xs sm:text-sm">{product.category}</p>
              </div>
            )}
          </div>

          <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
            <span className="bg-red-600/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            <Heart
              size={14}
              className={`sm:hidden ${isLiked ? "fill-red-500 text-red-500" : "text-gray-300"}`}
            />
            <Heart
              size={18}
              className={`hidden sm:block ${isLiked ? "fill-red-500 text-red-500" : "text-gray-300"}`}
            />
          </button>
        </div>

        <div className="p-3 sm:p-5 space-y-2 sm:space-y-4">
          <h3 className="text-sm sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>

          <div className="hidden sm:block space-y-2">
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

          <div className="flex flex-wrap gap-1 sm:hidden">
            {product.notes.slice(0, 2).map((note) => (
              <span
                key={note}
                className="text-[10px] bg-red-900/20 border border-red-700/40 text-gray-300 px-1.5 py-0.5 rounded"
              >
                {note}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 hidden sm:block">
            {product.description}
          </p>

          <div className="border-t border-red-900/30 pt-2 sm:pt-4 flex items-center justify-between">
            <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              ${product.price.toLocaleString()}
            </p>
            <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${
              product.stock > 2
                ? "bg-green-900/30 text-green-400 border border-green-700/40"
                : product.stock > 0
                  ? "bg-yellow-900/30 text-yellow-400 border border-yellow-700/40"
                  : "bg-red-900/30 text-red-400 border border-red-700/40"
            }`}>
              {product.stock > 0 ? `${product.stock} disp.` : "Agotado"}
            </span>
          </div>

          <button
            onClick={handleWhatsApp}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base"
          >
            <ShoppingBag size={14} className="sm:hidden" />
            <ShoppingBag size={16} className="hidden sm:block" />
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
}
