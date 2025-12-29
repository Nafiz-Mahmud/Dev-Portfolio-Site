import Image from "next/image";
import Link from "next/link";
export default function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white border-t-2 border-lightgray-opacity-2  pt-10 mx-auto w-[96%] max-w-[1400px]">
      <div className="footer_top_section flex flex-col md:flex-row items-start gap-12  justify-between mb-16">
        <div className="footer_left flex-2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="img_container">
              <Image src="/devlogo.png" alt="logo" width={40} height={40} />
            </div>
            <h2 className="text-white text-2xl font-semibold">Dev Portfolio</h2>
          </div>
          <p className="text-lightgray tracking-wide">
            Creating exceptional digital experiences through clean code and
            modern design. Let's build something amazing together.
          </p>
        </div>
        <div className="footer_middle flex-1 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <div className="quick_links flex flex-col gap-4 text-lightgray">
            <Link href="/" className="hover:text-lightblue  w-fit underline">
              Home
            </Link>
            <Link
              href="#skills_expertise_section"
              className="hover:text-lightblue w-fit underline"
            >
              Skills
            </Link>
            <Link
              href="#projects_section"
              className="hover:text-lightblue w-fit underline"
            >
              Projects
            </Link>
            <Link
              href="#faq_section"
              className="hover:text-lightblue w-fit underline"
            >
              FAQs
            </Link>
            <Link
              href="#contact_section"
              className="hover:text-lightblue w-fit underline"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="footer_right flex-1 flex flex-col gap-8">
          <h2 className="text-xl font-semibold">Connect</h2>
          <div className="connect_links flex gap-8 animate-pulse hover:animate-none">
            <Link
              href="mailto:nafizmahmud102@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lightgray-opacity-2 border-1 hover:text-lightblue border-lightblue rounded-md p-2 text-3xl"
            >
              <svg
                fill="none"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                style={{ overflow: "visible", color: "currentcolor" }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.01 5.838a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v11.324a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11c0-.048.003-.094.01-.14v-.184ZM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 0 1-4.242 0L5 8.06Zm1.572-1.256h10.856l-4.72 4.72a1 1 0 0 1-1.415 0l-4.72-4.72Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://x.com/nafiz_mahmud_99"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
              className="bg-lightgray-opacity-2 hover:text-lightblue border-1 border-lightblue rounded-md p-2 text-3xl"
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
      </div>

      <p className="text-sm sm:text-md lg:text-xl  py-10 mb-6 rounded-lg bg-lightgray-opacity-1 text-lightgray font-semibold mt-10 text-center">
        &copy; {year} Nafiz Mahmud. All rights reserved.
      </p>
    </footer>
  );
}
