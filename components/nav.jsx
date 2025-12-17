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
      className="navbar  bg-background-primary text-white flex justify-between items-center py-2 mx-auto w-[96%] max-w-[1400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href="/">
        <div className="title cursor-pointer flex gap-2 items-center">
          <Image src="/devlogo.png" alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Dev Portfolio</h1>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="links hidden md:flex gap-8 font-semibold">
        <Link href="/">Home</Link>
        <Link href="#skills_expertise_section">Skills</Link>
        <Link href="#projects_section">Projects</Link>
        {/* <Link href="#pricing_section">Pricing</Link> */}
        {/* <Link href="/blog">Blog</Link> */}
        <Link href="#testimonials_section">Testimonials</Link>
        <Link href="#contact_section">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1"
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
        <div className="md:hidden absolute top-0 z-100 left-0 right-0 bg-black/95 flex flex-col gap-4 font-semibold p-6 mt-2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
