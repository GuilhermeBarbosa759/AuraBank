"use client";
import { Hexagon } from "lucide-react";
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Produtos",
      links: ["Conta Digital", "Cartão de Crédito", "Empréstimos", "Investimentos", "Aura Premium"],
    },
    {
      title: "A Aura",
      links: ["Sobre nós", "Carreiras", "Segurança", "Imprensa", "ESG"],
    },
    {
      title: "Suporte",
      links: ["Central de Ajuda", "Ouvidoria", "Canais de Atendimento", "Comunidade Aura"],
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Hexagon className="text-emerald-400 w-8 h-8" />
              <span className="text-2xl font-bold text-slate-50 tracking-tight">
                Aura<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Inovando a forma como você lida com seu dinheiro.
            </p>
          </div>

          {/* Colunas de Itens (Estáticos com Hover) */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-slate-50 font-bold mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <span className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200 cursor-default">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha Divisória */}
        <div className="h-[1px] w-full bg-slate-900 mb-8" />

        {/* Rodapé Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Redes Sociais */}
          <div className="flex gap-6">
            <span className="text-slate-500 hover:text-emerald-400 transition-colors cursor-default">
                <FaInstagram size={22} />
            </span>
            <span className="text-slate-500 hover:text-emerald-400 transition-colors cursor-default">
                <FaLinkedinIn size={22} />
            </span>
            <span className="text-slate-500 hover:text-emerald-400 transition-colors cursor-default">
                <FaTwitter size={22} />
            </span>
            <span className="text-slate-500 hover:text-emerald-400 transition-colors cursor-default">
                <FaFacebookF size={20} />
            </span>
            <span className="text-slate-500 hover:text-emerald-400 transition-colors cursor-default">
                <FaYoutube size={22} />
            </span>
          </div>

          {/* Dados Legais */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs">
              © {currentYear} Aura Bank S.A. - Instituição de Pagamento. 00.000.000/0001-00
            </p>
            <p className="text-slate-600 text-[10px] mt-1 uppercase tracking-[0.2em] font-medium">
              Projeto acadêmico sem fins lucrativos
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}