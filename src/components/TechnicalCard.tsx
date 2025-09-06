import { AboutPrevProps } from '../utils/type'
import icons from '../data/icons';
import { skills } from '../data/skills';

import { useIsSmallScreen } from '../hooks/smallScreen';
function TechnicalCard({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      id="card4"
      // style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg')", backgroundSize: 'cover' }}
      className={` grid-item order-3 border-x-2 border-white/10 mx-3 sm:mx-0 col-span-3 sm:mt-0  sm:col-span-2 overflow-y-scroll social-bar bg-pattern flex flex-col justify-between sm:bg-[#1a1a22] sm:border sm:border-[#2d2d3a] sm:px-4 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${animatedItems.includes('card4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className=" text-center sm:pt-4 sm:text-left sm:text-lg mt-4 sm:m-0 sm:font-semibold tracking-tight w-full py-2 sm:border-y-0 border-y-2 border-white/10 relative">
        <div className="absolute sm:hidden inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>

        Technical Skills
      </h3>
      <div className="flex flex-wrap p-4 sm:p-0 sm:pb-4">
        {
          skills.slice(0, isSmallScreen ? undefined : 19).map(skill => (
            <a
              href={`https://www.google.com/search?q=${skill}`}
              target="_blank"
              key={skill}
              className="inline-block hover:bg-[#2a2a36]  sm:bg-[#191921] bg-[#2a2a36]/20 text-[#a0a0a0] text-xs py-1 px-1.5 border border-white/10 mb-1 mr-1"
            >
              <span className="flex items-center gap-1">
                {skill.toLowerCase() == "zustand" ? <img  src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Zustand" className="w-3 h-3 grayscale" /> : null}
                {icons[skill.toLowerCase()]} {skill}
              </span>
            </a>
          ))

        }
        <a
          href={`#`}
          className="inline-block hover:bg-[#2a2a36]  sm:bg-[#191921] bg-[#2a2a36]/20 text-[#a0a0a0] text-xs py-1 px-1.5 border border-white/10 mb-1 mr-1"
        >
          <span className="flex items-center gap-1">
            more++
          </span>
        </a>
      </div>
    </div>
  )
}

export default TechnicalCard