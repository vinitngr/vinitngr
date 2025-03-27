import { ArrowRight } from "lucide-react"
import { AboutPrevProps } from "../utils/type"
function AboutPrev({ animatedItems, handleMouseEnter, handleMouseLeave, setisopen, setselectfxn }: AboutPrevProps) {
  return (
    <div
      id="card2"
      className={`grid-item col-span-3 h-[70vh] sm:h-auto -order-1 sm:-order-0 sm:col-span-1 row-span-2 
      text-white border border-[#2d2d3a] rounded-md p-4 transition-all duration-300 
      relative overflow-hidden shadow-md cursor-pointer flex flex-col justify-between 
      bg-cover bg-left sm:bg-center
      ${animatedItems.includes('card2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={window.innerWidth < 640 ? "./vinit.png" : "./vinit.png"} className=" sm:rotate-y-0 w-full h-full brightness-50 opacity-60 absolute top-0 object-cover -z-10 left-0" alt="Vinit Nagar" />
      <div>
        <div className="backdrop:brightness-200">
          <h3 className="text-7xl sm:text-3xl backdrop:backdrop-blur-3xl text-white font-semibold mb-1 tracking-tight">Vinit Nagar</h3>
          <p className="text-sm text-[#a0a0a0]/80 leading-relaxed mb-2">I work with web & ai...</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-2xl sm:text-text-lg mr-2">1+ yrs</span>
          <span className="text-xs text-[#a0a0a0]">of Learning</span>
        </div>
      </div>
      <button
        onClick={() => {
          if (setisopen && setselectfxn) {
            setisopen(true);
            setselectfxn('about');
          }
        }}
        className="group text-sm text-yellow-700 no-underline flex items-center font-medium mt-auto">
        <span className="group-hover:text-yellow-700">View Details</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:text-yellow-700 transition-transform duration-500 ease-in-out group-hover:-rotate-45" />
      </button>


    </div>
  )
}

export default AboutPrev