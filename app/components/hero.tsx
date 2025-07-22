"use client";
import { useState, useEffect, useMemo } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";
function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#00f5ff",
        },
        links: {
          color: "#ff00f5",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  const [text, setText] = useState("");
  const fullText = " Zakariae Elmoufid";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length - 1) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" min-h-screen flex items-center justify-center px-6 ">
      <Particles id="tsparticles" options={options} />
      <div className="max-w-[500px] z-10">
        <h2 className="font-bold   text-xl text-white mb-2">
          Hi, I'm {""}
          <span className="highlight ">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h2>
        <p className="text-white mb-2">
          Full Stack Developer specializing in creating exceptional digital
          experiences through innovative UI/UX design and robust backend
          solutions
        </p>
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] px-3 py-2 rounded-xl text-black font-bold">
            View My Work
          </button>
          <button className="border-2 border-[var(--primary-color)] px-3 py-2 rounded-xl font-bold text-[var(--primary-color)] ">
            Dowolond My Cv
          </button>
        </div>
      </div>
      <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-full max-w-lg  z-10  hidden sm:block not-[]:">
        <div className="flex gap-1 mb-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <div className="code-content">
          <div className="code-content font-mono text-sm leading-relaxed">
            <div className="code-line text-[#ff79c6]">const</div>
            <div className="code-line text-[#50fa7b]">developer = {"{"}</div>
            <div className="code-line text-[#f8f8f2]">
              &nbsp;&nbsp;name: 'Zakariae Elmoufid',
            </div>
            <div className="code-line text-[#f8f8f2]">
              &nbsp;&nbsp;skills: ['Php', 'Laravel', 'Java']
            </div>
            <div className="code-line text-[#50fa7b]">{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
