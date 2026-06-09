import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-black/80 px-4 shadow-[0_0_15px_rgba(34,197,94,0.1)] border border-green-500/20 backdrop-blur-md">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop CTA */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="https://wa.me/556130440199"
                target="_blank"
                className="px-4 py-2 bg-transparent border border-green-500 text-green-500 font-bold text-sm uppercase tracking-wider rounded hover:bg-green-500 hover:text-black transition-all shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
