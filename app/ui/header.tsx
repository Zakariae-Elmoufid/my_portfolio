"use client";
import { useState } from "react";
import Link from "next/link";
import { CgMenuMotion } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(function (prev) {
      return !prev;
    });
  }
  return (
    <div>
      <div className="flex bg-[#1a1a2e] h-12 justify-between px-6 py-2 z-10  shadow-lg ">
        <div>
          <h1 className="highlight">Zakariae Dev</h1>
        </div>
        <div onClick={toggleMenu} className="z-10">
          {!menu ? (
            <CgMenuMotion className="md:hidden text-white text-[30px] hover:text-[var(--secondary-color)] cursor-pointer" />
          ) : (
            <FaXmark className="md:hidden text-white text-[30px] hover:text-[var(--secondary-color)] cursor-pointer" />
          )}
        </div>

        <ul className="hidden md:flex gap-4 text-zinc-100">
          <li className=" group relative  hover:text-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="group relative hover:text-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="group relative hover:text-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <li className="group relative hover:text-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="group relative hover:text-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {menu && (
        <ul className="block md:hidden gap-4 text-zinc-100  bg-black ">
          <li className="z-10 group relative  hover:text-[var(--primary-color)]  p-2 border-b border-b-[var(--primary-color)] ">
            <Link
              className=" after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/"
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
          </li>
          <li className="z-10  group relative hover:text-[var(--primary-color)] p-2 border-b border-b-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/about"
              onClick={() => setMenu(false)}
            >
              About
            </Link>
          </li>
          <li className="z-10 group relative hover:text-[var(--primary-color)] p-2 border-b border-b-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/skills"
              onClick={() => setMenu(false)}
            >
              Skills
            </Link>
          </li>
          <li className="z-10 group relative hover:text-[var(--primary-color)]  p-2 border-b border-b-[var(--primary-color)]">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/projects"
              onClick={() => setMenu(false)}
            >
              Projects
            </Link>
          </li>
          <li className="z-10 group relative hover:text-[var(--primary-color)] p-2 border-b border-b-[var(--primary-color)] ">
            <Link
              className="after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-[var(--secondary-color)] after:to-[var(--primary-color)] after:transition-all after:duration-300"
              href="/contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
