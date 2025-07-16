import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceTimeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <SkillsSection/>
      <ExperienceTimeline/>
      <Features/>
      <CallToAction/>
      <FooterSection/>
    </>
  );
}
