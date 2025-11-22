import HeroSection from "@/components/landing-page/hero-section";
import NavigationBar from "@/components/landing-page/navigation-bar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavigationBar />
      <HeroSection />
    </div>
  );
}
