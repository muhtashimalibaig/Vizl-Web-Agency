"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "../context/ThemeContext";
import { usePathname } from "next/navigation"; // detect route change

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { theme } = useTheme();
  const pathname = usePathname();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!formRef.current) return;

    gsap.set(formRef.current.children, { opacity: 0, y: 50 });
    gsap.to(formRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, [pathname]);

  const inputBg =
    theme === "light"
      ? "bg-gray-100 text-black border-gray-300"
      : "bg-gray-800 text-white border-gray-700";
  const labelText =
    theme === "light"
      ? "text-gray-600 peer-focus:text-pink-500"
      : "text-gray-400 peer-focus:text-pink-500";

  // Simple validation function
  const validateForm = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const newErrors: { [key: string]: string } = {};
    if (!data.name || data.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Enter a valid email";
    if (!data.message || data.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error. Try again later.");
    }
  };

  return (
    <section
      className={`w-full py-32 px-6 md:px-20 ${
        theme === "light" ? "bg-white text-black" : "text-white"
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

      <form
        ref={formRef}
        className='max-w-3xl mx-auto flex flex-col gap-6'
        onSubmit={handleSubmit}>
        {/* Name */}
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
          {errors.name && (
            <p className='text-red-500 mt-1 text-sm'>{errors.name}</p>
          )}
        </div>

        {/* Email */}
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
          {errors.email && (
            <p className='text-red-500 mt-1 text-sm'>{errors.email}</p>
          )}
        </div>

        {/* Message */}
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
          {errors.message && (
            <p className='text-red-500 mt-1 text-sm'>{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type='submit'
            className='relative px-8 py-3 text-white font-semibold rounded-full 
        bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 
        shadow-[0_0_15px_rgba(236,72,153,0.6)] inline-block
        transition-all duration-500
        hover:shadow-[0_0_25px_rgba(236,72,153,0.9)]
        hover:scale-105 cursor-pointer
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-r before:from-red-500 before:via-purple-500 before:to-pink-500
        before:blur-xl before:opacity-50 before:animate-pulse'>
            Send now
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
