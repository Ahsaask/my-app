import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import LoadAnimate from "./components/LoadAnimate";
import Icon from "./components/Icon";


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

      <div className="flex mt-10 justify-center px-14 md:px-8 lg:px-16">
        <div className="max-w-screen-md w-full">
          <Icon className="w-full h-auto" />
        </div>
    </div>
    </main>
  );
}
