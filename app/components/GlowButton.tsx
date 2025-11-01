import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const GlowButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className='
        relative px-8 py-3 text-white font-semibold rounded-full 
        bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 
        shadow-[0_0_15px_rgba(236,72,153,0.6)] inline-block
        transition-all duration-500
        hover:shadow-[0_0_25px_rgba(236,72,153,0.9)]
        hover:scale-105
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-r before:from-red-500 before:via-purple-500 before:to-pink-500
        before:blur-xl before:opacity-50 before:animate-pulse
      '>
      <span className='relative z-10 flex'>
        {text} <ChevronRight />
      </span>
    </Link>
  );
};

export default GlowButton;
