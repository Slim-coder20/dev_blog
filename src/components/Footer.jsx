import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white bottom-0 w-full py-4 text-center text-sm text-gray-500 border-t border-t-zinc-300"> 
      <Link href="/">
        Axoria Blog - All right reserved © {new Date().getFullYear()}
      </Link>
    </footer>
  );
}
