import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';

import { socialLinks } from '../data/social';

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

    if (socialRef.current) {
      observer.observe(socialRef.current);
    }

    return () => {
      if (socialRef.current) observer.unobserve(socialRef.current);
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
    <div className="text-white mb-3 col-span-3 flex flex-col items-center p-2 rounded-md shadow-md">
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

      <div className="flex justify-between items-center w-full mb-2">
        <span className="text-gray-400">{time}</span>
        <div className="flex gap-3">
          <button className="text-white flex cursor-pointer items-center">
            <FaStar 
              title="Star on GitHub"
              onClick={() => window.open('https://github.com/vinitngr', '_blank')}
            />
          </button>
        </div>
      </div>

      <button className="text-green-400 text-xs border border-green-500 px-2 py-0.5 rounded-full inline-block mb-2 cursor-pointer">
        <span className='mr-1 animate-pulse'>•</span>
        Available
      </button>

      <img 
        src="./vinit.png" 
        alt="Vinit Nagar" 
        className="rounded-md w-20 h-20 object-cover mb-2" 
      />
      <h2 className="text-2xl font-semibold">Vinit Nagar</h2>
      <p className="text-gray-400 mb-1">Full stack developer</p>
      <p className="text-gray-400 mb-3 text-xs">Currently learning AI/ML...</p>

      <div className="flex gap-4 mb-5 items-center" ref={socialRef}>
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

      <div className="mb-3">
        <h3 className="font-semibold mb-1">About Me.</h3>
        <p className="text-gray-300">
          Undergraduate developer with 1.5+ years of experience, crafting web & AI products using modern stacks like TypeScript, Next.js. Skilled in WebRTC, Node.js, agentic AI, and video tech, focused on building real-time, innovative solutions.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-1">Hire Me.</h3>
        <p className="text-gray-300">
          Available for internships, freelance, or part-time work. I'm passionate, fast-learning, and ready to ship.
        </p>
      </div>
    </div>
  );
}

export default Mobile;