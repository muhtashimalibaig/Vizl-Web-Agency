"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AboutImage from "../../public/AboutImage.jpg";
import GlowButton from "../components/GlowButton";
// import AgencyImage from "../../public/agency.jpg"; // Replace with your actual image path

gsap.registerPlugin(ScrollTrigger);

const AboutAgency = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className='w-full pt-32 pb-10 overflow-hidden px-6 md:px-20'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
        {/* Text Section */}
        <div ref={textRef} className='md:w-1/2'>
          <h2 className='text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]'>
            About VIZL Web Agency
          </h2>
          <p className='mb-4'>
            VIZL Web Agency specializes in creating **modern, responsive, and
            high-performing websites**. We provide end-to-end **web development
            services** including:
          </p>
          <ul className='list-disc list-inside space-y-2'>
            <li>Responsive Web Design</li>
            <li>Front-end & Back-end Development</li>
            <li>Full-Stack Web Applications</li>
            <li>SEO Optimization & Social Media Integration</li>
            <li>Custom Web Solutions tailored to your business needs</li>
          </ul>
          <div className='mt-5'>
            <GlowButton text='See Our Projects' link='/portfolio' />
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className='md:w-1/2'>
          <Image
            src={AboutImage}
            alt='VIZL Web Agency'
            className='rounded-xl shadow-2xl object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
