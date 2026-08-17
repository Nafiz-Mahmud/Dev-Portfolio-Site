import BlogsComp from "@/components/blogs";
import Link from "next/link";

export const metadata = {
  title: "The Digital Blueprint | Website Problems & Questions, Explained",
  description:
    "Stuck on a website issue? Digital Blueprint breaks down common website problems, costs, and questions in plain English, so you can fix it or know who to call.",
  keywords: [
    "website maintenance",
    "website troubleshooting",
    "website management",
    "website redesign",
    "small business website",
    "website optimization",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "The Digital Blueprint | Website Problems & Questions, Explained",
    description:
      "Stuck on a website issue? Digital Blueprint breaks down common website problems, costs, and questions in plain English, so you can fix it or know who to call.",
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
        Common Website Related Questions and Problems Fixed & Explained
      </p>
      <BlogsComp layout="grid" />
      <p className="text-center bg-blue-950 p-3 rounded-lg text-xl mt-2 mb-8 text-white font-semibold">
        Need a website?{" "}
        <Link href="/">
          <span className="text-blue-400 hover:underline">Click here!</span>
        </Link>
      </p>
    </div>
  );
}
