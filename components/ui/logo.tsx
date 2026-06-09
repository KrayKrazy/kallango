import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="KallangoTec">
      <span className="text-xl font-black text-white tracking-widest uppercase flex items-center group">
        <svg className="w-8 h-8 text-green-500 mr-2 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        Kallango<span className="text-green-500">Tec</span>
      </span>
    </Link>
  );
}
