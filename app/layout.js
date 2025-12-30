import { Geist, Tomorrow } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/nav.jsx";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nafiz M. - Freelance Web Developer | Next.js & React | Hire Me",
  description:
    "Freelance web developer specializing in Next.js and React. I help businesses and startups build fast, SEO-optimized websites and scalable web applications.",

  keywords: [
    "freelance web developer, Next.js developer, React developer, frontend developer, website development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="E74slFEf9_H4tspaJzKGy5XvMHwrCsKTtNj5tAtr5CI"
        />
        {/* Structured Data */}
        <StructuredData />
      </head>
      <body className={tomorrow.className}>
        <Navbar />
        <hr className="bg-lightblue h-[0.1rem]" />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
