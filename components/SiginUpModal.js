"use client";
import { X, Mail, Lock, User, CreditCard } from "lucide-react";

export default function SiginUpModal({ isOpen, onClose, openLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Abra sua conta</h2>
          <p className="text-slate-400 text-sm">Rápido, seguro e totalmente digital.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="text" placeholder="Seu nome" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">CPF</label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="text" placeholder="000.000.000-00" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="email" placeholder="seu@email.com" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="password" placeholder="••••••••" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-xl mt-4 transition-all">
            Criar conta gratuita
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            Já tem conta? <span onClick={openLogin} className="text-emerald-400 font-semibold cursor-pointer hover:underline">Fazer login</span>
          </p>
        </div>
      </div>
    </div>
  );
}