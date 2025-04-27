"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import NavLinks from "./navLinks";
import MobileMenu from "./mobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-white shadow-md sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
          <MobileMenu activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
      </div>
    </nav>
  );
}
