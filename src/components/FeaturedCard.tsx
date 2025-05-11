import { ArrowRight } from 'lucide-react';
import { AboutPrevProps } from '../utils/type';
import { useEffect, useState } from 'react';
import GridPattern from './svg/pattern';
import { Featured } from '../data/project';

function FeaturedCard({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % Featured.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="card1"
      className={`grid-item order-1 col-span-3 sm:col-span-2 min-h-64 row-span-2 sm:bg-[#1a1a22] bg-[#cddc39] border border-[#2d2d3a] rounded-md p-2 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer flex flex-col justify-between
         ${animatedItems.includes('card4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex transition-transform duration-500 ease-in-out h-[100%]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Featured.map(({ id, title, description, tags, link }) => (
          <div key={id} className="w-full flex-shrink-0 px-2 sm:px-5 rounded-md transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between">
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 tracking-tight text-[#333333] sm:text-white">{title}</h3>
            
            {/* Description */}
            <p className="text-sm text-[#333333] sm:text-[#b0b0b0] leading-relaxed mb-3 line-clamp-3">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap mb-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="inline-block bg-[#444444] text-white text-xs py-1 px-2 rounded mr-1 mb-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Link to view featured */}
            <a
              href={link}
              className="group text-sm text-[#333333]  sm:text-yellow-700 no-underline flex items-center font-medium mt-auto"
            >
              <span className="group-hover:text-yellow-700 font-bold">View Featured</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:text-yellow-700 transition-transform duration-500 ease-in-out group-hover:-rotate-45" />
            </a>
            <GridPattern />
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Featured.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`size-1 rounded-full transition-all duration-300 hover:scale-[3] hover:bg-yellow-600 ${currentIndex === index ? 'bg-yellow-600 scale-[2]' : 'bg-[#2a2a36]'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCard;
