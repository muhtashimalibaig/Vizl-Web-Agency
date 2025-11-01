"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";

const testimonials = [
  {
    clientName: "Socdia Agency",
    clientRole: "CEO, Socdia",
    feedback:
      "VIZL WEB AGENCY delivered an outstanding website for our agency. The design, performance, and responsiveness exceeded our expectations. Highly recommend!",
    rating: 5,
    website: "https://socdia.agency",
  },
  // You can add more testimonials here
];

const TestimonialSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.set(cardRefs.current, { opacity: 0, y: 50, scale: 0.95 });

    const tl = gsap.timeline();
    tl.to(cardRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className='w-full pt-32 pb-10 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]'>
          Client Testimonial
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mx-auto'>
          Hear what our clients have to say about our work. Quality,
          professionalism, and creativity are always our top priorities.
        </p>
      </div>

      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          ref={(el) => {
            cardRefs.current[index] = el; // assign the element
          }}
          className='max-w-3xl mx-auto border p-8 rounded-3xl shadow-2xl relative mb-8'>
          {/* Stars */}
          <div className='flex items-center mb-4'>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className='w-6 h-6 text-yellow-400 mr-1' />
            ))}
          </div>

          {/* Feedback */}
          <p className='text-lg mb-6'>
            {testimonial.feedback.split("VIZL WEB AGENCY").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <>
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] font-bold'>
                    VIZL WEB AGENCY
                  </span>
                  {part}
                </>
              ) : (
                part
              )
            )}
          </p>

          {/* Client Info */}
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0'>
            <div>
              <h4 className='text-xl font-bold'>{testimonial.clientName}</h4>
              <p className='text-gray-500'>{testimonial.clientRole}</p>
            </div>
            <a
              href={testimonial.website}
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-500 font-semibold hover:underline'>
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialSection;
