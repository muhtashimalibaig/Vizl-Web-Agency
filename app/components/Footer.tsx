"use client";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Agency Info */}
        <div>
          <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500'>
            VIZL WEB AGENCY
          </h2>
          <p className='mt-4 text-gray-400'>
            Crafting modern websites and applications to boost your online
            presence and credibility.
          </p>
          <div className='flex mt-6 space-x-4'>
            <a href='https://www.facebook.com/profile.php?id=61583851104076'>
              <Facebook size={20} className='hover:text-blue-500' />
            </a>
            <a href='#'>
              <Twitter size={20} />
            </a>
            <a href='www.linkedin.com/in/vizlweb-muhtashim-baig-9b1201396'>
              <Linkedin size={20} className='hover:text-blue-900' />
            </a>
            <a href='https://www.instagram.com/vizl_web_agency/'>
              <Instagram size={20} className='hover:text-pink-600' />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Services</h3>
          <ul className='space-y-2'>
            <li>
              <Link href={"/services"}>Web Development</Link>
            </li>
            <li>
              <Link href={"/services"}>UI/UX Design</Link>
            </li>
            <li>
              <Link href={"/services"}>SEO & Marketing</Link>
            </li>
            <li>
              <Link href={"/services"}>E-Commerce Solutions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Contact</h3>
          <p className='mt-2 text-gray-400'>
            Email: muhtashimmughal5@gmail.com
          </p>
          <p className='mt-2 text-gray-400'>Phone: 0328 4202722</p>
        </div>
      </div>

      <div className='mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} VIZL WEB AGENCY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
