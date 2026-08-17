import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <div className="not-found-page text-white flex flex-col justify-center items-center  min-h-[100vh] text-center">
        <h2 className="text-md lg:text-4xl font-bold mb-4">
          404 - Page Not Found!
        </h2>
        <Link href="/blogs">
          <span className="text-blue-400 hover:underline">
            Go back to Blogs
          </span>
        </Link>
      </div>
    </>
  );
}
