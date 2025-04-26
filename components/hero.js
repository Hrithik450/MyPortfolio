import { socialLinks } from "@/constants";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto mb-4 border-b border-white/20">
      <div className="grid items-center md:grid-cols-[1fr_0.75fr] gap-12 px-6 py-40 md:py-12 md:px-6">
        <div className="content">
          <div className="heading">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#ff00ff] to-[#ff7300] bg-clip-text text-transparent animate-text-animation opacity-0">
                Software Developer
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white animate-text-animation opacity-0 animation-delay-[150ms]">
                Crafting Softwares
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white animate-text-animation opacity-0 animation-delay-[300ms]">
                That People Love
              </h1>
            </div>
          </div>

          <div className="overflow-hidden my-6">
            <p className="max-w-[470px] text-gray-400 text-lg animate-text-animation opacity-0 animation-delay-[479ms]">
              I&apos;m Hruthik M — A developer who works with startups looking
              to push creative boundaries and create unique user experiences.
            </p>
          </div>

          <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90vw] px-4">
            <div className="flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full p-3 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-xl border border-gray-700 mx-auto w-fit">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative mx-1 p-2 sm:p-2 md:p-3 rounded-full text-white transition-all duration-300 ${link.color} group`}
                >
                  <div className="text-lg sm:text-xl md:text-2xl">
                    {link.icon}
                  </div>
                  <span className="absolute -top-8 sm:-top-9 md:-top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs sm:text-sm md:text-md px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center">
                    {link.name}
                    <FiExternalLink className="inline ml-1 text-xs sm:text-sm" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:row-start-auto row-start-2 animate-image-animation p-6 relative max-w-[470px] bg-[url('https://cdn.prod.website-files.com/61f03747d8d407ed117df27f/61f11c12ccb99e089078fc33_Main%20Image%20BG.png')] bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
          <img
            src="https://res.cloudinary.com/duozomapm/image/upload/v1736669260/myimage1.7_n7ltv9.jpg"
            alt="Hruthik M"
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
