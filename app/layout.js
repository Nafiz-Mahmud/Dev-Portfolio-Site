import { Geist, Tomorrow } from "next/font/google";
import "./globals.css";
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

{
  /* <body
className={`${geistSans.variable} antialiased`}
>
{children}
</body> */
}

export const metadata = {
  title: "Nafiz M. | Web Dev Portfolio",
  description:
    "Portfolio site of Nafiz M. - a web developer specializing in modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="E74slFEf9_H4tspaJzKGy5XvMHwrCsKTtNj5tAtr5CI"
        />
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
