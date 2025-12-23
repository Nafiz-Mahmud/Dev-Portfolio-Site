"use client";
import Link from "next/link";
import { motion } from "motion/react";
export default function SocialsSection() {
  return (
    <div
      className="socials_nums_section   pt-28 text-white  gap-8 flx-col lg:flex items-center justify-between "
      id="connect_section"
    >
      <motion.div
        className="social_links flex-1   border-1 border-lightblue bg-lightgray-opacity-1 flex flex-col gap-2 rounded-md p-6 "
        style={{ boxShadow: ".05rem .05rem .3rem lightblue" }}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <h2 className="text-xl font-bold">Let's Connect</h2>
        <div className="email_phone   py-2 ">
          <div className="email_section    flex items-center  gap-3">
            <svg
              className="h-[1.5rem] w-[1.5rem] mt-[0.5rem]"
              // width="200"
              // height="200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
              />
            </svg>
            <Link
              href="mailto:nafizmahmud102@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-wide hover:text-lightblue font-semibold text-lg underline  w-fit"
            >
              nafizmahmud102@gmail.com
            </Link>
          </div>
          <div className="phone_section   flex items-center  gap-3">
            <svg
              className="h-[1.7rem] w-[1.7rem] mt-[0.5rem]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
              ></path>
              <path
                fill="#fff"
                d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Link
              href="https://wa.me/8801703876066"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-wide hover:text-lightblue font-semibold text-lg underline w-fit "
            >
              (+88) 017-03876066
            </Link>
          </div>
        </div>
        <p className="text-lightgray  tracking-wide text-lg font-semibold">
          Find me on these platforms
        </p>
        <div className="links_section  flex  gap-14">
          <div className="social_media flex flex-col gap-4">
            <p className="text-lightgray tracking-wide text-lg">Social Media</p>
            <div className="social_links animate-pulse hover:animate-none flex gap-4">
              <Link
                href="https://x.com/nafiz_mahmud_99"
                target="_blank"
                className="bg-lightgray-opacity-2 hover:text-lightblue border-1 border-lightblue rounded-md p-2 text-3xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                  id="Twitter-X--Streamline-Bootstrap"
                  height="1em"
                  width="1em"
                >
                  <path
                    d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                    strokeWidth="1"
                  ></path>
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/in/nafiz-mahmud-603063226/"
                target="_blank"
                className="bg-lightgray-opacity-2 hover:text-lightblue  border-1 border-lightblue rounded-md p-2 text-3xl"
              >
                <svg
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  style={{ overflow: "visible", color: "currentcolor" }}
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="freelance_sites flex flex-col gap-4 ">
            <p className="text-lightgray tracking-wide   text-lg ">
              Freelance Sites
            </p>
            <div className="freelance_links animate-pulse hover:animate-none flex gap-4">
              <Link
                href="https://www.upwork.com/freelancers/~01a9ab19cba2c9d6c6"
                target="_blank"
                className="bg-lightgray-opacity-2 hover:text-lightblue border-1 border-lightblue rounded-md p-2 text-3xl"
              >
                <svg
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  style={{ overflow: "visible", color: "currentcolor" }}
                >
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.fiverr.com/s/ZmpakeQ"
                target="_blank"
                className="bg-lightgray-opacity-2 hover:text-lightblue border-1 border-lightblue rounded-md p-2 text-3xl"
              >
                <svg
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  style={{ overflow: "visible", color: "currentcolor" }}
                >
                  <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="num_counts  flex-1 mt-12 lg:mt-0 "
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        <div className="cards  flex items-center justify-between">
          <div className="card">
            <h2 className="text-4xl text-lightblue font-bold">20+</h2>
            <p className="text-lg xl:text-xl text-lightgray font-medium">
              Projects Completed
            </p>
          </div>
          <div className="card">
            <h2 className="text-4xl text-lightblue font-bold">3+</h2>
            <p className="text-lg xl:text-xl text-lightgray font-medium">
              Years Experience
            </p>
          </div>
          <div className="card">
            <h2 className="text-4xl text-lightblue font-bold">15+</h2>
            <p className="text-lg xl:text-xl text-lightgray font-medium">
              Happy Clients
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
