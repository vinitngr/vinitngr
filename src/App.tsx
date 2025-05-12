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
import Mobile from "./components/Mobile";
import ProjectCard from "./components/sections/Project";
import Exp from "./components/sections/Exp";
import MessageHome from "./components/MessageHome";
import Education from "./components/sections/Education";
import { socialLinks } from "./data/social";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Mail } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const useMobileDetection = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

const MobileLayout = () => {
  const [isOutOfView, setIsOutOfView] = useState(false);

  const handleOutOfView = (status: boolean) => {
    setIsOutOfView(status);
  };
  return (
    <>
      <Mobile onOutOfView={handleOutOfView}/>
      <div className="col-span-3 order-6 mt-5 grid-item transition-all duration-300">
        <ProjectCard showHead={false} />
      </div>
      <div className="col-span-3 order-6 mt-5 grid-item transition-all duration-300">
        <Exp showHead={false} />
      </div>
      <div className="col-span-3 order-6 text-center mt-5 grid-item transition-all duration-300">
        <Education showHead={false} />
      </div>
      <div className="col-span-3 order-6 text-center mt-5 grid-item transition-all duration-300">
        <MessageHome />
      </div>
      <div className="col-span-3 fixed text-center mt-5 grid-item flex  z-50 w-full justify-center">
        {
          isOutOfView && (
            <div className="flex  gap-4 mb-5 items-center fixed bottom-0 w-fit justify-center rounded-full  p-2 bg-[#121218]/60 backdrop-blur-sm">
              {isOutOfView && socialLinks.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {label === "GitHub" && <FaGithub className="size-6 m-1" title={label} />}
                  {label === "LinkedIn" && <FaLinkedin className="size-6 m-1" title={label} />}
                  {label === "Twitter" && <FaTwitter className="size-6 m-1" title={label} />}
                  {label === "Resume" && <HiDownload className="size-6 m-1" title={label} />}
                </a>
              ))}
              <Mail
                onClick={() => window.open('mailto:vinitnagar56@gmail.com')}
                className="size-5 m-1" />
            </div>
          )
        }

      </div>
    </>
  )
}

const DesktopLayout = ({
  setSelected,
  setisopen,
  animatedItems,
  handleMouseEnter,
  handleMouseLeave
}: {
  setSelected: (section: SidebarSection) => void;
  setisopen: (isOpen: boolean) => void;
  animatedItems: string[];
  handleMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
}) => (
  <>
    <AboutPrev
      setselectfxn={setSelected}
      setisopen={setisopen}
      animatedItems={animatedItems}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
    <SkillMeter
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
      setisopen={setisopen}
      animatedItems={animatedItems}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
    <div className="col-span-3 order-7 flex justify-center mt-5 grid-item transition-all duration-300">
      <GitHubCalendar
        hideColorLegend
        blockSize={9.5}
        errorMessage="error fetching github calendar data"
        username="vinitngr"
        style={{ overflow: "hidden" }}
      />
    </div>
  </>
);

const App = () => {
  const isMobile = useMobileDetection();
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
    if (!isMobile) {
      const currentItem = event.currentTarget;
      const siblings = Array.from(document.querySelectorAll('.grid-item')).filter(
        (item) => item !== currentItem
      );

      siblings.forEach((sibling) => {
        (sibling as HTMLElement).style.opacity = '0.9';
        (sibling as HTMLElement).style.transform = 'scale(0.99)';
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      const siblings = Array.from(document.querySelectorAll('.grid-item'));
      siblings.forEach((sibling) => {
        (sibling as HTMLElement).style.opacity = '1';
        (sibling as HTMLElement).style.transform = 'scale(1)';
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} selected={selected}
        setselectfxn={(option) => setSelected(option as SidebarSection)} />

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
            {!isMobile && (
              <Navbar
                isopen={isOpen}
                setselectfxn={(option) => setSelected(option as SidebarSection)}
                setisopen={setIsOpen}
              />
            )}
            <div className="grid grid-cols-3 auto-rows-[minmax(90px,auto)] gap-1 flex-1">
              <FeaturedCard
                animatedItems={animatedItems}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />

              {isMobile ? (
                <MobileLayout />
              ) : (
                <DesktopLayout
                  setSelected={setSelected}
                  setisopen={setIsOpen}
                  animatedItems={animatedItems}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              )}

              <TechnicalCard
                animatedItems={animatedItems}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="w-full text-center text-xs mt-10 ">
              all rights reserved 😁
              <span className="text-yellow-700 font-extralight"> | nagarvinit56@gmail.com </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;