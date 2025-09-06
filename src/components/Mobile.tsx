import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';

import { socialLinks } from '../data/social';
import UnderlineHighlight from './UnderLineHighlight';
import ImagePreview from './sections/ImagePreview';

function Mobile({ onOutOfView }: { onOutOfView?: (isOutOfView: boolean) => void }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const socialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (onOutOfView) {
          onOutOfView(!entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );

    const currentRef = socialRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [onOutOfView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (label: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top - 40,
      left: rect.left + rect.width / 2
    });
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="text-white bg-[#0C0A09] sm:bg-transparent col-span-3 flex flex-col rounded-md shadow-md">
      {hoveredItem && (
        <div
          className="fixed bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-lg z-50 transition-opacity duration-300 pointer-events-none"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="relative">
            {hoveredItem}
            <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
          </div>
        </div>
      )}

      <div className="flex justify-between relative items-center py-5  px-3 border-2 mx-3 border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>

        <span className="sm:text-gray-500 text-[#737373]">{time}</span>
        <div className="flex gap-3">
          <button className="text-white flex cursor-pointer items-center">
            <FaStar
              title="Star on GitHub"
              onClick={() => window.open('https://github.com/vinitngr', '_blank')}
            />
          </button>
        </div>
      </div>


      <div className='flex items-center  flex-col border-white/10 border-2 border-y-0   mx-3'>
        <div className="flex justify-start w-full items-stretch">
          <div className="relative border-r-2 border-white/10 flex items-center">
            <span className="absolute text-green-400 -top-1 right-1 animate-pulse">•</span>
            <ImagePreview
              src="./vinit.png"
              alt="Vinit Nagar"
              className="rounded-full border-2 border-white/10 p-[2px] aspect-square max-h-[120px] object-cover"
            />
          </div>


          <div className="flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-[1px] flex-1 overflow-clip">
              <div className="px-2 flex items-center justify-center bg-white/5 cursor-pointer hover:bg-white/1 text-white/20"
                onClick={() => {
                  document.getElementById('edu')?.scrollIntoView({ behavior: 'smooth' })
                }}

              >Edu.</div>
              <div className="px-2 flex items-center justify-center bg-white/5 cursor-pointer hover:bg-white/1 text-white/20"
                onClick={() => {
                  document.getElementById('exp')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >Exp.</div>
              <div className="relative px-2 flex items-center justify-center">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>
              </div>
              <div className="px-2 flex items-center justify-center bg-white/5 cursor-pointer hover:bg-white/1 text-white/20"
                onClick={() => {
                  document.getElementById('proj')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >Proj.</div>
            </div>

            <div className="flex flex-col items-start w-full border-t-2 border-white/10">
              <h2 className="text-2xl font-semibold px-3 py-1 border-b-2 border-white/10 w-full">Vinit Nagar</h2>
              <div className="relative w-full overflow-hidden py-1 bg-white/10 text-white/40 group">
                <div className="flex w-[200%] cursor-pointer transition-transform px-3  duration-500 ease-in-out group-hover:-translate-x-1/2">
                  <p className="w-1/2 text-sm sm:text-white/30">Software developer</p>
                  <p className="w-1/2 text-sm sm:text-white/30 px-3 line-clamp-1">Open-source contributor | ai engineer</p>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="flex gap-4 relative items-center  border-t-2 border-b-2 py-1 border-white/10 w-full justify-evenly" ref={socialRef}>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>

          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => handleMouseEnter(label, e)}
              onMouseLeave={handleMouseLeave}
            >
              {label === "GitHub" && <FaGithub className="size-6 m-1" />}
              {label === "LinkedIn" && <FaLinkedin className="size-6 m-1" />}
              {label === "Twitter" && <FaTwitter className="size-6 m-1" />}
              {label === "Resume" && <HiDownload className="size-6 m-1" />}
            </a>
          ))}
          <HiMail
            onClick={() => window.open('mailto:vinitnagar56@gmail.com')}
            className="size-6 m-1 cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter('Email me', e)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      <div className="relative mx-3 border-l-2 border-r-2 border-b-2 border-white/10">
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-2xl font-extralight text-white/50">
          +
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-2xl font-extralight text-white/50">
          +
        </div>

        <div className="px-3 py-3">
          <h3 className="mb-1">About Me.</h3>
          <p className="sm:text-gray-500 text-[#737373]">
            Undergraduate developer with 1.5+ years of experience, crafting web & AI
            products using modern stacks like TypeScript,{" "}
            <UnderlineHighlight>Next.js</UnderlineHighlight>. Skilled in WebRTC,{" "}
            <UnderlineHighlight>Node.js</UnderlineHighlight>, agentic AI, and
            audio-video tech, focused on building real-time, innovative solutions.
          </p>
        </div>
      </div>


      <div className='px-3 py-3 mx-3 border-l-2 border-r-2 border-b-2 border-white/10'>
        <div className='flex justify-start items-center'>
          <h3>hire Me.</h3>
          <button className="text-green-400 h-fit text-[10px] w-fit border m-3 border-green-500 px-2 py-0.5 rounded-full inline-block cursor-pointer">
            <span className='mr-1 animate-pulse '>•</span>
            Available
          </button>
        </div>
        <p className="sm:text-gray-500 text-[#737373]">
          Available for internships, freelance, or part-time work. I'm passionate, fast-learning, and ready to ship.
        </p>
      </div>

      <div className="py-3 px-3 mx-3 border-l-2 relative border-r-2 border-b-2 border-white/10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>

        <h3 className=" mb-1">Currently Into.</h3>
        <p className="sm:text-gray-500 text-[#737373]">
          <span className='line-through'>Rust</span> <UnderlineHighlight>Go</UnderlineHighlight>{" "}, @AgenticAi , and @DSA
        </p>
      </div>
    </div>
  );
}

export default Mobile;
