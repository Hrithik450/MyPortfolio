import React from "react";

const TestimonialCard = ({ slide }) => {
  return (
    <div
      className="relative bg-gray-900 text-white p-12 h-full w-full shadow-md 
                   before:content-[''] before:absolute before:top-0 before:left-0 
                   before:h-1 before:w-full before:bg-gradient-to-r before:from-[#ff00ff] before:to-[#ff7300]
                   md:p-6"
    >
      <div className="text-orange-400 text-3xl">★★★★★</div>
      <h3 className="text-2xl font-bold my-2 md:text-xl">
        {slide && slide.title}
      </h3>
      <p className="text-gray-400 text-lg leading-relaxed my-8 md:text-base">
        {slide && slide.description}
      </p>
      <div className="flex items-center mt-5">
        <img
          src="https://via.placeholder.com/50"
          alt={slide?.name || "Profile"}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div className="flex flex-col">
          <span className="font-bold text-base">{slide && slide.name}</span>
          <span className="text-gray-400 text-sm md:text-base">
            {slide && slide.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
