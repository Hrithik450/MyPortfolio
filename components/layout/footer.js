import { footerLinks, footerSocialLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 text-white text-center">
      <div className="py-12 px-5 border-b border-white/20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
          Have projects in mind? <br />
          <span className="[animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-[#ff00ff] to-[#ff7300] bg-clip-text text-transparent">
              together
            </span>
          </span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto my-8 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
          I&apos;m Hruthik M a Full Stack Web Developer, Who build robust
          softwares for clients.
        </p>
        <div className="[animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn mt-6">
          <Link
            href="#footer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#ff00ff] to-[#ff7300] text-white font-bold rounded-full px-6 py-4 text-lg hover:opacity-80 transition-opacity"
          >
            <span className="px-2 text-lg">Connect with me</span>
          </Link>
        </div>
      </div>

      <div
        id="footer"
        className="animate-scaleIn px-5 flex flex-col md:flex-row justify-between text-gray-300"
      >
        <div className="flex-1 flex flex-col my-8">
          <Link
            href="https://mail.google.com/mail/?view=cm&to=mhrithik450@gmail.com"
            className="flex items-center gap-4 my-4 text-xl md:text-3xl font-bold"
          >
            <MdEmail />
            mhrithik450@gmail.com
          </Link>
          <div className="flex items-center gap-4 my-4 text-xl md:text-3xl font-bold">
            <FaPhoneAlt />
            +91-7483229386
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 md:mt-0">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-left">
              Pages
            </h3>
            <ul className="text-left space-y-3">
              {footerLinks?.map((item, i) => (
                <li
                  key={`foot-${i}`}
                  className="hover:underline cursor-pointer text-sm md:text-lg"
                >
                  <Link href={item?.path}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-left">Social</h3>
            <ul className="text-left space-y-3">
              {footerSocialLinks?.map((item, idx) => (
                <li
                  key={`foot-${idx}`}
                  className="hover:underline cursor-pointer text-sm md:text-lg"
                >
                  <Link href={item?.url}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-left">Visit</h3>
            <div className="text-left">
              <a className="block my-3 text-sm md:text-lg">
                Bangalore, Karnataka
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-300 border-t border-white/30 py-6 gap-4 text-sm sm:text-base md:text-lg">
        <p className="order-3 xs:order-2 md:order-2 xs:col-span-2 md:col-span-2 text-center mt-2 xs:mt-0">
          © 2025-2026 All rights reserved | Designed and Developed by{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            Hruthik M
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
