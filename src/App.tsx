import { useEffect, useRef, useState } from "react";
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
import { FaAngleDoubleUp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Mail } from "lucide-react";
const App = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 640);
  const [selected, setSelected] = useState<SidebarSection>('about');
  const [animatedItems, setAnimatedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOutOfView, setIsOutOfView] = useState(false);
  const messageHomeRef = useRef(null)
  useEffect(() => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedItems((prev) => [...prev, item.id]);
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


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOutOfView = (status: boolean) => {
    setIsOutOfView(status);
  };
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} selected={selected} setselectfxn={(option) => setSelected(option as SidebarSection)} />

      <div className="h-screen overflow-y-scroll w-full">
        <div className="relative  sm:bg-[#121218] bg-[#0C0A09] text-[#e0e0e0] w-full flex justify-center">
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
          <div className="max-w-[700px] flex flex-col z-10 font-mono">
            <div className={`col-span-3 fixed text-center grid-item flex  z-50 w-full justify-center bottom-0`}>
              {
                isOutOfView && (
                  <div className="items-center bg-black/50 z-50 border-t border-[#2d2d3a] w-full flex justify-evenly text-[#e0e0e0] p-2 shadow-md backdrop-blur-sm">
                    {isOutOfView && socialLinks.map(({ href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:scale-125">
                        {label === "GitHub" && <FaGithub className="size-6 m-1" title={label} />}
                        {label === "LinkedIn" && <FaLinkedin className="size-6 m-1" title={label} />}
                        {label === "Twitter" && <FaTwitter className="size-6 m-1" title={label} />}
                        {label === "Resume" && <HiDownload className="size-6 m-1" title={label} />}
                      </a>
                    ))}
                    <Mail
                      onClick={() => window.open('mailto:vinitnagar56@gmail.com')}
                      className="size-6  m-1" />
                    <div className='text-gray-400'
                      onClick={() => {
                        const top = document.getElementById('top');
                        top?.scrollIntoView({ behavior: 'smooth' })
                      }}>
                      <FaAngleDoubleUp className="size-6 m-1" /></div>
                  </div>
                )
              }

            </div>
            {
              !isMobile &&
              <Navbar
                isopen={isOpen}
                setselectfxn={(option) => setSelected(option as SidebarSection)}
                setisopen={setIsOpen}
              />
            }
            <div className="grid grid-cols-3 auto-rows-[minmax(90px,auto)] sm:gap-1 flex-1" id="top">
              <FeaturedCard
                animatedItems={animatedItems}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
              {
                isMobile ?
                  <Mobile onOutOfView={handleOutOfView} />
                  : <AboutPrev
                    setselectfxn={setSelected}
                    setisopen={setIsOpen}
                    animatedItems={animatedItems}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
              }

              {/* <QuotePrev
                animatedItems={animatedItems} 
                handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} 
              /> */}
              {!isMobile && (
                <SkillMeter
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
              {!isMobile && (
                <>
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
                </>
              )}

              {
                isMobile && (
                  <>
                    <div id="proj" className="col-span-3  order-6  mt-5 grid-item transition-all duration-300">
                      <ProjectCard showHead={false} />
                    </div>

                    <div className="col-span-3 order-6  mt-5 grid-item transition-all duration-300"
                    id="exp"
                    >
                      <Exp showHead={false} />
                    </div>

                    <div id="edu" className="col-span-3 order-6 text-center mt-5 grid-item transition-all duration-300">
                      <Education showHead={false} />
                    </div>

                    <div
                    
                      ref={messageHomeRef}
                      className="col-span-3 message-home-container order-6 text-center mt-5 grid-item transition-all duration-300"
                    >
                      <MessageHome />
                    </div>
                  </>
                )
              }
              {
                !isMobile &&
                <div className="col-span-3 order-7 flex justify-center mt-5 grid-item transition-all duration-300">
                  <GitHubCalendar
                    hideColorLegend
                    blockSize={9.5}
                    errorMessage="error fetching github calendar data"
                    username="vinitngr"
                    style={{ overflow: "hidden" }}
                  />
                </div>
              }

            </div>
            <div className="w-full text-center mb-20 text-xs mt-10 ">all rights reserved 😁
              <span className="text-yellow-700 font-extralight"> | nagarvinit56@gmail.com </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;