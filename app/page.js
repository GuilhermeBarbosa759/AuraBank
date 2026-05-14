"use client";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Benefits from "../components/Benefits";
import Security from "../components/Security";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 overflow-hidden font-sans pt-20"> 
      <Navbar />
      
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-20 max-w-7xl mx-auto">
        {/* lado esquerdo - Texto */}
        <div className="lg:w-1/2 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            Sua vida financeira, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              sem complicação.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-md"
          >
            Conta digital com rendimento acima da poupança e cartão de crédito sem anuidade. Tudo no seu controle.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              Pedir meu cartão
            </button>
          </motion.div>
        </div>

        {/* lado direito - cartão */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 shadow-2xl flex flex-col justify-between p-6"
          >
             <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Aura</span>
                <span className="text-emerald-400">)))</span>
             </div>
             <div>
                <p className="font-mono text-sm tracking-widest text-slate-400">**** **** **** 1234</p>
                <p className="mt-2 font-medium">Seu Nome Aqui</p>
             </div>
          </motion.div>
        </motion.div>

        {/* fundo*/}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      </section>
      <Benefits />
      <Security />
      <Footer />
    </main>
  );
}