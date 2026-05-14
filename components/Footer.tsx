"use client";

import Link from "next/link";
import { Share2, MessageCircle, MapPin, Mail } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfumes", href: "#perfumes" },
  { label: "Recomendador", href: "#recomendador" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Medios de Pago", href: "#medios-de-pago" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: Share2, href: "https://instagram.com/exelsiorcr", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/542975286617", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-900/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-2">
            <div>
              <h3 className="text-2xl font-bold tracking-widest text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  EXELSIOR
                </span>
              </h3>
              <p className="text-red-500/70 text-xs tracking-widest mt-1">
                PERFUMES ARABES PREMIUM
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Fragancias arabes premium para quienes aprecian la verdadera
              calidad, sofisticacion y aromas intensos que dejan huella.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-red-900/20 border border-red-700/40 text-red-400 hover:bg-red-900/40 hover:border-red-500/60 hover:text-red-300 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-bold text-white uppercase text-sm tracking-wider">
              Navegacion
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-bold text-white uppercase text-sm tracking-wider">
              Contacto
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/542975286617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                <MessageCircle size={16} />
                <span>+54 297 528 6617</span>
              </a>
              <a
                href="mailto:exelsiorcomodoro@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                <span>exelsiorcomodoro@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Comodoro Rivadavia, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; 2026 EXELSIOR. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Terminos</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Cookies</a>
          </div>
        </div>

        <div className="pt-8 border-t border-red-900/20 text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            Hecho con elegancia y lujo oriental
          </p>
        </div>
      </div>
    </footer>
  );
}
