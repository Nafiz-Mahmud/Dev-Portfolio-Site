"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, useRef } from "react";
export default function FAQSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer full-stack web development services including frontend development with React, Next.js and backend development with Node.js and Python, database design, API development, and website deployment and maintenance.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website can take 1-2 weeks, while a complex web application might take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your development process?",
      answer:
        "My process includes: 1) Initial consultation to understand your needs, 2) Planning and wireframing, 3) Design mockups for approval, 4) Development with regular updates, 5) Testing and quality assurance, 6) Deployment and launch, 7) Post-launch support and maintenance.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes! I offer various maintenance and support packages to ensure your website stays up-to-date, secure, and running smoothly. This includes bug fixes, updates, and feature enhancements as needed.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and various other frameworks and tools depending on project requirements.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "I believe in transparent and regular communication. I provide weekly progress updates, available via email and messaging apps, and schedule regular video calls to discuss progress and gather feedback.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "I typically work with a 50% upfront deposit to start the project, with the remaining 50% due upon completion. For larger projects, I can arrange milestone-based payments. Payment methods include bank transfer, escrow and other digital payment platforms.",
    },
    {
      question: "Can you work with my existing team?",
      answer:
        "Absolutely! I'm experienced in collaborating with designers, other developers, and project managers. I'm comfortable using tools like Git, Slack, Jira, and Trello to ensure smooth team collaboration.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq_section  py-24 ">
      <motion.h2
        id="faq_section"
        className="text-3xl text-white text-center font-bold tracking-wide"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="text-md text-lightgray text-center font-semibold tracking-wide p-6"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Got questions? I've got answers. Here are some of the most common
        questions I receive about my services.
      </motion.p>

      <div className=" max-w-[80%] mx-auto pt-24 pb-10">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              onClick={() => toggleFAQ(index)}
              className=" bg-lightgray-opacity-1  cursor-pointer rounded-xl p-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <button className="w-full  cursor-pointer flex justify-between items-center text-left">
                <span className="text-md md:text-lg text-white hover:opacity-80 font-medium pr-2 ">
                  {faq.question}
                </span>
                <span className="text-lightblue font-bold  text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden  transition-all duration-300"
                style={{
                  maxHeight:
                    openIndex === index
                      ? contentRefs.current[index]?.scrollHeight
                      : 0,
                }}
              >
                <hr className="text-lightgray-opacity-2" />
                <p className="mt-2 pl-2 text-gray-300">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-lightgray text-center text-xl font-semibold ">
        Still have questions?
      </p>
      <button className="px-4 py-2 mt-6 cursor-pointer hover:bg-darkblue duration-300  rounded-lg text-white bg-lightblue font-semibold block mx-auto">
        <Link href="#contact_section">Get In Touch</Link>
      </button>
    </div>
  );
}
