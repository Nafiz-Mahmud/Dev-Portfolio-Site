import Link from "next/link";
import BlogsComp from "@/components/blogs";
import BlogComp from "@/components/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${blogTitle} | The Digital Blueprint Blogs`,
    description: `Read ${blogTitle}, a post from The Digital Blueprint Which Explains Website Problems & Questions`,
    keywords: [
      "website maintenance",
      "website troubleshooting",
      "website management",
      "website redesign",
      "small business website",
      "website optimization",
      blogTitle,
    ],
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: `${blogTitle} | The Digital Blueprint Blogs`,
      description: `Read ${blogTitle}, a post from The Digital Blueprint Which Explains Website Problems & Questions`,
      url: `/blogs/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blogTitle} | The Digital Blueprint Blogs`,
      description: `Read ${blogTitle}, a post from The Digital Blueprint Which Explains Website Problems & Questions`,
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;

  return (
    <div className="blog_page  max-w-[1400px] w-[96%] mx-auto">
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
      <Link
        href="/blogs"
        className="text-start text-blue-400 hover:underline mt-4"
      >
        <p>{">> "} Go Back to Blogs</p>
      </Link>
      <div className="blog_and_sidebar mt-8 mb-12 flex gap-6">
        <div className="blog_side flex-2">
          <BlogComp slug={slug} />
        </div>
        <div className="sidebar hidden h-fit bg-gray-800 p-4 rounded-xl flex-1 lg:block">
          <p className="text-white text-xl">Recent Blogs</p>
          <BlogsComp layout="flex" maxBlog={3} />
        </div>
      </div>

      <div className="bottom_blogs mt-24">
        <p className="text-white font-semibold text-2xl">More Blogs</p>
        <BlogsComp layout="grid" sort="random" />
      </div>
      <p className="text-center bg-blue-950 p-3 rounded-lg text-xl my-6 text-white font-semibold">
        Need a website?{" "}
        <Link href="/">
          <span className="text-blue-400 hover:underline">Click here!</span>
        </Link>
      </p>
    </div>
  );
}
