import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import TestimonialCard from "./testimonialCard";

export default function CardSwiper({ slides }) {
  return (
    <div className="w-full animate-scaleIn [animation-timeline:view()] [animation-range:entry_0%_cover_40%]">
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        parallax={true}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".highlight-button-next",
          prevEl: ".highlight-button-prev",
        }}
        speed={800}
        autoplay={{ delay: 2000 }}
        modules={[Parallax, Navigation, Autoplay, Pagination]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`-${index}`}
            className={`relative overflow-hidden border ${
              color === "white" ? "border-white" : "border-black"
            } 
              bg-[#cdc1ff] bg-gradient-to-br from-[#cdc1ff] to-[#e5d9f2] bg-center bg-cover shadow-lg
              w-[500px] h-auto md:w-[500px] sm:w-full`}
          >
            <TestimonialCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
