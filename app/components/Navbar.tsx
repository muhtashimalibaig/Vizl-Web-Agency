"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import GlowButton from "./GlowButton";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`w-full flex justify-between items-center px-6 md:px-20 py-4 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } fixed top-0 z-50 shadow-md`}>
      {/* Logo */}
      <div>
        <Link href={"/"} className='flex items-center'>
          {theme === "light" ? (
            <Image src='/Logo.png' alt='Logo' width={105} height={25} />
          ) : (
            <Image src='/DarkLogo.jpg' alt='Dark Logo' width={85} height={25} />
          )}
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-6 relative'>
        {/* About Dropdown */}
        <div className='relative group'>
          <button className='font-semibold flex items-center gap-1 hover:underline transition-all'>
            About <ChevronDownIcon size={18} />
          </button>
          <div
            className={`absolute left-0 mt-2 w-48 ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            } rounded-lg shadow-lg p-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
            <Link
              href='/about-agency'
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${
                theme === "dark" ? "hover:bg-gray-700" : ""
              } transition`}>
              About Agency
            </Link>
            <Link
              href='/about-ceo'
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${
                theme === "dark" ? "hover:bg-gray-700" : ""
              } transition`}>
              About CEO
            </Link>
          </div>
        </div>

        <Link
          href='/services'
          className='font-semibold hover:underline transition-all'>
          Services
        </Link>
        <Link
          href='/pricing'
          className='font-semibold hover:underline transition-all'>
          Pricing
        </Link>
        <Link
          href='/testimonials'
          className='font-semibold hover:underline transition-all'>
          Testimonials
        </Link>

        <button className='cursor-pointer' onClick={toggleTheme}>
          {theme === "light" ? <Sun size={27} /> : <Moon size={27} />}
        </button>

        <GlowButton text='Contact Us' link='/contact' />
      </div>

      {/* Mobile Burger */}
      <div className='md:hidden flex items-center gap-4'>
        <button className='cursor-pointer' onClick={toggleTheme}>
          {theme === "light" ? <Sun size={27} /> : <Moon size={27} />}
        </button>
        <button onClick={toggleMobileMenu}>
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-3/4 md:hidden ${
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        } shadow-lg p-6 flex flex-col gap-6 z-40 transform translate-x-full opacity-0`}>
        {/* Close Button inside menu */}
        <button className='self-end mb-6' onClick={toggleMobileMenu}>
          <X size={30} />
        </button>

        {/* Mobile Links */}
        <div className='flex flex-col gap-4'>
          <Link href='/about-agency' onClick={() => setMobileOpen(false)}>
            About Agency
          </Link>
          <Link href='/about-me' onClick={() => setMobileOpen(false)}>
            About CEO
          </Link>
          <Link href='/services' onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          <Link href='/portfolio' onClick={() => setMobileOpen(false)}>
            Portfolio
          </Link>
          <Link href='/testimonials' onClick={() => setMobileOpen(false)}>
            Testimonials
          </Link>
          <div>
            <GlowButton text='Contact Us' link='/contact' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
