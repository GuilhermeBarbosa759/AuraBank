// app/premium/page.js
import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-emerald-500/10 p-4 rounded-3xl mb-6">
        <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Experiência Exclusiva</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6">
        Aura <span className="text-emerald-400">Premium.</span>
      </h1>
      <p className="text-slate-400 text-lg max-w-xl mb-10">
        Investimentos personalizados, cashback em dobro e atendimento prioritário. 
        O próximo nível da sua vida financeira começa aqui.
      </p>
      <Link 
        href="/" 
        className="text-slate-400 hover:text-white transition-colors border border-slate-800 px-8 py-3 rounded-full"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}