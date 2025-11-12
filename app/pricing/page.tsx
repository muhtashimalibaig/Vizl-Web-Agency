"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GlowButton from "../components/GlowButton";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for startups and small projects.",
    features: [
      "1 Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "$399",
    description: "Ideal for growing businesses and brands.",
    features: [
      "Up to 5 Pages",
      "Custom UI/UX Design",
      "SEO Optimization",
      "Performance Tuning",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$799",
    description: "For large-scale businesses and agencies.",
    features: [
      "Unlimited Pages",
      "Advanced Animations",
      "Full SEO Package",
      "Dedicated Support",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className='w-full pt-32 py-10 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='inline text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]'>
          Pricing Plans
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mx-auto'>
          Choose the plan that fits your business best. We deliver stunning,
          high-performing websites with a touch of creativity.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl border-2 shadow-xl overflow-hidden p-8 text-center transition-all duration-500 transform hover:scale-105 ${
              plan.highlight
                ? "bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white border-none"
                : "bg-white dark:bg-[#0a0a0a] border-gray-300 dark:border-gray-700"
            }`}>
            <h3
              className={`text-2xl font-bold mb-4 ${
                plan.highlight ? "text-white" : "text-gray-900 dark:text-white"
              }`}>
              {plan.name}
            </h3>
            <p
              className={`text-4xl font-extrabold mb-2 ${
                plan.highlight ? "text-white" : "text-pink-500"
              }`}>
              {plan.price}
            </p>
            <p
              className={`mb-6 ${
                plan.highlight
                  ? "text-white/80"
                  : "text-gray-600 dark:text-gray-300"
              }`}>
              {plan.description}
            </p>
            <ul className='mb-8 space-y-2'>
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`${
                    plan.highlight
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}>
                  ✅ {feature}
                </li>
              ))}
            </ul>
            {/* <button
              className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
                plan.highlight
                  ? "bg-white text-pink-600 hover:bg-transparent hover:text-white border border-white"
                  : "bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white hover:bg-transparent hover:text-pink-500 border border-pink-500"
              }`}>
              Get Started
            </button> */}
            {!plan.highlight ? (
              <GlowButton text='Contact Us' link='/contact' />
            ) : (
              <Link
                href={"/contact"}
                className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 bg-white text-pink-600 hover:bg-transparent hover:text-white border border-white`}>
                Freelance Now
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
