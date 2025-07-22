"use client";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const [numProject, setNumProject] = useState(0);
  const [numyearsExp, setNumYearsExp] = useState(0);

  useEffect(() => {
    let projectTarget = 15;
    let yearsTarget = 2;

    const interval = setInterval(() => {
      setNumProject((prev) => {
        if (prev < projectTarget) return prev + 1;
        return prev;
      });

      setNumYearsExp((prev) => {
        if (prev < yearsTarget) return prev + 1;
        return prev;
      });
    }, 0.5);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-20">
      <div className="relative flex items-center gap-2 mb-8">
        <FaRegUser className=" text-2xl  text-white self-end  " />
        <h2
          className="highlight font-bold text-4xl after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-32 mb-2      
            after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300 after:ml-8  "
        >
          About Me
        </h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-50 gap-y-10 ">
        <div className="lg:w-1/2 ">
          <p className="text-white ">
            Hi, I’m Zakaria Moufid — a passionate Full Stack Developer currently
            studying at YouCode (UM6P). I specialize in both frontend and
            backend development, with a strong focus on building responsive,
            user-friendly web applications. I enjoy designing and modeling
            systems from scratch, turning ideas into functional and
            well-structured solutions. What truly drives me is problem-solving —
            I love tackling challenges and finding smart, efficient ways to
            overcome them. Every day is a new opportunity to grow. I’m always
            learning, whether it’s exploring new technologies, improving my
            code, or sharpening my design thinking. I believe in continuous
            improvement and building things that make a real impact.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4  group">
            <div className="text-center bg-gray-700  rounded-sm p-2  hover:border-2  border-[var(--secondary-color)] ">
              <p className="text-[var(--primary-color)] font-bold text-2xl  ">
                {numProject}+
              </p>
              <p className="text-white font-medium">Projects Completed</p>
            </div>
            <div className="text-center bg-gray-700  rounded-sm p-2 hover:border-2  border-[var(--secondary-color)]">
              <p className="text-[var(--primary-color)] font-bold text-2xl ">
                {numyearsExp}+
              </p>
              <p className="text-white font-medium">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="relative  w-96 h-96 px-10">
          <Image
            className="border-2 border-[var(--primary-color)] rounded-lg z-10"
            src="/images/about.jpg"
            fill
            alt="Picture of profil"
          />
          <div className="absolute z-10 p-4  -bottom-4 -right-4 bg-neutral-800 text-white  border border-white w-32 rounded-lg">
            <p className="font-bold text-[10px]">Always Learning</p>
            <div className="flex items-center gap-2">
              <p className="font-thin text-[10px]">Growth Mindset</p>
              <p className="w-2 h-2 rounded-full bg-green-600 "></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
