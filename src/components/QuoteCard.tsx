import { AboutPrevProps } from '../utils/type'

function QuotePrev({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  return (
    <div 
            id="card3"
            className={`grid-item bg-[#1a1a22] col-span-3 sm:col-span-1 flex flex-col justify-between border border-[#2d2d3a] rounded-md p-4 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${
              animatedItems.includes('card3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="italic text-[#a0a0a0] relative pl-6 text-sm">
              Good design is obvious. Great design is transparent.
              <span className="absolute left-0 top-0 text-xl text-[#2d2d3a] font-serif">"</span>
            </div>
            <p className="text-right text-xs text-[#a0a0a0]">― Vinit Nagar</p>
          </div>

  )
}

export default QuotePrev