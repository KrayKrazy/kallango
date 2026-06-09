import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-12 flex flex-col items-center justify-center border-t border-slate-900">
          <div className="mb-4">
            <Logo />
          </div>
          <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">
            KallangoTec &bull; Brasília DF &bull; 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
