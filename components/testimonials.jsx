"use client";
import { motion } from "motion/react";
export default function TestimonialSection() {
  const clientsTestimonials = [
    {
      id: 1,
      testimony:
        "Working with Nafiz was an absolute pleasure. The website exceeded our expectations and was delivered ahead of schedule. Highly recommanded!",
      client_name: "Sarah Johnson",
      client_profession: "CEO, TechStart",
    },
    {
      id: 2,
      testimony:
        "Nafiz transformed our vision into a beautiful, functional website. The attention to details and technical expertise are unmatched.",
      client_name: "Michael Chan",
      client_profession: "Founder, FitLife",
    },
    {
      id: 3,
      testimony:
        "Our SaaS landing page has seen a 2000% increase in conversions since the redesign. Nafiz truly understands user experince.",
      client_name: "Jacob Smith",
      client_profession: "Marketing Director, ShopHub",
    },
  ];
  return (
    <div className="testimonials_section text-white" id="testimonials_section">
      <motion.h2
        className="text-3xl text-center font-bold tracking-wide"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Client Testimonials
      </motion.h2>
      <motion.p
        className="text-md text-lightgray text-center font-semibold tracking-wide p-6"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Don't just take my word for it - hear from satisfied clients
      </motion.p>
      <div className="client_cards py-24 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]  justify-between gap-8">
        {clientsTestimonials.map((each_client, index) => (
          <motion.div
            className="card rounded-xl p-4 flex flex-col gap-2 items-start bg-lightgray-opacity-1 border-1 border-lightgray-opacity-2"
            key={each_client.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="quote_icon">
              <svg
                className="text-6xl text-lightblue opacity-50"
                fill="none"
                strokeWidth="2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
            <div className="star_icons flex items-center gap-1">
              <div className="icon">
                <svg
                  className="text-2xl text-lightblue"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>
              <div className="icon">
                <svg
                  className="text-2xl text-lightblue"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>{" "}
              <div className="icon">
                <svg
                  className="text-2xl text-lightblue"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>{" "}
              <div className="icon">
                <svg
                  className="text-2xl text-lightblue"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>{" "}
              <div className="icon">
                <svg
                  className="text-2xl text-lightblue"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>
            </div>

            <p className="text-lightgray font-semibold text-lg">
              {each_client.testimony}
            </p>
            <h2 className="text-2xl font-semibold">
              {each_client.client_name}
            </h2>
            <h2 className="text-lightgray font-semibold text-xl">
              {each_client.client_profession}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
