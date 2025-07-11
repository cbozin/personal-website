import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ExperienceTimeline from "@/components/timeline";
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ExperienceTimeline/>
      <Features/>
      <CallToAction/>
      <FooterSection/>
    </>
  );
}
