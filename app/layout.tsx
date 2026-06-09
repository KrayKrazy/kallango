import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KallangoTec | Montagem e Manutenção de Computadores Gamers",
  description: "Especialistas em montagem de PC Gamer, manutenção preventiva, watercoolers e assistência técnica de alto desempenho. Sua Referência em Águas Claras - DF.",
  keywords: ["montagem de pc gamer", "manutenção de computadores gamers", "conserto de notebook gamer", "assistência técnica gamer Águas Claras", "limpeza de placa de vídeo", "setup gamer", "KallangoTec", "TI", "Ed. Alfa Mix"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-black font-inter tracking-tight text-slate-100 antialiased selection:bg-green-500 selection:text-black`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
