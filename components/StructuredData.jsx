// components/StructuredData.tsx
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nafiz Mahmud",
          jobTitle: "Freelance Full-Stack Web Developer",
          url: "https://nafizdev.appwrite.network",
          sameAs: [
            "https://x.com/nafiz_mahmud_99",
            "https://www.linkedin.com/in/nafiz-mahmud-603063226/",
          ],
        }),
      }}
    />
  );
}
