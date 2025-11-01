"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { useTheme } from "../context/ThemeContext";

const faqs = [
  {
    question: "What kind of websites do you develop?",
    answer:
      "We develop modern, responsive, high-performing websites including corporate websites, portfolios, e-commerce platforms, and custom web applications.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on project complexity. Standard business websites take 2-4 weeks, while complex platforms may take longer.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes! We offer ongoing maintenance and support to ensure your website stays up-to-date, secure, and running smoothly.",
  },
  {
    question: "Can you optimize my website for SEO?",
    answer:
      "Absolutely! We follow SEO best practices during development to ensure your website is search-engine-friendly and optimized for performance.",
  },
];

const FAQAccordion = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animate FAQ entry on mount
  useEffect(() => {
    faqRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.from(ref, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power3.out",
        });
      }
    });
  }, []);

  // Animate FAQ expand/collapse
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          gsap.to(ref, {
            height: ref.scrollHeight,
            duration: 0.5,
            ease: "power3.out",
          });
        } else {
          gsap.to(ref, {
            height: 0,
            duration: 0.5,
            ease: "power3.inOut",
          });
        }
      }
    });
  }, [openIndex]);

  // Dynamic theme classes
  const bgClass =
    theme === "light"
      ? "bg-gray-100 text-black border-gray-300"
      : "bg-gray-800 text-white border-gray-700";
  const hoverClass =
    theme === "light"
      ? "hover:from-purple-300 hover:to-pink-300"
      : "hover:from-purple-700 hover:to-pink-500";
  const textClass = theme === "light" ? "text-gray-800" : "text-gray-300";

  return (
    <section
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-900"
      } w-full py-20 px-6 md:px-20`}>
      <div className='max-w-5xl mx-auto text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]'>
          Frequently Asked Questions
        </h2>
        <p className={`text-lg md:text-xl ${textClass}`}>
          Have questions about our web development services? Find answers below.
        </p>
      </div>

      <div className='max-w-3xl mx-auto flex flex-col gap-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null): void => {
              faqRefs.current[index] = el;
            }}
            className={`rounded-2xl shadow-lg overflow-hidden border ${bgClass} ${
              openIndex === index ? "ring-2 ring-pink-500" : ""
            }`}>
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center p-5 text-left border-b ${hoverClass} transition-all duration-300 focus:outline-none`}>
              <span className='font-semibold text-lg'>{faq.question}</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              ref={(el: HTMLDivElement | null): void => {
                faqRefs.current[index] = el;
              }}
              className='h-0 overflow-hidden px-5 pb-4 transition-all duration-300 py-5'>
              <p className={textClass}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
