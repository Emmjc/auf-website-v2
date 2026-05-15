import HeroSlider from "@/components/public/HeroSlider";
import HomeAboutSection from "@/components/public/HomeAboutSection";
import Footer from "@/components/public/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <HomeAboutSection />
      <Footer />
    </div>
  );
}
