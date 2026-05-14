"use client"; // Necessário para o Framer Motion no App Router
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Benefits from "../components/Benefits";
import Security from "../components/Security";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 overflow-hidden font-sans pt-20"> 
      <Navbar /> {/* <-- Adicionamos o componente aqui */}
      
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-20 max-w-7xl mx-auto">
        {/* ... (todo o resto do código da seção Hero continua exatamente igual) ... */}
        
        {/* Lado Esquerdo - Textos */}
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

        {/* Lado Direito - Imagem/Animação (Cartão Flutuando) */}
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
             {/* Simulação de um cartão de crédito */}
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

        {/* Fundo Decorativo */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      </section>
      <Benefits />
      <Security />
      <Footer />
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
