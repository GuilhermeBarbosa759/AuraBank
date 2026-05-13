"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Smartphone } from "lucide-react";

export default function Security() {
  return (
    <section className="py-24 bg-slate-950" id="seguranca">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        
        {/* Parte 1: Texto de Entrada */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-400 font-semibold tracking-widest uppercase text-sm"
          >
            Segurança de nível bancário
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-50 mt-4 mb-6"
          >
            Sua tranquilidade é <br /> 
            nossa <span className="text-emerald-400">prioridade.</span>
          </motion.h2>
        </div>

        {/* Bloco 1: Modo Rua (Imagem na Direita) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Smartphone size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-50">Modo Rua Aura</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Configure limites inteligentes para suas transações quando estiver fora de casa. 
              Usamos geolocalização e reconhecimento de redes Wi-Fi seguras para garantir que, 
              se o seu celular for levado, seu dinheiro continue protegido.
            </p>
            <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Proteção automática em redes desconhecidas
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Bloqueio instantâneo via web
                </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Imagem de alguém usando celular na rua com tom noturno */}
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" 
              alt="Segurança Móvel" 
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
            {/* Elemento flutuante sobre a imagem para dar profundidade */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-slate-200">Modo Rua Ativo</span>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Biometria (Imagem na Esquerda) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
             <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" 
              alt="Criptografia e Biometria" 
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-50">Criptografia de Ponta</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Seus dados não são apenas guardados, eles são blindados. Utilizamos os mesmos 
              padrões de segurança dos maiores bancos mundiais, garantindo que sua identidade 
              seja verificada por biometria facial avançada em cada transação crítica.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <p className="text-emerald-400 font-bold text-xl">100%</p>
                    <p className="text-slate-500 text-xs uppercase tracking-tighter">Dados Criptografados</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <p className="text-emerald-400 font-bold text-xl">F2A</p>
                    <p className="text-slate-500 text-xs uppercase tracking-tighter">Autenticação Nativa</p>
                </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}