import { skills } from '../data/skills'
import { AboutPrevProps } from '../utils/type'

function TechnicalCard({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  return (
    <div 
            id="card4"
            // style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg')", backgroundSize: 'cover' }}
            className={`grid-item col-span-3 sm:col-span-2 overflow-y-scroll social-bar bg-pattern flex flex-col justify-between bg-[#1a1a22] border border-[#2d2d3a] rounded-md p-4 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${
              animatedItems.includes('card4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-lg font-semibold mb-2 tracking-tight">Technical Skills</h3>
            <div className="flex flex-wrap mt-2">
              {
                skills.map(skill => (
                  <a href={`https://www.google.com/search?q=${skill}`} target='_blank' key={skill} className="inline-block hover:bg-[#2a2a36] bg-[#2a2a36]/80 text-[#a0a0a0] text-xs py-1 px-2 rounded mr-1 mb-1">{skill}</a>
                ))
              }
            </div>
          </div>
  )
}

export default TechnicalCard