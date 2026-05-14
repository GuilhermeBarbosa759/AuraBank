"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Lock } from "lucide-react";

export default function Security() {
  return (
    <section id="seguranca" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        
        <div className="mb-20 text-center md:text-left">
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
            className="text-4xl md:text-6xl font-bold text-slate-50 mt-4"
          >
            Sua tranquilidade é <br /> 
            nossa <span className="text-emerald-400">prioridade.</span>
          </motion.h2>
        </div>

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
              Garantimos que seu dinheiro continue protegido mesmo em situações inesperadas.
            </p>
            <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Proteção automática em redes desconhecidas
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Bloqueio instantâneo via central Aura
                </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" 
              alt="Segurança Móvel" 
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
          </motion.div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div className="lg:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" 
              alt="Criptografia" 
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-50">Criptografia de Ponta</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Seus dados são blindados com os mesmos padrões de segurança dos maiores bancos mundiais, 
              garantindo verificação facial em cada transação crítica.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
                    <p className="text-emerald-400 font-bold text-xl">100%</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Criptografado</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
                    <p className="text-emerald-400 font-bold text-xl">Biometria</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Nativa</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}