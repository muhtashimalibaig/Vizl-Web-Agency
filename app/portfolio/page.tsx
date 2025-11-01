"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import projectImage from "../../public/Project.jpg";
import Image from "next/image";
const portfolioItems = [
  {
    title: "Socdia Agency Website",
    description:
      "Developed a modern, responsive website for Socdia Agency. Focused on clean UI, fast performance, and seamless user experience.",
    image: projectImage, // Add your project screenshot in /public/images/
    website: "https://socdia.agency",
  },
];

const PortfolioSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate cards on mount one by one
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className='w-full pt-32 py-10 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='inline text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]'>
          Our Portfolio
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mx-auto'>
          Here's a glimpse of our recent work. We craft modern, responsive, and
          high-performing websites for our clients.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-10'>
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className='border group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105'>
            {/* Project Image */}
            <Image
              src={item.image}
              alt={item.title}
              className='w-full h-64 object-cover rounded-3xl'
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl flex flex-col justify-center items-center text-center p-6'>
              <h3 className='text-2xl font-bold mb-2 text-white'>
                {item.title}
              </h3>
              <p className='text-gray-200 mb-4'>{item.description}</p>
              <a
                href={item.website}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-2 bg-pink-500 rounded-full text-white font-semibold hover:bg-pink-600 transition-all duration-300'>
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
