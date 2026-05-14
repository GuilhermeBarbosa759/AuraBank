"use client";
import { motion } from "framer-motion";
import { CreditCard, Zap, TrendingUp, ShieldCheck } from "lucide-react";

export default function Benefits() {
  // Array com os dados dos nossos cartões de benefícios
  const benefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-400" />,
      title: "Cartão sem anuidade",
      description: "Seu verdinho não tem taxas escondidas nem letras miúdas. O controle do seu dinheiro é totalmente seu."
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: "Pix Ilimitado",
      description: "Transfira dinheiro e pague contas em segundos, a qualquer hora do dia ou da noite, de graça."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      title: "Rendimento Automático",
      description: "Seu dinheiro na conta rende mais que a poupança todos os dias. É só deixar lá e ver crescer."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "Segurança de Ponta",
      description: "Criptografia avançada e biometria para garantir que só você tenha acesso ao seu patrimônio."
    }
  ];

  // Configurações do Framer Motion para o efeito cascata (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Atraso de 0.2s entre o surgimento de cada cartão
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-8 lg:px-24 max-w-7xl mx-auto" id="beneficios">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Anima apenas na primeira vez que aparece na tela
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-50 mb-6"
        >
          Tudo que você precisa, <br />
          <span className="text-emerald-400">em um só lugar.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Nascemos para devolver o controle da sua vida financeira para quem realmente importa: você. Sem filas, sem burocracia.
        </motion.p>
      </div>

      {/* Grid de Cartões */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors group"
          >
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-50 mb-3">{benefit.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}