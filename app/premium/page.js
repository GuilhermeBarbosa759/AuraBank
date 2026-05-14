import Link from "next/link";
import { Check, Star, Crown, Shield, Zap } from "lucide-react";

export default function PremiumPage() {
  const benefits = [
    {
      icon: <Crown className="text-emerald-400" size={24} />,
      title: "Atendimento Priority",
      desc: "Suporte exclusivo 24h sem filas de espera."
    },
    {
      icon: <Zap className="text-emerald-400" size={24} />,
      title: "Cashback em Dobro",
      desc: "Receba 2% de volta em todas as compras no crédito."
    },
    {
      icon: <Shield className="text-emerald-400" size={24} />,
      title: "Seguro Viagem",
      desc: "Proteção completa para você e sua família em qualquer lugar."
    },
    {
      icon: <Star className="text-emerald-400" size={24} />,
      title: "Investimentos VIP",
      desc: "Acesso a fundos exclusivos com taxas de administração zero."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Header*/}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          Aura<span className="text-emerald-400">.</span>
        </Link>
        <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
          Voltar para Home
        </Link>
      </nav>

      {/* Hero*/}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Experiência Black</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Sua liberdade financeira <br /> merece o nível <span className="text-emerald-400 font-extrabold italic">Premium.</span>
        </h1>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Uma conta projetada para quem não aceita limites. Design minimalista, benefícios máximos.
        </p>
        <button className="bg-emerald-500 text-slate-950 font-bold px-10 py-4 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
          Assinar Aura Premium
        </button>
      </section>

      {/* Benefícios */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer*/}
      <footer className="border-t border-slate-900 py-12 text-center">
        <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
          Aura Bank • 2026 • Exclusividade e Segurança
        </p>
      </footer>
    </main>
  );
}