"use client";
import { motion } from "motion/react";
export default function SkillsExpertiseSection() {
  return (
    <div className="skills_expertise_section  text-white  my-12 pt-24 pb-40  bg-linear-to-b from-background-transparent  via-background-secondary to-background-transparent">
      <motion.h2
        id="skills_expertise_section"
        className="text-3xl text-center font-bold tracking-wide"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Skills & Expertise
      </motion.h2>
      <motion.p
        className="text-md text-lightgray text-center font-semibold tracking-wide p-6"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Delivering excellence through modern technologies and best practices
      </motion.p>
      <div className="skill_cards px-5 grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4 mt-12">
        <motion.div
          className="card border-1 border-lightgray frontend flex flex-col gap-2 bg-lightgray-opacity-2  p-4 rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="icon border-1 bg-lightgray-opacity-1 border-lightblue rounded-md w-fit p-2">
            <svg
              className="text-3xl text-lightblue "
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              style={{
                overflow: "visible",
              }}
            >
              <path
                fill="currentColor"
                d="m24 12-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12ZM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12Zm6.96 9H7.66l6.552-18h2.128L9.788 21Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Frontend Development</h2>
          <div className="tags flex flex-wrap gap-2">
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              TypeScript
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Tailwind CSS
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              React
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Next.js
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Re-Design
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card border-1 border-lightgray backend flex flex-col gap-2 bg-lightgray-opacity-2  p-4 rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="icon border-1 text-lightblue bg-lightgray-opacity-1 border-lightblue rounded-md w-fit p-2">
            <svg
              className="text-3xl text-lightblue"
              fill="#60A5FA"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              style={{ overflow: "visible" }}
            >
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0s224 35.8 224 80zm-54.8 134.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432v-85.9z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Backend Development</h2>
          <div className="tags flex flex-wrap gap-2">
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Node.js
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              PostgreSQL
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              MongoDB
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Rest API
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Authentication
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card border-1 border-lightgray wordpress flex flex-col gap-2 bg-lightgray-opacity-2 p-4 rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="icon border-1 bg-lightgray-opacity-1 border-lightblue rounded-md w-fit p-2">
            <svg
              className="text-3xl text-lightblue"
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709A10.794 10.794 0 0 1 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Wordpress</h2>
          <div className="tags flex flex-wrap gap-2">
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Site Building
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Elementor
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Plugins
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              WooCommerce
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              WP Optimization
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card border-1 border-lightgray framer flex flex-col gap-2 bg-lightgray-opacity-2  p-4 rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="icon border-1 bg-lightgray-opacity-1 border-lightblue rounded-md w-fit p-2">
            <svg
              className="text-3xl text-lightblue"
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Framer Development</h2>
          <div className="tags flex flex-wrap gap-2">
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Component Design
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Animations
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              CMS Setup
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Responsive Layouts
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card border-1 border-lightgray performance flex flex-col gap-2 bg-lightgray-opacity-2 p-4 rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="icon border-1 bg-lightgray-opacity-1 border-lightblue rounded-md w-fit p-2">
            <svg
              className="text-3xl text-lightblue"
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Performance & Optimization</h2>
          <div className="tags flex flex-wrap gap-2">
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              SEO
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Analytics
            </p>

            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Core Web Vitals
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Caching
            </p>
            <p className="py-1 px-3 bg-lightgray-opacity-1 rounded-full border-2 border-lightgray-opacity-2">
              Load Speed Optimization
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
