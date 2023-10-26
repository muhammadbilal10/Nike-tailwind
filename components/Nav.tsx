"use client";
import Image from "next/image";
import { hamburger } from "../public/assets/icons";
import { headerLogo } from "../public/assets/images";
import { navLinks } from "@/constants";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="logo" height={29} width={130} />
        </a>
        <a
          className="lg:hidden cursor-pointer"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <Image src={hamburger} alt="hamburger" height={20} width={20} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-lg font-montserrat leading-normal text-gray-500"
              >
                {link.label}{" "}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
