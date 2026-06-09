export default function Cta() {
  return (
    <section className="bg-black py-12 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl text-center shadow-[0_0_30px_rgba(34,197,94,0.1)] border border-green-500/20 bg-slate-950"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-green-500 blur-[80px] opacity-30" />
          </div>
          
          <div className="px-4 py-12 md:px-12 md:py-20 relative z-10">
            <h2 className="mb-12 border-y border-green-500/20 py-4 text-3xl font-black text-white md:mb-16 md:text-4xl uppercase tracking-tight">
              Onde Fica a Base
            </h2>
            <div className="mx-auto max-w-3xl grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Telefone */}
              <div className="flex flex-col items-center p-6 bg-black/60 rounded-2xl border border-green-500/30 hover:border-green-500 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] group">
                <svg className="w-10 h-10 mb-4 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Contato Rápido</h3>
                <p className="mt-2 text-white font-black text-lg">(61) 3044-0199</p>
              </div>
              {/* E-mail */}
              <div className="flex flex-col items-center p-6 bg-black/60 rounded-2xl border border-green-500/30 hover:border-green-500 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] group">
                <svg className="w-10 h-10 mb-4 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">E-mail</h3>
                <p className="mt-2 text-white font-black">sac@kallangotec.com.br</p>
              </div>
              {/* Endereço */}
              <div className="flex flex-col items-center p-6 bg-black/60 rounded-2xl border border-green-500/30 hover:border-green-500 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] group">
                <svg className="w-10 h-10 mb-4 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">QG KallangoTec</h3>
                <p className="mt-2 text-white font-bold text-center text-sm">Q 204, Ed. Alfa Mix Loja 07<br/>Águas Claras, Brasília - DF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
