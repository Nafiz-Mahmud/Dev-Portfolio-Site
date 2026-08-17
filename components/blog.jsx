import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity_client/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export default async function BlogComp({ slug }) {
  const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? createImageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  // Revalidate after 7 days

  const options = { next: { revalidate: 60 * 60 * 24 * 7 } };

  const post = await client.fetch(POST_QUERY, { slug }, options);
  if (!post) {
    notFound();
  }
  // const post = await client.fetch(POST_QUERY, { slug }, options);
  const postImageUrl = (await post.mainImage)
    ? urlFor(post.mainImage)?.url()
    : null;

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
    <div className="blog_page">
      <div className="blog p-4 rounded-xl  bg-[#f6eee3]">
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.slug.current}
            className="w-[100%] md:w-3/4 h-[20rem] object-cover object-center rounded-xl"
          />
        )}
        <h2 className="text-xl md:text-[1.8rem] font-bold mt-8 mb-6 ">
          {post.title}
        </h2>
        <p className="text-gray-500">
          Published: {getRelativeTime(post.publishedAt)}
        </p>
        <Link href="/">
          <p className=" text-gray-600 mt-2 font-semibold">
            Author :{" "}
            <span className="text-blue-400 hover:underline">Nafiz M.</span>
          </p>
        </Link>
        <div className="prose max-w-none mt-12">
          <article>
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </article>
        </div>
      </div>
    </div>
  );
}
