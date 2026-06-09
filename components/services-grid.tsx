import Image from "next/image";

export default function ServicesGrid() {
  const products = [
    {
      title: "Montagem de PC Gamer Custom",
      description: "Consultoria completa, escolha de peças ideais para o seu orçamento e montagem impecável com cable management perfeito.",
      price: "A partir de R$ 150,00",
      icon: (
        <svg className="w-12 h-12 mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
      )
    },
    {
      title: "Manutenção Preventiva",
      description: "Limpeza profunda, troca de pasta térmica de alta performance e formatação para deixar sua máquina como nova.",
      price: "A partir de R$ 120,00",
      icon: (
        <svg className="w-12 h-12 mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      )
    },
    {
      title: "Upgrade de Componentes",
      description: "Instalação de Watercooler, upgrade de SSD NVMe, memórias RAM ou placas de vídeo com máxima segurança.",
      price: "Orçamento Flexível",
      icon: (
        <svg className="w-12 h-12 mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      )
    },
    {
      title: "Conserto de Notebooks",
      description: "Reparo de placa-mãe, dobradiças, troca de telas, teclados e baterias. Resolvemos todos os problemas do seu laptop.",
      price: "Avaliação Gratuita",
      icon: (
        <svg className="w-12 h-12 mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      )
    }
  ];

  return (
    <section className="relative py-12 md:py-20 border-t border-slate-800 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Nossos Serviços Especializados</h2>
          <p className="text-lg text-slate-400">Atendimento profissional e focado em alta performance para sua máquina.</p>
        </div>

        {/* E-commerce Style Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <div key={index} className="flex flex-col h-full bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300 group">
              <div className="flex-1">
                {item.icon}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-green-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 mb-6 text-sm">{item.description}</p>
              </div>
              <div className="mt-auto">
                <div className="text-lg font-bold text-green-500 mb-4">{item.price}</div>
                <a
                  href="https://wa.me/556130440199"
                  target="_blank"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black font-semibold transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Orçar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
