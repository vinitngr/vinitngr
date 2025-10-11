
import { CommandIcon, Database } from 'lucide-react';
import { JSX } from 'react';
import { FaJsSquare, FaNodeJs, FaPython, FaReact, FaDocker, FaCss3Alt,  FaLink, FaGithub, FaRobot, FaAws, FaCloudflare, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiDrizzle, SiMongodb, SiPostgresql, SiExpress, SiRedis, SiWebrtc, SiStackblitz, SiBun, SiPuppeteer, SiGooglegemini, SiExcalidraw, SiSocketdotio, SiTurborepo, SiPostman, SiTailwindcss, SiN8N } from 'react-icons/si';

const icons: { [key: string]: JSX.Element } = {
    'typescript': <FaJsSquare />,
    'node.js': <FaNodeJs />,
    'python': <FaPython />,
    'react': <FaReact />,
    'next.js': <SiNextdotjs />,
    'drizzle': <SiDrizzle />,
    'mongodb': <SiMongodb />,
    'git': <FaGithub />,
    'langchain': <FaLink />,
    'postgresql': <SiPostgresql />,
    'aws': <FaAws/>,
    'webcontainer': <SiStackblitz/>,
    'express': <SiExpress />,
    'webrtc': <SiWebrtc />,
    'redis': <SiRedis />,
    'tailwindcss': <FaCss3Alt />,
    'docker': <FaDocker />,
    'bun': <SiBun />,
    'bun.js': <SiBun />,
    'ai/ml': <FaRobot /> ,
    'cloudflare': <FaCloudflare/>,
    'automation': <SiPuppeteer/>,
    'neon': <Database size={10} />,
    'gemini': <SiGooglegemini/>,
    'excalidraw': <SiExcalidraw size={10}/>,
    'tailwind': <SiTailwindcss size={10}/>,
    'socketio' : <SiSocketdotio/>,
    'turborepo': <SiTurborepo/>,
    'cli': <CommandIcon size={12}/>,
    'postman': <SiPostman size={12}/>,
  'java': <FaJava size={12} />,
    'n8n' : <SiN8N/>
};


  export default icons