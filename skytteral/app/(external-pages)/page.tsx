import Header from "@/components/LandingPage/Header";
import { HeroSection } from "@/components/LandingPage/hero-3";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
    </div>
  );
}
