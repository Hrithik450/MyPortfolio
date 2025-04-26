import {
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "#projects" },
  { name: "About Me", path: "#about" },
  { name: "Contact Me", path: "#footer" },
];

export const socialLinks = [
  {
    icon: <FaYoutube className="text-xl" />,
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCmSDKc-IEYuWIBcFDq-BinA",
    color: "bg-red-500/20 hover:bg-red-600",
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hruthik-m-3595a0329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app_app",
    color: "bg-blue-500/20 hover:bg-blue-600",
  },
  {
    icon: <FaFileAlt className="text-xl" />,
    name: "Resume",
    url: "/resume.pdf",
    color: "bg-purple-500/20 hover:bg-purple-600",
  },
  {
    icon: <FaInstagram className="text-xl" />,
    name: "Instagram",
    url: "https://www.instagram.com/mhrithik__996?igsh=ajhrNnh6Y3plZjd4",
    color: "bg-pink-500/20 hover:bg-pink-600",
  },
  {
    icon: <FaGithub className="text-xl" />,
    name: "GitHub",
    url: "https://github.com/Hrithik450",
    color: "bg-gray-500/20 hover:bg-gray-700",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    name: "Contact",
    url: "https://mail.google.com/mail/?view=cm&to=mhrithik450@gmail.com",
    color: "bg-green-500/20 hover:bg-green-600",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    image:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745681707/Screenshot_2025-04-26_211915_xd1fcn.png",
    description:
      "A full-featured potfolio platform with focused unique projects.",
    tags: ["Full Stack", "Portfolio", "Featured"],
    techStack: ["Next Js", "Firebase", "Redux Toolkit"],
    challenges: [
      "Handling high traffic.",
      "Implementing Secure Authentication System.",
      "Focusing on initial impression for collaborators.",
    ],
    solutions: [
      "Implementing rate limiting to prevent abuse.",
      "Using a robust authentication protocol (e.g., OAuth 2.0).",
      "Using a consistent coding style and conventions.",
    ],
    duration: "3-5 Days",
    teamSize: "1 developer",
    demoUrl: "https://hruthik.vercel.app",
    githubUrl: "https://github.com/Hrithik450/MyPortfolio",
  },
  {
    id: 2,
    title: "Mern Launcher",
    image:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745658001/Screenshot_2025-04-26_144412_tuy2cg.png",
    description:
      "A npm package which automates setting up frontend and backend folders, installing dependencies, and initializing servers, making development faster and hassle-free.",
    tags: ["Full Stack", "CLI Tool", "Featured"],
    techStack: ["Bash", "Node.js", "Powershell"],
    challenges: [
      "Handling different OS (Windows/Linux).",
      "Made CLI runnable via command.",
      "Manage errors properly",
    ],
    solutions: [
      "Detected OS and run correct script.",
      "Used shebang #!/usr/bin/env node.",
      "Used node in-built libraries for smooth exit handling",
    ],
    duration: "15 days",
    teamSize: "1 developer",
    demoUrl: "https://www.npmjs.com/package/mern-quickstart?activeTab=readme",
    githubUrl: "https://github.com/Hrithik450/mern-launcher",
  },
  {
    id: 3,
    title: "CodeEaseX",
    image:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745658779/Screenshot_2025-04-26_145708_jrqkod.png",
    description: "A npm package manager platform.",
    tags: ["Full Stack", "Package Hub", "Featured"],
    techStack: [
      "React Js",
      "Node.js",
      "Firebase",
      "Razorpay API",
      "Redux Toolkit",
      "Crypto Payment Gateway",
    ],
    challenges: [
      "Implementing Crypto & Razorpay Payment Gateway",
      "Implementing OAuth 2.0 (i.e: Google)",
      "Subscription Management",
    ],
    solutions: [
      "Used Binance API for handling crypto payments.",
      "Used Node.js SDK of Razorpay.",
      "Implemented free trials and custom subscription plans.",
    ],
    duration: "15 Days",
    teamSize: "1 developer",
    demoUrl: "https://codeeasex.vercel.app",
    githubUrl: "https://github.com/Hrithik450/Personal",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    image:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745678809/Screenshot_2025-04-26_203053_vn5g4z.png",
    description:
      "A full-featured e-commerce platform with payment integration and admin dashboard.",
    tags: ["Full Stack", "E-Commerce", "Featured"],
    techStack: [
      "React Js",
      "Node.js",
      "Firebase",
      "Razorpay API",
      "Redux Toolkit",
    ],
    challenges: [
      "Implementing real-time stock updates.",
      "Handling complex state management.",
      "Securing payment processing.",
    ],
    solutions: [
      "Made a separate admin panel system to manage.",
      "Used Redux Toolkit for state management.",
      "Used Razorpay API for smooth transactions.",
    ],
    duration: "15 Days",
    teamSize: "1 developer",
    demoUrl: "https://anox.vercel.app",
    githubUrl: "https://github.com/Hrithik450/Ecommerce",
  },
];

export const testimonials = [
  {
    id: 1,
    rating: 5,
    date: "08-Aug-2024",
    title: "Working with Pritom was a breeze... I was impressed.",
    description:
      "Honestly I felt like Superflow saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
    name: "Pritom Rani",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 2,
    rating: 5,
    date: "09-Nov-2024",
    title: "Undoubtly best desinger for SaaS website",
    description:
      "Great template and custom service! I needed to make some specific changes and Rustam sent me a quick step by step video explaining how to make changes. ",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
    name: "Rudra Ghosh",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 3,
    rating: 5,
    date: "2025-jan-01",
    title: "Working with Niloy was a breeze... I was impressed.",
    description:
      "Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
    name: "Niloy",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 4,
    rating: 5,
    date: "09-Nov-2024",
    title: "Working with Rudra was a breeze... I was impressed",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia error harum, consequuntur voluptas totam nulla iure magnam asperiores quidem recusandae autem! Porro culpa numquam odit quaerat nulla aspernatur consequatur!",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
    name: "Pritom Rani",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 5,
    rating: 5,
    date: "2025-jan-01",
    title: "Working with Niloy was a breeze... I was impressed.",
    description:
      "Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
    name: "Niloy",
    role: "Product Desinger at Blazzings.co",
  },
];

export const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "#projects" },
  { name: "About Me", path: "#about" },
  { name: "Contact Me", path: "#footer" },
];

export const footerSocialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCmSDKc-IEYuWIBcFDq-BinA",
    color: "bg-red-500/20 hover:bg-red-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hruthik-m-3595a0329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app_app",
    color: "bg-blue-500/20 hover:bg-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mhrithik__996?igsh=ajhrNnh6Y3plZjd4",
    color: "bg-pink-500/20 hover:bg-pink-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/Hrithik450",
    color: "bg-gray-500/20 hover:bg-gray-700",
  },
];
