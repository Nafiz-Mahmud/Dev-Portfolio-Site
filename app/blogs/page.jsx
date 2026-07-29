import BlogsComp from "@/components/blogs";
import Link from "next/link";

export const metadata = {
  title:
    "The Digital Blueprint Blogs | Architecting websites that build businesses.",
  description:
    "Explore insightful articles on web development, UI/UX, Next.js, React, and modern digital product design.",
  keywords: [
    "web development blog",
    "Next.js blog",
    "React tutorials",
    "UI/UX design",
    "frontend development",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title:
      "The Digital Blueprint Blogs| Architecting websites that build businesses.",
    description:
      "Explore insightful articles on web development, UI/UX, Next.js, React, and modern digital product design.",
    url: "/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <div className="blogs_page max-w-[1400px] w-[96%] mx-auto">
      <p className="text-center bg-blue-950 p-3 rounded-lg text-xl mt-2 text-white font-semibold">
        Need a website?{" "}
        <Link href="/">
          <span className="text-blue-400 hover:underline">Click here!</span>
        </Link>
      </p>
      <h2 className="text-center text-2xl text-white font-semibold mt-8">
        The <span className="text-orange-300">Digital Blueprint</span> Blogs
      </h2>
      <p className="text-center text-gray-300 text-lg mt-2">
        Architecting websites that build businesses.
      </p>
      <BlogsComp layout="grid" />
      <p className="text-center bg-blue-950 p-3 rounded-lg text-xl mt-2 mb-8 text-white font-semibold">
        Need a websiteeee?{" "}
        <Link href="/">
          <span className="text-blue-400 hover:underline">Click here!</span>
        </Link>
      </p>
    </div>
  );
}
