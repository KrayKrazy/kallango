"use client";

import { useRef } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  category: string;
  image: string;
};

const productsData: Product[] = [
  // Placas de Vídeo
  { id: 1, category: "Placas de Vídeo", name: "RTX 4090 24GB GDDR6X", price: "R$ 12.599,00", oldPrice: "R$ 14.000,00", image: "gpu" },
  { id: 2, category: "Placas de Vídeo", name: "RX 7900 XTX 24GB", price: "R$ 7.899,00", oldPrice: "R$ 8.500,00", image: "gpu" },
  { id: 3, category: "Placas de Vídeo", name: "RTX 4070 Ti SUPER 16GB", price: "R$ 5.499,00", image: "gpu" },
  { id: 4, category: "Placas de Vídeo", name: "RTX 4060 8GB DLSS 3", price: "R$ 1.999,00", oldPrice: "R$ 2.300,00", image: "gpu" },
  { id: 5, category: "Placas de Vídeo", name: "RX 7600 8GB RDNA 3", price: "R$ 1.749,00", image: "gpu" },
  
  // Processadores
  { id: 6, category: "Processadores", name: "AMD Ryzen 7 7800X3D", price: "R$ 2.899,00", oldPrice: "R$ 3.200,00", image: "cpu" },
  { id: 7, category: "Processadores", name: "Intel Core i9-14900K", price: "R$ 4.299,00", image: "cpu" },
  { id: 8, category: "Processadores", name: "AMD Ryzen 5 7600X", price: "R$ 1.499,00", oldPrice: "R$ 1.700,00", image: "cpu" },
  { id: 9, category: "Processadores", name: "Intel Core i5-13600K", price: "R$ 1.899,00", image: "cpu" },
  
  // Refrigeração
  { id: 10, category: "Refrigeração", name: "Water Cooler NZXT Kraken 360mm RGB", price: "R$ 1.499,00", oldPrice: "R$ 1.800,00", image: "cooler" },
  { id: 11, category: "Refrigeração", name: "Water Cooler Corsair iCUE H150i", price: "R$ 1.299,00", image: "cooler" },
  { id: 12, category: "Refrigeração", name: "Air Cooler DeepCool AK620 Zero Dark", price: "R$ 459,00", oldPrice: "R$ 550,00", image: "cooler" },
  { id: 13, category: "Refrigeração", name: "Water Cooler Rise Mode Aura 240mm", price: "R$ 299,00", image: "cooler" },

  // Memória RAM
  { id: 14, category: "Memória RAM", name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", price: "R$ 949,00", oldPrice: "R$ 1.100,00", image: "ram" },
  { id: 15, category: "Memória RAM", name: "Kingston Fury Beast 16GB DDR4 3200MHz", price: "R$ 279,00", image: "ram" },
  { id: 16, category: "Memória RAM", name: "XPG Lancer RGB 32GB DDR5 6400MHz", price: "R$ 1.099,00", oldPrice: "R$ 1.300,00", image: "ram" },
  { id: 17, category: "Memória RAM", name: "Asgard Valkyrie 16GB DDR4 3600MHz", price: "R$ 249,00", image: "ram" },

  // Armazenamento
  { id: 18, category: "Armazenamento", name: "SSD NVMe Kingston NV2 1TB Gen4", price: "R$ 389,00", oldPrice: "R$ 450,00", image: "ssd" },
  { id: 19, category: "Armazenamento", name: "SSD Samsung 990 PRO 2TB M.2", price: "R$ 1.499,00", image: "ssd" },
  { id: 20, category: "Armazenamento", name: "SSD WD Black SN850X 1TB", price: "R$ 799,00", oldPrice: "R$ 950,00", image: "ssd" },
  { id: 21, category: "Armazenamento", name: "SSD Crucial P3 Plus 2TB", price: "R$ 849,00", image: "ssd" }
];

// Funções utilitárias para renderizar ícones genéricos por tipo
const getProductIcon = (type: string) => {
  switch (type) {
    case 'gpu':
      return <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>;
    case 'cpu':
      return <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
    case 'cooler':
      return <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
    case 'ram':
      return <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>;
    case 'ssd':
      return <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>;
    default:
      return <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>;
  }
};

const ProductCarousel = ({ category, products }: { category: string, products: Product[] }) => {
  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-green-500 pl-3">{category}</h3>
        <div className="text-sm font-bold text-green-500 cursor-pointer hover:text-green-400">Ver Todos &rarr;</div>
      </div>
      
      {/* Container da Esteira */}
      <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 space-x-6 snap-x snap-mandatory scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-72 sm:w-80 flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all group">
            {/* Imagem Placeholder */}
            <div className="h-48 bg-slate-950 flex items-center justify-center relative p-6">
              {getProductIcon(product.image)}
              <div className="absolute top-2 right-2 bg-green-500 text-black text-xs font-black px-2 py-1 rounded uppercase shadow-[0_0_10px_rgba(34,197,94,0.5)]">Em Estoque</div>
            </div>
            
            {/* Detalhes do Produto */}
            <div className="p-5 flex flex-col flex-1">
              <h4 className="text-slate-200 font-medium text-lg leading-snug mb-4 group-hover:text-green-400 transition-colors line-clamp-2">{product.name}</h4>
              
              <div className="mt-auto">
                {product.oldPrice && <div className="text-slate-500 text-sm line-through mb-1">{product.oldPrice}</div>}
                <div className="text-2xl font-black text-green-500 mb-4">{product.price}</div>
                
                <a
                  href={`https://wa.me/556130440199?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  className="w-full flex items-center justify-center py-3 bg-transparent border border-green-500 text-green-500 font-bold uppercase rounded hover:bg-green-500 hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HardwareCatalog() {
  // Pegar categorias únicas
  const categories = Array.from(new Set(productsData.map(p => p.category)));

  return (
    <section className="relative py-12 bg-black border-t border-slate-900">
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 md:mb-20 text-center relative">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight relative z-10">
              Catálogo de <span className="text-green-500">Hardware</span>
            </h2>
            <div className="absolute bottom-1 left-0 w-full h-3 bg-green-500/20 -z-10 blur-sm"></div>
          </div>
          <p className="mt-4 text-slate-400 text-lg">As melhores peças do mercado para você extrair o máximo de FPS.</p>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <ProductCarousel 
              key={category} 
              category={category} 
              products={productsData.filter(p => p.category === category)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
