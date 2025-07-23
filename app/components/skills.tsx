"use client";

import { useEffect, useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsDiagram3 } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { FiTool } from "react-icons/fi";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const section = sectionRef.current;
    if (section) {
      // Observe skill categories
      const categories = section.querySelectorAll(".skill-category");
      categories.forEach((category) => {
        category.style.opacity = "0";
        category.style.transform = "translateY(30px)";
        category.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(category);
      });

      // Add staggered animation for tech items
      categories.forEach((category, categoryIndex) => {
        const techItems = category.querySelectorAll(".tech-item");
        techItems.forEach((item, itemIndex) => {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
          item.style.transition = `opacity 0.4s ease ${
            itemIndex * 0.1
          }s, transform 0.4s ease ${itemIndex * 0.1}s`;
          observer.observe(item);
        });
      });
    }

    return () => observer.disconnect();
  }, []);

  const technologies = {
    frontend: [
      {
        name: "HTML",
        symbol: <FaHtml5 />,
        colorClass: "from-orange-500 to-orange-600",
      },
      {
        name: "CSS",
        symbol: <FaCss3Alt />,
        colorClass: "from-blue-500 to-blue-600",
      },
      {
        name: "Tailwind",
        symbol: <RiTailwindCssFill />,
        colorClass: "from-cyan-400 to-cyan-600",
      },
      {
        name: "JavaScript",
        symbol: "JS",
        colorClass: "from-yellow-400 to-yellow-500",
        textColor: "text-black",
      },
      { name: "Next.js", symbol: "▲", colorClass: "from-gray-800 to-black" },
    ],
    backend: [
      {
        name: "PHP",
        symbol: <FaPhp />,
        colorClass: "from-blue-600 to-blue-700",
      },
      {
        name: "Laravel",
        symbol: <FaLaravel />,
        colorClass: "from-red-500 to-red-600",
      },
      {
        name: "Node.js",
        symbol: <FaNodeJs />,
        colorClass: "from-green-500 to-green-600",
      },
    ],
    databases: [
      {
        name: "MySQL",
        symbol: <GrMysql />,
        colorClass: "from-blue-600 to-blue-700",
      },
      {
        name: "PostgreSQL",
        symbol: <BiLogoPostgresql />,
        colorClass: "from-blue-700 to-indigo-600",
      },
    ],
    tools: [
      {
        name: "UML",
        symbol: <BsDiagram3 />,
        colorClass: "from-purple-600 to-purple-700",
      },
      {
        name: "Docker",
        symbol: <FaDocker />,
        colorClass: "from-blue-500 to-blue-600",
      },
      {
        name: "Jira",
        symbol: <SiJira />,
        colorClass: "from-blue-600 to-blue-700",
      },
      {
        name: "Scrum",
        symbol: <DiScrum />,
        colorClass: "from-cyan-400 to-pink-500",
      },
      {
        name: "Git",
        symbol: <FaGitAlt />,
        colorClass: "from-red-500 to-red-600",
      },
    ],
  };

  const TechItem = ({ tech }) => (
    <div className="tech-item flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer min-h-[100px] justify-center hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20">
      <div
        className={`w-10 h-10 mb-2 flex items-center justify-center text-2xl rounded-lg bg-gradient-to-br ${tech.colorClass} transition-transform duration-300 hover:scale-110`}
      >
        <span className={`font-bold text-lg ${tech.textColor || "text-white"}`}>
          {tech.symbol}
        </span>
      </div>
      <div className="text-xs font-semibold text-white text-center leading-tight">
        {tech.name}
      </div>
    </div>
  );

  const CategorySection = ({ title, techs }) => (
    <div className="skill-category bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10 hover:border-cyan-400 group">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="flex gap-5 flex-wrap justify-items-center">
        {techs.map((tech, index) => (
          <TechItem key={index} tech={tech} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-20 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 via-transparentpointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="relative flex items-center gap-2 mb-8">
          <FiTool className=" text-2xl  text-white self-end  " />

          <h2
            className="highlight font-bold text-4xl after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-32 mb-2      
                   after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300 after:ml-8  "
          >
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          <CategorySection title="Frontend" techs={technologies.frontend} />
          <CategorySection title="Backend" techs={technologies.backend} />
          <CategorySection title="Databases" techs={technologies.databases} />
          <CategorySection title="Tools" techs={technologies.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
