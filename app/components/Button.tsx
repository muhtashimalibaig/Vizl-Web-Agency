import Link from "next/link";
import React from "react";

interface IButtonProp {
  link: string;
  title: string;
}
const Button: React.FC<IButtonProp> = ({ link, title }) => {
  return (
    <>
      <Link
        href={link}
        className='px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-transparent border border-black transition-all duration-300'>
        {title}
      </Link>
    </>
  );
};

export default Button;
