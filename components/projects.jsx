"use client";
import { motion } from "motion/react";
import Image from "next/image";
export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      img: "/project_one.png",
      title: "E-Commerce Platform",
      desc: "A full-featured online shopping platform with payment intregration, inventory management, and admin dashboard.",
      tags: ["React", "Tailwind", "Node.js", "Postgresql"],
    },
    {
      id: 2,
      img: "/project_two.jpg",
      title: "Task Management App",
      desc: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      tags: ["Next.js", "TypeScript", "MongoDB", "WebSockets"],
    },
    {
      id: 3,
      img: "/project_three.avif",
      title: "Fitness Tracking App",
      desc: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.",
      tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    },
  ];
  return (
    <div className="projects_section mb-48" id="projects_section">
      <motion.h2
        className="text-3xl text-white text-center font-bold tracking-wide"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-md text-lightgray text-center font-semibold tracking-wide p-6"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        A showcase of my recent work and personal projects
      </motion.p>
      <div className="project_cards mt-20 grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] justify-between gap-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project_card flex-1 overflow-hidden text-white rounded-lg border-1 border-lightgray-opacity-2 bg-lightgray-opacity-1"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="project_img_container  h-[13rem] w-full relative overflow-hidden">
              <Image
                className="object-cover object-center"
                src={project.img}
                alt="/"
                fill={true}
              />
            </div>
            <div className="project-texts flex flex-col gap-4 px-4 py-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-lightgray font-medium grow">{project.desc}</p>
              <div className="project_tags flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p
                    key={tag}
                    className="py-1 px-3 bg-lightgray-opacity-2 rounded-full border-1 border-lightblue text-lightblue font-medium"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="buttons mt-1 flex gap-8 font-semibold ">
                {/* <div className="code flex gap-2 items-center justify-center">
                <svg
                  className="text-3xl"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path
                    fill="currentColor"
                    d="M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.588.196 1.15.14.024-.382.094-.753.202-1.096-2.968-.725-4.648-2.64-4.648-6.396 0-1.238.37-2.355 1.058-3.291-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308 1.477-.933 2.614-1.227 3.422-1.097.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19.691.936 1.058 2.045 1.058 3.292 0 3.758-1.674 5.666-4.642 6.393.125.415.19.878.19 1.38 0 .664-.002 1.299-.007 2.01 0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447.005-.705c.005-.707.008-1.338.008-1.997 0-.697-.184-1.152-.426-1.361-.661-.57-.326-1.654.541-1.751 2.966-.334 4.336-1.483 4.336-4.66 0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135 9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404 0 3.172 1.371 4.33 4.322 4.66.865.098 1.202 1.178.545 1.749-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"
                  ></path>
                </svg>

                <p className="text-lg">Code</p>
              </div> */}
                <div className="demo text-lightgray hover:text-white cursor-pointer flex gap-2 items-center justify-center">
                  <svg
                    className="text-3xl"
                    fill="none"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <path d="M15 3 21 3 21 9"></path>
                    <path d="M10 14 21 3"></path>
                  </svg>

                  <p className="text-lg">Live Demo</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
