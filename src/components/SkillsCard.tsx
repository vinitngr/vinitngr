import { skills } from '../data/skills'
import { AboutPrevProps } from '../utils/type'

function SkillsCard({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  return (
    <div 
            id="card4"
            className={`grid-item col-span-2 bg-[#1a1a22] border border-[#2d2d3a] rounded-md p-4 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${
              animatedItems.includes('card4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-lg font-semibold mb-2 tracking-tight">Technical Skills</h3>
            <div className="flex flex-wrap mt-2 truncate line-clamp-1">
              {
                skills.map(skill => (
                  <span key={skill} className="inline-block bg-[#2a2a36] text-[#a0a0a0] text-xs py-1 px-2 rounded mr-1 mb-1">{skill}</span>
                ))
              }
            </div>
          </div>
  )
}

export default SkillsCard