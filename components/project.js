import React from "react";
import ProjectCard from "./projectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-scaleIn">
              My{" "}
              <span className="bg-gradient-to-r from-[#ff00ff] to-[#ff7300] bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
              Over the past few months, I have collaborated with several clients
              on freelance projects, helping them develop a variety of unique
              and functional products. Below are a few projects that I found
              particularly challenging and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projects
              .filter((_, idx) => idx % 2 === 0)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>

        <div className="lg:pt-24 flex flex-col justify-between">
          <div className="grid grid-cols-1 gap-12">
            {projects
              .filter((_, idx) => idx % 2 !== 0)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>

          {/* <div className="max-w-2xl mx-auto mt-12 lg:mt-0 [animation-timeline:view()] [animation-range:entry_0%_cover_40%] animate-scaleIn">
            <a
              href="/projects"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#ff00ff] to-[#ff7300] text-white font-bold rounded-full px-6 py-4 text-lg hover:opacity-80 transition-opacity"
            >
              <span className="px-2">View All Projects</span>
              <FaArrowRight className="text-black bg-white rounded-full p-2 hover:scale-110 transition-transform" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
