"use client";
import { useState } from "react";
import { Menu, X, Hexagon } from "lucide-react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignUpModal from "./SiginUpModal";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const switchToSignUp = () => { setIsLoginOpen(false); setIsSignUpOpen(true); };
  const switchToLogin = () => { setIsSignUpOpen(false); setIsLoginOpen(true); };

  const navLinks = [
    { name: "Benefícios", href: "#beneficios" },
    { name: "Segurança", href: "#seguranca" },
    { name: "Aura Premium", href: "/premium" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center justify-between h-20">
            
            <Link href="/" className="flex items-center gap-2">
              <Hexagon className="text-emerald-400 w-8 h-8" />
              <span className="text-2xl font-bold text-slate-50">
                Aura<span className="text-emerald-400">.</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-6 border-l border-slate-800 pl-10">
                <button onClick={() => setIsLoginOpen(true)} className="text-slate-300 hover:text-white text-sm font-semibold transition-colors">
                  Entrar
                </button>
                <button onClick={() => setIsSignUpOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-full transition-all active:scale-95">
                  Abra sua conta
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-8 flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg text-slate-300">
                {link.name}
              </Link>
            ))}
            <hr className="border-slate-800" />
            <button onClick={() => { setIsOpen(false); setIsLoginOpen(true); }} className="text-slate-300 font-bold">Login</button>
            <button onClick={() => { setIsOpen(false); setIsSignUpOpen(true); }} className="bg-emerald-500 text-slate-950 font-bold py-4 rounded-xl">Abra sua conta</button>
          </div>
        )}
      </nav>

      {/* Modais posicionados fora da TAG nav mas dentro do FRAGMENTO principal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        openSignUp={switchToSignUp} 
      />
      
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        openLogin={switchToLogin} 
      />
    </>
  );
}