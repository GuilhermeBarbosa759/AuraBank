"use client";
import { useState } from "react";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";
import Link from "next/link";
=======
import { motion } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";
>>>>>>> 939fb92 (primeiro commit)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
<<<<<<< HEAD
    { name: "Benefícios", href: "#beneficios", type: "anchor" },
    { name: "Segurança", href: "#seguranca", type: "anchor" },
    { name: "Aura Premium", href: "/premium", type: "route" },
    { name: "Ajuda", href: "#", type: "anchor" },
=======
    { name: "Para Você", href: "#" },
    { name: "Para Empresas", href: "#" },
    { name: "Segurança", href: "#" },
    { name: "Ajuda", href: "#" },
>>>>>>> 939fb92 (primeiro commit)
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
<<<<<<< HEAD
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Hexagon className="text-emerald-400 w-8 h-8" />
            <span className="text-2xl font-bold text-slate-50 tracking-wide">
              Aura<span className="text-emerald-400">.</span>
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.type === "route" ? (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Botões de Ação Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-slate-300 hover:text-white font-medium text-sm px-4 py-2 transition-colors"
              onClick={() => console.log("Abrir login")} // Placeholder para função futura
            >
              Login
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-sm px-6 py-2.5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
=======
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
>>>>>>> 939fb92 (primeiro commit)
              Abra sua conta
            </button>
          </div>

<<<<<<< HEAD
          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
=======
          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
>>>>>>> 939fb92 (primeiro commit)
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
<<<<<<< HEAD
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-slate-300 hover:text-emerald-400 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                <button className="w-full text-slate-300 font-bold py-3">
                  Login
                </button>
                <button className="w-full bg-emerald-500 text-slate-900 font-bold py-4 rounded-xl">
                  Abra sua conta
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
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
>>>>>>> 939fb92 (primeiro commit)
    </nav>
  );
}