import { ArrowRight } from 'lucide-react'
import { AboutPrevProps } from '../utils/type'

function ConnectPrev({ animatedItems, handleMouseEnter, handleMouseLeave , setisopen , setselectfxn }: AboutPrevProps) {
  return (
    <div
      id="card6"
      className={`grid-item bg-[#1a1a22] col-span-3 sm:col-span-1 bg-pattern flex flex-col justify-between border border-[#2d2d3a] rounded-md p-4 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer ${animatedItems.includes('card6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 tracking-tight">Message me!</h3>
        <p className="text-xs  text-[#a0a0a0]/50 leading-relaxed">Have a project in mind?</p>
        <p className="text-xs  text-[#a0a0a0]/50 leading-relaxed">FreeLance project for me?</p>
      </div>
      <button 
      onClick={() => {
        if (setisopen && setselectfxn) {
          setisopen(true);
          setselectfxn('about');
            document.getElementById('emailForm')?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="group text-sm text-yellow-700 no-underline flex items-center font-medium mt-auto">
        <span className="group-hover:text-yellow-700">Message Me</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:text-yellow-700 transition-transform duration-500 ease-in-out group-hover:-rotate-45" />
      </button>
    </div>
  )
}

export default ConnectPrev