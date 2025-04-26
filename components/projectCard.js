import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex-1 max-w-[600px] transition-all duration-300 hover:-translate-y-[2%] group">
      <div className="animate-scaleIn p-6 border border-gray-700 overflow-hidden bg-gray-900 shadow-lg hover:shadow-xl rounded-lg">
        <div className="w-full h-[300px] overflow-hidden rounded-lg relative">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 mt-4 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                CHALLENGES
              </h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
                {project.challenges.map((challenge, i) => (
                  <li key={i} style={{ paddingLeft: "0.5em" }}>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                SOLUTIONS
              </h4>

              <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
                {project.solutions.map((solution, i) => (
                  <li key={i} style={{ paddingLeft: "0.5em" }}>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-gray-800 pt-4">
            <div className="text-sm text-gray-400">
              <span className="block">Duration: {project.duration}</span>
              <span className="block">Team Size: {project.teamSize}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
