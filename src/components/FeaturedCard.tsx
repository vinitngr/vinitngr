import { ArrowRight } from "lucide-react";
import { AboutPrevProps } from "../utils/type";
import { useEffect, useState } from "react";
import GridPattern from "./svg/pattern";
import { Featured } from "../data/project.data";
import icons from "../data/icons";

function FeaturedCard({
  animatedItems,
  handleMouseEnter,
  handleMouseLeave,
}: AboutPrevProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % Featured.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="card1"
      className={`grid-item order-1 col-span-3 sm:col-span-2 min-h-64 row-span-2
        sm:bg-[#1a1a22] bg-[#cddc39] border border-[#2d2d3a]
        p-2 sm:p-0 py-6 sm:py-4 mx-3 sm:mx-0
        transition-all duration-300 relative overflow-hidden shadow-md
        flex flex-col justify-between
        ${
          animatedItems.includes("card4")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Featured[currentIndex]?.winner && (
            <div
              className="pointer-events-none absolute top-10  right-[-70px] rotate-45
        bg-yellow-500 text-black text-[11px] font-semibold
        px-16 py-1
        flex items-center justify-center
        leading-none
        z-30 shadow-md"
            >
              {Featured[currentIndex].winner}
            </div>
      //   <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 overflow">
      //     <div
      //       className="absolute top-1/2 left-1/2
      // -translate-x-1/2 -translate-y-1/2
      // rotate-45
      // bgYou get the limit though z-50 bg-yellow-500 text-black
      // whitespace-nowrap font-semibold text-[11px]
      // px-20 py-1
      // shadow-md"
      //     >
      //       {Featured[currentIndex].winner}
      //     </div>
      //   </div>
      )}

      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Featured.map(({ id, title, description, tags, link }) => (
          <div
            key={id}
            className="w-full flex-shrink-0 px-2 sm:px-5 rounded-md
              transition-all duration-300 relative overflow-hidden
              flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold mb-2 tracking-tight text-[#333333] sm:text-white">
              {title}
            </h3>

            <p className="text-sm text-[#333333] sm:text-[#b0b0b0] leading-relaxed mb-3 line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap mb-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="inline-block cursor-pointer
                    sm:bg-[#191921] bg-[#242601]/10
                    text-white sm:text-[#a0a0a0]
                    text-xs py-1 px-1.5 border border-white/10 mr-1 mb-1"
                >
                  <span className="flex items-center gap-1">
                    {icons[tag.toLowerCase()]} {tag}
                  </span>
                </button>
              ))}
            </div>

            <a
              href={link}
              className="group text-sm text-[#333333] sm:text-yellow-700
                no-underline flex items-center font-medium mt-auto"
            >
              <span className="group-hover:text-yellow-700">View Featured</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:text-yellow-700 transition-transform duration-500 ease-in-out group-hover:-rotate-45" />
            </a>

            <GridPattern />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {Featured.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`size-1 rounded-full transition-all duration-300
              hover:scale-[3] hover:bg-yellow-600
              ${
                currentIndex === index
                  ? "sm:bg-yellow-700 bg-[#b1b908] scale-[2]"
                  : "bg-white"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCard;
