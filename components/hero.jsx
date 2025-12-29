"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  const duration = 0.4;
  const initialY = 20;

  return (
    <div className="hero  py-12 flex flex-col-reverse lg:flex-row   justify-between gap-12 items-center lg:items-stretch">
      <div className="hero_text_section   flex-2  flex flex-col gap-8 p-8 lg:p-0  justify-between items-center lg:items-stretch">
        <motion.div
          className="status   shadow-sm shadow-darkblue  w-fit border-2 py-2 px-4 border-lightblue rounded-full flex gap-2 items-center justify-center"
          style={{ backgroundColor: "rgba(96, 165, 250, 0.2)" }}
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: "easeOut" }}
        >
          <span className="h-4 w-4 bg-lightblue rounded-full relative">
            <span className="h-4 w-4 bg-lightblue rounded-full animate-ping absolute top-0 left-0 z-1">
              .
            </span>
          </span>
          <p className="text-lightblue text-sm sm:text-md lg:text-lg font-semibold">
            Available for freelance work
          </p>
        </motion.div>
        <motion.h2
          className="text-white  sm:tracking-wide text-2xl sm:text-3xl lg:text-4xl font-bold"
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: "easeOut", delay: 0.1 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="bg-gradient-to-r from-cyan-600 to-purple-800 text-transparent bg-clip-text"
            style={{
              backgroundSize: "200% auto", // Make gradient twice as wide
            }}
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.3, // Slight delay after text appears
            }}
          >
            Nafiz Mahmud
          </motion.span>
        </motion.h2>

        <motion.h1
          className="text-lightgray text-center lg:text-left tracking-wide  sm:text-md lg:text-lg font-semibold"
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: "easeOut", delay: 0.2 }}
        >
          A passionate{" "}
          <span className="text-lightblue font-bold">
            Full-Stack Web Developer
          </span>{" "}
          specializing in crafting beautiful, functional and user-friendly
          digital web experiences with modern web technologies.
        </motion.h1>
        <div className="buttons flex flex-col items-center sm:flex-row gap-6">
          <Link href="#connect_section">
            <motion.button
              className="text-white text-lg bg-gradient-to-r from-lightblue to-darkblue animate-pulse hover:animate-none hover:scale-95  cursor-pointer tracking-wide border-1 border-lightblue w-fit py-2 px-4 rounded-md text-lightblue font-semibold"
              initial={{ opacity: 0, y: initialY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, ease: "easeOut", delay: 0.3 }}
            >
              Contact Me
            </motion.button>
          </Link>
          <Link href="#projects_section">
            <motion.button
              className="text-white text-lg bg-lightgray-opacity-2 animate-pulse hover:animate-none hover:scale-95 cursor-pointer tracking-wide border-1 border-lightblue w-fit py-2 px-4 rounded-md text-lightblue font-semibold"
              initial={{ opacity: 0, y: initialY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, ease: "easeOut", delay: 0.4 }}
            >
              View Projects
            </motion.button>
          </Link>
        </div>
      </div>
      {/* mobile img */}
      <motion.div
        className="hero_img_section flex-1 flex items-center relative sm:block lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "decay",
          delay: 0.05,
          duration,
        }}
      >
        <div className="bg_box bg-lightblue   opacity-20 z-[-1] rotate-6  lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] absolute top-0% left-0% rounded-2xl shadow-md shadow-blue-600"></div>
        <div className="img_container   lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] relative rounded-2xl overflow-hidden">
          <Image
            src="/hero_img.png"
            alt="hero"
            fill={true}
            priority={true}
            className="opacity-100"
          />
        </div>
      </motion.div>
      {/* Desktop view  */}
      <motion.div
        className="hero_img_section flex-1 flex items-center lg:pr-[1.5rem] relative hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "decay",
          delay: 0.6,
          duration,
        }}
      >
        <div className="bg_box bg-lightblue   opacity-20 z-[-1] rotate-6  lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] absolute top-0% left-0% rounded-2xl shadow-md shadow-blue-600"></div>
        <div className="img_container   lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] relative rounded-2xl overflow-hidden">
          <Image
            src="/hero_img.png"
            alt="hero"
            fill={true}
            priority={true}
            className="opacity-100"
          />
        </div>
      </motion.div>
    </div>
  );
}
