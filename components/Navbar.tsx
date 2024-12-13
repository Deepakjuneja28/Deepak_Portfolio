"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    // Define a function to check screen width
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    // Check screen size on initial render
    checkScreenSize();

    // Add event listener to check for window resizing
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      {/* Conditionally render Navbar only for medium screens and above */}
      {isMediumScreen && (
        <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl flex items-center justify-center p-2 max-w-[400px] mx-auto">
          <ul className="flex flex-row p-2 space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hamburger menu for small screens */}
      {!isMediumScreen && (
        <div
          onClick={toggleNav}
          className="absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      )}

      {/* Mobile dropdown menu when nav is true */}
      {nav && !isMediumScreen && (
        <div
          className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center p-4 h-full space-y-8">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setNav(false)}>
                <Link
                  href={link.path}
                  onClick={closeNav}
                  className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
