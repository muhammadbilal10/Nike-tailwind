"use client";
import Image from "next/image";
import { hamburger } from "../public/assets/icons";
import { headerLogo } from "../public/assets/images";
import { navLinks } from "@/constants";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
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
        {/* Side bar menu */}
        {navOpen && (
          <div className="fixed inset-y-0 right-0 top-20 w-64 z-20">
            <ul
              className="flex flex-col justify-center items-center gap-8 bg-white shadow-3xl rounded-3xl pt-4"
              onMouseLeave={() => setNavOpen(false)}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:bg-coral-red px-2 py-2 hover:text-white text-gray-500"
                >
                  <a
                    href={link.href}
                    className="text-lg font-montserrat leading-normal "
                    onClick={() => setNavOpen(false)}
                  >
                    {link.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

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
