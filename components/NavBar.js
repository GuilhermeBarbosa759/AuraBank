"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Para Você", href: "#" },
    { name: "Para Empresas", href: "#" },
    { name: "Segurança", href: "#" },
    { name: "Ajuda", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Hexagon className="text-emerald-400 w-8 h-8" strokeWidth={2} />
            <span className="text-2xl font-bold text-slate-50 tracking-wide">
              AuraBank<span className="text-emerald-400">.</span>
            </span>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botões Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white font-medium text-sm px-4 py-2 transition-colors">
              Login
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full transition-transform transform hover:scale-105">
              Abra sua conta
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 border-b border-slate-700"
        >
          <div className="px-6 pt-4 pb-6 space-y-4 shadow-xl">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-slate-300 hover:text-emerald-400 font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-700 flex flex-col space-y-3">
              <button className="w-full text-center text-slate-300 font-medium py-2">
                Login
              </button>
              <button className="w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-full">
                Abra sua conta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}