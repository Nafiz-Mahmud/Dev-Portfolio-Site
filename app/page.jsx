import HeroSection from "@/components/hero";
import SocialsSection from "@/components/socials";
import SkillsExpertiseSection from "@/components/skills_expertise";
import ProjectsSection from "@/components/projects";
import TestimonialSection from "@/components/testimonials";
import FAQSection from "@/components/faq";
import ContactSection from "@/components/contact";
// test //
import ViewportSize from "@/components/viewport";

export default function Home() {
  return (
    <div className="homepage  max-w-[1400px] w-[96%] mx-auto">
      {/* <ViewportSize /> */}
      <HeroSection />
      <SocialsSection />
      <SkillsExpertiseSection />
      <ProjectsSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
