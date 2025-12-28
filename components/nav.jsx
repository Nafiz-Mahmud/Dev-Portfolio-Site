"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      id="navbar"
      className="navbar  relative overflow-visible  text-white flex justify-between items-center py-2 mx-auto w-[96%] max-w-[1400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href="/">
        <div className="title hover:opacity-80 cursor-pointer flex gap-2 items-center">
          <Image src="/devlogo.png" alt="logo" width={50} height={50} />
          <h2 className="text-2xl font-bold">Dev Portfolio</h2>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="links hidden md:flex gap-8 font-semibold">
        <Link href="/" className="hover:opacity-70">
          Home
        </Link>
        <Link href="#skills_expertise_section" className="hover:opacity-70">
          Skills
        </Link>
        <Link href="#projects_section" className="hover:opacity-70">
          Projects
        </Link>
        {/* <Link href="#pricing_section">Pricing</Link> */}
        {/* <Link href="/blog">Blog</Link> */}
        <Link href="#testimonials_section" className="hover:opacity-70">
          Testimonials
        </Link>
        <Link href="#contact_section" className="hover:opacity-70">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 cursor-pointer z-50 hover:opacity-80"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}

      {isOpen && (
        <>
          <motion.div
            className="blur_bg md:hidden fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            className="menu_section md:hidden absolute right-0 top-full w-[50%] sm:w-[40%] p-2 bg-lightgray/30 backdrop-blur-2xl border-1 border-white/80 z-50 flex flex-col gap-2  font-semibold rounded-md "
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-lightgray/50 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <hr className="opacity-50" />
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md  hover:bg-lightgray/50 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>{" "}
            <hr className="opacity-50" />
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md  hover:bg-lightgray/50 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>{" "}
            <hr className="opacity-50" />
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md  hover:bg-lightgray/50 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>{" "}
            <hr className="opacity-50" />
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md  hover:bg-lightgray/50 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>{" "}
            <hr className="opacity-50" />
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md  hover:bg-lightgray/50 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
}
