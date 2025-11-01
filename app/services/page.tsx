"use client";

import React, { useEffect, useRef } from "react";
import {
  Code,
  LayoutDashboard,
  Globe,
  Server,
  ShoppingCart,
  BarChart2,
} from "lucide-react";
import { gsap } from "gsap";
import GlowButton from "../components/GlowButton";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern, responsive websites with clean code, fast performance, and user-friendly interfaces.",
    icon: <Code className='w-12 h-12' />,
    darkGradient: "from-purple-800 via-pink-800 to-red-800",
    lightGradient: "from-purple-400 via-pink-400 to-red-400",
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and beautiful interfaces that enhance user experience and engagement.",
    icon: <LayoutDashboard className='w-12 h-12' />,
    darkGradient: "from-green-800 via-blue-800 to-indigo-800",
    lightGradient: "from-green-400 via-blue-400 to-indigo-400",
  },
  {
    title: "SEO & Analytics",
    description:
      "Optimize your website for search engines and track performance to grow your online presence.",
    icon: <Globe className='w-12 h-12' />,
    darkGradient: "from-yellow-800 via-orange-800 to-red-800",
    lightGradient: "from-yellow-400 via-orange-400 to-red-400",
  },
  {
    title: "Dashboard Management",
    description:
      "Create custom dashboards to monitor your business data, track KPIs, and make data-driven decisions.",
    icon: <BarChart2 className='w-12 h-12' />,
    darkGradient: "from-indigo-800 via-purple-800 to-pink-800",
    lightGradient: "from-indigo-400 via-purple-400 to-pink-400",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Develop fully-featured e-commerce platforms with payment gateways, product catalogs, and order management.",
    icon: <ShoppingCart className='w-12 h-12' />,
    darkGradient: "from-red-800 via-orange-800 to-yellow-800",
    lightGradient: "from-red-400 via-orange-400 to-yellow-400",
  },
  {
    title: "Cloud Integration",
    description:
      "Integrate cloud services to scale your business, improve collaboration, and ensure reliable data storage.",
    icon: <Server className='w-12 h-12' />,
    darkGradient: "from-gray-800 via-blue-900 to-indigo-900",
    lightGradient: "from-gray-400 via-blue-400 to-indigo-400",
  },
];

const ServicesSection = () => {
  return (
    <section className='w-full pt-32 pb-10 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-4 inline bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]'>
          Our Services
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mx-auto'>
          We provide cutting-edge web solutions tailored to your business needs.
          Explore our services and take your online presence to the next level.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8'>
        {services.map((service, i) => (
          <div
            key={i}
            className='group relative p-8 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 shadow-2xl'>
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.darkGradient} opacity-80 group-hover:opacity-50 group-hover:bg-gradient-to-br ${service.lightGradient} transition-all duration-500`}
            />

            {/* Content */}
            <div className='relative z-10 flex flex-col items-start gap-4'>
              <div className='mb-4'>{service.icon}</div>
              <h3 className='text-2xl font-bold'>{service.title}</h3>
              <p className='text-gray-200'>{service.description}</p>
              <Link
                href={"/contact"}
                className='px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300'>
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
