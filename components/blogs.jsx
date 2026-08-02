import { client } from "@/sanity_client/client";
import Image from "next/image";
// import { PortableText } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import Link from "next/link";

// Query to fetch posts from Sanity
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug,body, publishedAt,mainImage}`;

// Revalidate after 1 day
const options = { next: { revalidate: 60 * 60 * 24 } };

export default async function BlogsComp({ layout, maxBlog }) {
  // Fetched posts from Sanity using the defined query and options
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  // Get the projectId and dataset from the Sanity client configuration
  const { projectId, dataset } = client.config();

  // Function to generate image URLs for Sanity images
  const urlFor = (source) =>
    projectId && dataset
      ? createImageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  // Get a plain-text preview (first x chars) from Portable Text body
  const getPreview = (body) => {
    if (!Array.isArray(body)) return "";
    const fullText = body
      .map((block) =>
        (block.children || [])
          .map((child) => (child && child.text) || "")
          .join(""),
      )
      .join("\n");
    return fullText.slice(0, 120);
  };

  // Function to calculate relative time from the published date
  const getRelativeTime = (dateString) => {
    const publishedDate = new Date(dateString);
    const now = new Date();

    if (Number.isNaN(publishedDate.getTime())) return "Recently published";

    const diffInSeconds = Math.floor((now - publishedDate) / 1000);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    if (diffInSeconds < minute) return "Just now";
    if (diffInSeconds < hour)
      return `${Math.floor(diffInSeconds / minute)} min ago`;
    if (diffInSeconds < day)
      return `${Math.floor(diffInSeconds / hour)} hr ago`;
    if (diffInSeconds < month)
      return `${Math.floor(diffInSeconds / day)} day ago`;
    if (diffInSeconds < year)
      return `${Math.floor(diffInSeconds / month)} month ago`;
    return `${Math.floor(diffInSeconds / year)} year ago`;
  };

  return (
    <main className="container my-12">
      <ul
        //   className="posts my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        className={`posts my-8 ${layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col"} gap-4`}
      >
        {maxBlog
          ? posts.slice(0, maxBlog).map((post) => (
              <li
                className="post  bg-[#f6eee3] shadow-md shadow-gray-300 hover:shadow-lg transition-shadow duration-300 rounded-md overflow-hidden"
                key={post._id}
              >
                {post.mainImage && (
                  <Link href={`/blogs/${post.slug.current}`}>
                    <div className="img_container  overflow-hidden  w-full h-48  ">
                      <img
                        className="object-cover object-center   hover:opacity-70 hover:scale-110 transition-transform duration-300"
                        src={
                          post.mainImage ? urlFor(post.mainImage)?.url() : nulll
                        }
                        alt={post.slug.current}
                      />
                    </div>
                  </Link>
                )}
                <div className="post_info p-4">
                  <Link href={`/blogs/${post.slug.current}`}>
                    <h2 className="text-2xl  mt-2 font-bold hover:text-blue-300 transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-2 text-gray-600">
                    Published: {getRelativeTime(post.publishedAt)}
                  </p>
                  <Link href="/">
                    <p className=" text-md mb-2 font-semibold">
                      Author :{" "}
                      <span className="text-blue-400 hover:underline">
                        Nafiz M.
                      </span>
                    </p>
                  </Link>
                  <article className="prose max-w-none ">
                    {Array.isArray(post.body) && (
                      <p className="text-gray-700">
                        {getPreview(post.body)}{" "}
                        <Link
                          className="text-blue-400 cursor-pointer hover:underline"
                          href={`/blogs/${post.slug.current}`}
                        >
                          <span>see more...</span>
                        </Link>
                      </p>
                    )}
                  </article>
                </div>
              </li>
            ))
          : posts.map((post) => (
              <li
                className="post  bg-[#f6eee3] shadow-md shadow-gray-300 hover:shadow-lg transition-shadow duration-300 rounded-md overflow-hidden"
                key={post._id}
              >
                {post.mainImage && (
                  <Link href={`/blogs/${post.slug.current}`}>
                    <div className="img_container overflow-hidden w-full h-48  ">
                      <img
                        className="object-cover object-center hover:opacity-70 hover:scale-110 transition-transform duration-300"
                        src={
                          post.mainImage ? urlFor(post.mainImage)?.url() : nulll
                        }
                        alt={post.slug.current}
                      />
                    </div>
                  </Link>
                )}
                <div className="post_info p-4">
                  <Link href={`/blogs/${post.slug.current}`}>
                    <h2 className="text-2xl  mt-2 font-bold hover:text-blue-300 transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-2 text-gray-600">
                    Published: {getRelativeTime(post.publishedAt)}
                  </p>
                  <Link href="/">
                    <p className=" text-md mb-2 font-semibold">
                      Author :{" "}
                      <span className="text-blue-400 hover:underline">
                        Nafiz M.
                      </span>
                    </p>
                  </Link>
                  <article className="prose max-w-none ">
                    {Array.isArray(post.body) && (
                      <p className="text-gray-700">
                        {getPreview(post.body)}{" "}
                        <Link
                          className="text-blue-400 cursor-pointer hover:underline"
                          href={`/blogs/${post.slug.current}`}
                        >
                          <span>see more...</span>
                        </Link>
                      </p>
                    )}
                  </article>
                </div>
              </li>
            ))}
      </ul>
    </main>
  );
}
