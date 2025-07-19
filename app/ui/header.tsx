import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-black h-12 justify-between px-6 py-2  ">
      <div>
        <h1 className="highlight">Zakariae Dev</h1>
      </div>
      <ul className="flex gap-4 text-zinc-100">
        <li
          className=" group relative  hover:text-[var(--primary-color)]  
         "
        >
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
  );
}
