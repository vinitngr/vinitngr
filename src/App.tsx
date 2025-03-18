import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import GridPattern from "./components/svg/pattern";
import Navbar from "./components/Navbar";
import FeaturedCard from "./components/FeaturedCard";
import AboutPrev from "./components/AboutCard";
import TechnicalCard from "./components/TechnicalCard";
import SocialCard from "./components/SocialCard";
import ConnectPrev from "./components/ConnectionCard";
import { SidebarSection } from "./utils/type";
import GitHubCalendar from 'react-github-calendar'
import SkillMeter from "./components/SkillMeter";
const App = () => {
  const [selected, setSelected] = useState<SidebarSection>('about');
  const [animatedItems, setAnimatedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const gridItems = document.querySelectorAll('.grid-item');
    const newAnimatedItems: string[] = [];

    gridItems.forEach((item, index) => {
      setTimeout(() => {
        newAnimatedItems.push(item.id);
        setAnimatedItems([...newAnimatedItems]);
      }, 100 * index);
    });
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentItem = event.currentTarget;
    const siblings = Array.from(document.querySelectorAll('.grid-item')).filter(
      (item) => item !== currentItem
    );
  
    siblings.forEach((sibling) => {
      (sibling as HTMLElement).style.opacity = '0.5';
      (sibling as HTMLElement).style.transform = 'scale(0.98)';
    });
  };
  
  const handleMouseLeave = () => {
    const siblings = Array.from(document.querySelectorAll('.grid-item'));
    siblings.forEach((sibling) => {
      (sibling as HTMLElement).style.opacity = '1';
      (sibling as HTMLElement).style.transform = 'scale(1)';
    });
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} selected={selected} setselectfxn={(option) => setSelected(option as SidebarSection)}  />

      <div className="h-screen overflow-y-scroll w-full">
        <div className="relative bg-[#121218] text-[#e0e0e0] w-full flex justify-center">
          <div
            className="absolute inset-0 blur-3xl opacity-20"
            style={{
              mixBlendMode: "multiply",
              backgroundImage: "url('https://framerusercontent.com/images/YrJYIRHy9c5ov2T7fo1dQoPlJk.png?scale-down-to=2048')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <GridPattern />
          </div>
          <div className="max-w-[700px] py-2 flex flex-col z-10 bg-[#121218]/30 mx-2 font-mono">
          <Navbar 
              isopen={isOpen} 
              setselectfxn={(option) => setSelected(option as SidebarSection)} 
              setisopen={setIsOpen} 
            />
            <div className="grid grid-cols-3 auto-rows-[minmax(90px,auto)] gap-1 flex-1">
              <FeaturedCard 
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              />
              <AboutPrev 
                setselectfxn={setSelected} 
                setisopen={setIsOpen} 
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              />
              {/* <QuotePrev
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              /> */}
              <SkillMeter
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              />
              <TechnicalCard
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              />
              <SocialCard
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              />
              <ConnectPrev
                setselectfxn={setSelected} 
                setisopen={setIsOpen} 
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              />
              <div className="col-span-3 flex justify-center mt-5 grid-item transition-all duration-300">
                <GitHubCalendar
                  hideColorLegend 
                  blockSize={9.5} 
                  errorMessage="error fetching github calendar data" 
                  username="vinitngr" 
                  style={{ overflow: "hidden" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
