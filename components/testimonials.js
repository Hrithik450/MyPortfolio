import React from "react";
import { testimonials } from "@/constants";
import CardSwiper from "./swiper";

const Testimonials = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
            Clients{" "}
            <span className="bg-gradient-to-r from-[#ff00ff] to-[#ff7300] bg-clip-text text-transparent">
              testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mt-6 mb-8 md:mb-0 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
            Here is some love words from my clients around the world. Hope you
            will be here next.
          </p>
        </div>

        <div className="flex justify-end md:justify-center gap-4 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
          <button className="cursor-pointer text-white bg-white/10 h-14 w-14 md:h-16 md:w-16 rounded-full border border-white hover:scale-110 transition-transform">
            &lt;
          </button>
          <button className="cursor-pointer text-white bg-white/10 h-14 w-14 md:h-16 md:w-16 rounded-full border border-white hover:scale-110 transition-transform">
            &gt;
          </button>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-0 lg:px-16 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
        <CardSwiper slides={testimonials} color={"white"} />
      </div>
    </section>
  );
};

export default Testimonials;
