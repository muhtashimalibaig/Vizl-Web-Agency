"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import GlowButton from "../components/GlowButton";
import { useTheme } from "../context/ThemeContext";
import { usePathname } from "next/navigation"; // <--- detect route change

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { theme } = useTheme();
  const pathname = usePathname(); // detects route change

  useEffect(() => {
    if (!formRef.current) return;

    // Reset children to initial state
    gsap.set(formRef.current.children, { opacity: 0, y: 50 });

    // Animate form elements
    gsap.to(formRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, [pathname]); // re-run animation on every route change

  // Dynamic classes based on theme
  const inputBg =
    theme === "light"
      ? "bg-gray-100 text-black border-gray-300"
      : "bg-gray-800 text-white border-gray-700";
  const labelText =
    theme === "light"
      ? "text-gray-600 peer-focus:text-pink-500"
      : "text-gray-400 peer-focus:text-pink-500";

  return (
    <section
      className={`w-full py-32 px-6 md:px-20 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}>
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h2 className='text-4xl inline-block md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]'>
          Contact Us
        </h2>
        <p
          className={`${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          } text-lg md:text-xl max-w-2xl mx-auto`}>
          Have a project in mind? Let's build something amazing together. Fill
          out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      <form ref={formRef} className='max-w-3xl mx-auto flex flex-col gap-6'>
        <div className='relative'>
          <input
            type='text'
            id='name'
            placeholder='Your Name'
            className={`peer w-full p-4 rounded-xl ${inputBg} focus:outline-none focus:border-pink-500`}
          />
          <label
            htmlFor='name'
            className={`absolute left-4 top-4 transition-all duration-300 peer-placeholder-shown:top-9 peer-placeholder-shown:text-base ${labelText} peer-focus:top-[-10px] peer-focus:text-sm`}>
            Name
          </label>
        </div>

        <div className='relative'>
          <input
            type='email'
            id='email'
            placeholder='Your Email'
            className={`peer w-full p-4 rounded-xl ${inputBg} focus:outline-none focus:border-pink-500`}
          />
          <label
            htmlFor='email'
            className={`absolute left-4 top-4 transition-all duration-300 peer-placeholder-shown:top-9 peer-placeholder-shown:text-base ${labelText} peer-focus:top-[-10px] peer-focus:text-sm`}>
            Email
          </label>
        </div>

        <div className='relative'>
          <textarea
            id='message'
            placeholder='Your Message'
            className={`peer w-full p-4 rounded-xl ${inputBg} focus:outline-none focus:border-pink-500 resize-none h-40`}
          />
          <label
            htmlFor='message'
            className={`absolute left-4 top-4 transition-all duration-300 peer-placeholder-shown:top-9 peer-placeholder-shown:text-base ${labelText} peer-focus:top-[-10px] peer-focus:text-sm`}>
            Message
          </label>
        </div>

        <div>
          <GlowButton text='Send now' link='' />
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
