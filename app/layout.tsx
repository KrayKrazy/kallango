import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KallangoTec | Conserto de Impressoras e Notebooks em Águas Claras",
  description: "Especialistas em conserto e manutenção de impressoras e notebooks. Sua Referência em Águas Claras - DF. Entre em contato via WhatsApp.",
  keywords: ["conserto de impressora", "conserto de notebook", "manutenção de computadores", "assistência técnica", "Águas Claras", "Brasília", "DF", "KallangoTec", "TI", "Ed. Alfa Mix"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
