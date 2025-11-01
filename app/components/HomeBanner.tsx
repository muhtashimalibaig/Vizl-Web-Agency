import React from "react";
import GlowButton from "./GlowButton";

const HomeBanner = () => {
  return (
    <>
      <div className='w-full mt-20'>
        <div id='image'>
          <div>
            <h1
              className='
                text-5xl font-extrabold mb-4 
                bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text 
                drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] 
                animate-pulse
              '>
              VIZL WEB AGENCY
            </h1>
            <p className='text-lg max-w-xl mb-6'>
              We create modern, responsive, and high-performing websites that
              turn your vision into a digital reality. Let’s build something
              amazing together.
            </p>
            <div className='gap-5 block sm:flex'>
              <GlowButton text='Freelance Now' link='/contact' />
              <button className=' px-8 py-3 mt-5 sm:mt-0 bg-white text-black font-semibold rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
