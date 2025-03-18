import { socialLinks } from '../data/social'
import { AboutPrevProps } from '../utils/type'


function SocialCard({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  return (
    <div
      id="card5"
      className={`grid-item  col-span-3 sm:col-span-2 flex flex-col social-bar justify-between bg-[#1a1a22] border border-[#2d2d3a] rounded-md p-4 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${animatedItems.includes('card5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold tracking-tight">Socials</h3>
        <h3 className="text-xs text-[#a0a0a0]/50 mb-2 tracking-tight">Connect with me on my socials...</h3>
      </div>

      <div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] sm:grid-cols-4 gap-2">
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="no-underline text-[#e0e0e0]">
              <div className="group relative h-24 flex flex-col items-start bg-pattern justify-center border-2 border-[#2d2d3a]/80 hover:border-amber-400 rounded-md p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <Icon className="absolute top-2 left-2 w-8 h-8 group-hover:text-amber-400 text-[#a0a0a0]" />
                <span className="absolute bottom-2 left-2 group-hover:text-amber-400">{label}</span>
                <span className="absolute bottom-2 right-2 text-base transition-transform duration-200 ease-in-out group-hover:-rotate-45 group-hover:text-amber-400">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>


      </div>
    </div>
  )
}

export default SocialCard