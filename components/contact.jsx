"use client";
import Link from "next/link";
import { motion } from "motion/react";
export default function ContactSection() {
  return (
    <motion.div
      className="contact_section text-white pt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
    >
      <h2
        id="contact_section"
        className="text-3xl text-center font-bold tracking-wide"
      >
        Get In Touch
      </h2>
      <p className="text-md text-lightgray text-center font-semibold tracking-wide p-6">
        Have a project in mind? Let's discuss how I can help bring your ideas to
        life.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 mt-16 mb-20">
        <div className="contact_left flex-1">
          <div className="contact_info  flex flex-col sm:flex-row lg:flex-col  gap-6">
            <div className="email_card border-2 border-lightgray-opacity-2 bg-lightgray-opacity-1 w-full p-6 rounded-2xl">
              <div className="flex items-center gap-4 ">
                <div className="email_icon bg-lightgray-opacity-2 border-1 border-lightgray-opacity-2 w-fit p-2 rounded-lg">
                  <Link
                    href="https://www.linkedin.com/in/nafizmahmud/"
                    className="rounded-md text-3xl"
                  >
                    <svg
                      className="text-lightblue"
                      fill="none"
                      strokeWidth="0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3.01 5.838a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v11.324a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11c0-.048.003-.094.01-.14v-.184ZM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 0 1-4.242 0L5 8.06Zm1.572-1.256h10.856l-4.72 4.72a1 1 0 0 1-1.415 0l-4.72-4.72Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <h2 className="text-2xl font-medium">Email</h2>
              </div>
              <Link
                href="mailto:nafizmahmud102@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-wide text-lightgray hover:text-lightblue font-semibold text-lg underline  w-fit"
              >
                nafizmahmud102@gmail.com
              </Link>
            </div>
            <div className="phone_card border-2 border-lightgray-opacity-2 bg-lightgray-opacity-1 w-full p-6 rounded-2xl">
              <div className="flex items-center gap-4 ">
                <div className="phone-icon bg-lightgray-opacity-2 border-1 border-lightgray-opacity-2 w-fit p-2 rounded-lg">
                  <Link href="/" className="rounded-md text-3xl">
                    <svg
                      className="text-lightblue"
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </Link>
                </div>
                <h2 className="text-2xl font-medium">Phone</h2>
              </div>
              <Link
                href="https://wa.me/8801703876066"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-wide text-lightgray hover:text-lightblue font-semibold text-lg underline w-fit "
              >
                (+88) 017-03876066
              </Link>
            </div>
          </div>
        </div>
        <div className="contact_right flex-2 ">
          <form action="" className="contact_form  flex flex-col ">
            <div className="flex flex-col md:flex-row   justify-between gap-6">
              <div className="flex flex-1 flex-col">
                <label htmlFor="username">Name</label>
                <input
                  className="font-semibold tracking-wide"
                  type="text"
                  name="username"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="font-semibold tracking-wide"
                  type="text"
                  name="email"
                  placeholder="your.email@gmail.com"
                />
              </div>
            </div>

            <label className="mt-4" htmlFor="subject">
              Subject
            </label>
            <input
              className="font-semibold tracking-wide"
              type="text"
              name="subject"
              placeholder="Project inquery"
            />
            <label className="mt-4" htmlFor="Message">
              Message
            </label>
            <textarea
              className="w-full"
              name="message"
              id="message"
              rows={8}
              placeholder="Tell me about your project..."
            ></textarea>
            <button className="px-8 py-4  w-fit font-semibold rounded-lg mt-8 bg-lightblue  hover:bg-darkblue duration-300 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
