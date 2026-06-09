import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`py-8 md:py-12 flex flex-col items-center justify-center ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          <div className="mb-4">
            <Logo />
          </div>
          <div className="text-sm text-gray-500 font-medium">
            KallangoTec &bull; Brasília DF &bull; 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
