import Link from "next/link";
import { navLinks } from "@/constants";

export default function NavLinks({ activeLink, setActiveLink }) {
  return (
    <div className="hidden md:flex space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`${
            activeLink === link.name
              ? "text-white border-b-2 border-blue-600"
              : "text-gray-400 hover:text-gray-200 transition-colors"
          } px-1 py-2 text-[1.2rem] font-medium`}
          onClick={() => {
            setActiveLink(link.name);
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
