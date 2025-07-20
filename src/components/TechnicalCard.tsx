import { AboutPrevProps } from '../utils/type'
import icons from '../data/icons';
import { skills } from '../data/skills';


function TechnicalCard({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {

  
  return (
    <div
      id="card4"
      // style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg')", backgroundSize: 'cover' }}
      className={` grid-item order-3 col-span-3 sm:mt-0 mt-1 sm:col-span-2 overflow-y-scroll social-bar bg-pattern flex flex-col justify-between bg-[#1a1a22] sm:border border-[#2d2d3a] rounded-md p-2 sm:px-4p transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${animatedItems.includes('card4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className=" text-center sm:text-left sm:text-lg m-4 sm:m-0 sm:font-semibold tracking-tight">Technical Skills</h3>
      <div className="flex flex-wrap mt-2">
        {
          skills.map(skill => (
            <a
              href={`https://www.google.com/search?q=${skill}`}
              target="_blank"
              key={skill}
              className="inline-block hover:bg-[#2a2a36] bg-[#2a2a36]/80 text-[#a0a0a0] text-xs py-1 px-2 rounded mr-1 mb-1"
            >
              <span className="flex items-center gap-1">
                {icons[skill.toLowerCase()]} {skill}
              </span>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default TechnicalCard