import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import LoadAnimate from "./components/LoadAnimate";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
      <div className="conatiner mt-24 mx-auto px-12 py-4">
        
        <HeroSection/>
        <AchievementsSection/>
        <AboutSection/>
        <LoadAnimate/>
      </div> 
    </main>
  );
}
