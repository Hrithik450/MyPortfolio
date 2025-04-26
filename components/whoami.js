import Link from "next/link";
import { FaYoutube, FaCode, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

const WhoAmI = () => {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="animate-fadeIn mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-scaleIn">
            Passionate{" "}
            <span className="bg-gradient-to-r from-[#ff00ff] to-[#ff7300] bg-clip-text text-transparent">
              About
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Content Creator Card */}
          <div className="animate-scaleIn flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <Link href="/" className="flex items-center mb-6 cursor-pointer">
              <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                <FaYoutube className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold">Content Creator</h3>
            </Link>
            <p className="text-gray-300 text-xl mb-6 leading-relaxed">
              I create engaging tech content on YouTube, specializing in web
              development tutorials, coding challenges, and tech reviews. My
              channel helps aspiring developers learn modern technologies
              through practical examples and clear explanations.
            </p>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
              <span className="text-sm text-gray-400">150+ subscribers</span>
            </div>
          </div>

          {/* Developer Card */}
          <div className="animate-scaleIn flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <Link href="/" className="flex items-center mb-6 cursor-pointer">
              <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                <FaCode className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
            </Link>
            <p className="text-gray-300 text-xl mb-6 leading-relaxed">
              I build modern web applications using cutting-edge technologies.
              With expertise in both frontend and backend development, I create
              performant, scalable, and user-friendly digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <SiNextdotjs className="text-white mr-2" />
                <span className="text-sm">Next Js</span>
              </div>
              <div className="flex items-center">
                <FaReact className="text-blue-400 mr-2" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex items-center">
                <SiJavascript className="text-yellow-400 mr-2" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center">
                <SiTailwindcss className="text-cyan-400 mr-2" />
                <span className="text-sm">Tailwind</span>
              </div>
              <div className="flex items-center">
                <FaNodeJs className="text-green-500 mr-2" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex items-center">
                <SiMongodb className="text-green-400 mr-2" />
                <span className="text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#footer"
            className="text-xl cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Connect With Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
