import Navbar from "@/components/nav.jsx";
import FooterSection from "@/components/footer.jsx";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found-page text-white flex flex-col justify-center items-center  min-h-[80vh] text-center">
        <h2 className="text-md lg:text-4xl font-bold mb-4">
          404 - Page Not Found!
        </h2>
      </div>
      <FooterSection />
    </>
  );
}
