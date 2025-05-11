import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import { socialLinks } from '../data/social';
import { Mail } from 'lucide-react';
function Mobile() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white mb-3 col-span-3 flex flex-col items-center p-2 rounded-md shadow-md">
      <div className="flex justify-between items-center w-full mb-2">
        <span className="text-gray-400">{time}</span>
        <div className="flex gap-3">
          <button className="text-white flex cursor-pointer items-center">
            
            <FaStar title="Star on GitHub" 
            onClick={() => window.open('https://github.com/vinitngr', '_blank')}
            />
          </button>
        </div>
      </div>

      <button className="text-green-400 text-xs border border-green-500 px-2 py-0.5 rounded-full inline-block mb-2 cursor-pointer">Available</button>

      <img src="./vinit.png" alt="Vinit Nagar" className="rounded-md w-20 h-20 object-cover mb-2" />
      <h2 className="text-2xl font-semibold">Vinit Nagar</h2>
      <p className="text-gray-400 mb-1">Full stack developer</p>
      <p className="text-gray-400 mb-3 text-xs">Currently learning AI/ML...</p>

      <div className="flex gap-4 mb-5 items-center">
        {socialLinks.map(({ href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            {/* Dynamically render the correct icon based on the label */}
            {label === "GitHub" && <FaGithub className="size-6 m-1" title={label} />}
            {label === "LinkedIn" && <FaLinkedin className="size-6 m-1" title={label} />}
            {label === "Twitter" && <FaTwitter className="size-6 m-1" title={label} />}
            {label === "Resume" && <HiDownload className="size-6 m-1" title={label} />}
          </a>
        ))}
        <Mail 
        onClick={() => window.open('mailto:vinitnagar56@gmail.com')}
        className="size-5 m-1"  />

      </div>

      <div className="mb-3">
        <h3 className="font-semibold mb-1">About Me.</h3>
        <p className="text-gray-300">
          Undergraduate developer with 1.5 years of experience, crafting web & AI products using modern stacks like TypeScript, Next.js. Skilled in WebRTC, Node.js, agentic AI, and video tech, focused on building real-time, innovative solutions.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-1">Hire Me.</h3>
        <p className="text-gray-300">
          Available for internships, freelance, or part-time work. I’m passionate, fast-learning, and ready to ship.
        </p>
      </div>
    </div>
  );
}

export default Mobile;
