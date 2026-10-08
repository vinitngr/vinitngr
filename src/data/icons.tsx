
import {  Cpu, Database, Network, Server, ShieldCheck, Terminal, Zap } from 'lucide-react';
import { JSX } from 'react';
import { FaJsSquare, FaNodeJs, FaPython, FaReact, FaDocker, FaCss3Alt,  FaLink, FaGithub, FaRobot, FaAws, FaCloudflare, FaJava, FaNpm } from 'react-icons/fa';
import { SiNextdotjs, SiDrizzle, SiMongodb, SiPostgresql, SiExpress, SiRedis, SiWebrtc, SiStackblitz, SiBun, SiPuppeteer, SiGooglegemini, SiExcalidraw, SiSocketdotio, SiTurborepo, SiPostman, SiTailwindcss, SiN8N, SiGo } from 'react-icons/si';

function VllmIcon() {
  return (
    <span style={{ display: "inline-flex", filter: "grayscale(1)", opacity: 0.65 }}>
    <svg width={12} height={12} viewBox="0 0 96.0 96.0" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#vllm-clip)">
        <path fill="#d9d9d9" d="m42.22417 28.470434l0 55.307083l-27.653543 -55.307083z" fillRule="evenodd" />
        <path fill="#d9d9d9" d="m42.223038 83.77752l21.729656 0l18.653545 -70.385826l-25.574802 13.461943z" fillRule="evenodd" />
        <path fill="#fdb515" d="m41.0477 27.293962l0 55.30709l-27.653542 -55.30709z" fillRule="evenodd" />
        <path fill="#30a2ff" d="m41.046566 82.60105l21.72966 0l18.653545 -70.385826l-25.574806 13.461943z" fillRule="evenodd" />
      </g>
      <defs>
        <clipPath id="vllm-clip"><path d="m0 0l96.0 0l0 96.0l-96.0 0l0 -96.0z" clipRule="nonzero" /></clipPath>
      </defs>
    </svg>
    </span>
  );
}

function NosanaIcon() {
  return (
    <span style={{ display: "inline-flex", filter: "grayscale(1)", opacity: 0.65 }}>
    <svg width={12} height={12} viewBox="0 0 100 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.1063 8.08477C26.61 5.13598 24.1479 2.77203 21.119 1.37608C18.0901 -0.0198731 14.672 -0.365996 11.4187 0.393814C8.16542 1.15362 5.26763 2.97483 3.19508 5.56223C1.12252 8.14963 -0.00333482 11.3516 7.41998e-06 14.649V87.0306H9.80179V14.649C9.81926 13.5385 10.2117 12.4654 10.9171 11.5996C11.6225 10.7338 12.6005 10.1248 13.6964 9.8689C14.7922 9.61302 15.9432 9.72491 16.9673 10.1868C17.9914 10.6488 18.83 11.4344 19.3505 12.4193L52.3746 77.363H41.4087L24.1924 43.5184H13.2265L35.3691 87.0306H68.2666L28.1063 8.08477Z" fill="#10E80C" />
      <path d="M90.1902 0.00628662V72.3878C90.1693 73.4955 89.7754 74.5649 89.0705 75.4275C88.3656 76.2901 87.3898 76.8969 86.2968 77.1523C85.2038 77.4078 84.0557 77.2974 83.0334 76.8384C82.011 76.3795 81.1725 75.5982 80.6499 74.6175L47.6258 9.6738H58.5916L75.808 43.5184H86.7739L64.6397 0.00628662H31.7422L71.8856 78.9521C73.3848 81.8982 75.8479 84.2592 78.8765 85.653C81.9051 87.0469 85.322 87.3921 88.5742 86.6328C91.8264 85.8735 94.7237 84.054 96.7973 81.4689C98.8709 78.8837 99.9995 75.6842 100 72.3878V0.00628662H90.1902Z" fill="#10E80C" />
    </svg>
    </span>
  );
}

function OrcnIcon() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", alignSelf: "center", lineHeight: 0 }}>
    <svg width={15} height={15} viewBox="0 0 1000 1000" style={{ display: "block", transform: "translateY(1.5px)" }} xmlns="http://www.w3.org/2000/svg">
      <path d="M 80 500 A 420 420 0 1 1 500 920 L 500 790 A 290 290 0 1 0 210 500 Z" fill="#EA580C" />
      <polygon className="orcn-dark-part" points="210,500 500,500 500,790 370,790 370,630 210,630" />
      <polygon className="orcn-dark-part" points="80,630 210,630 210,790 370,790 370,920 80,920" />
    </svg>
    </span>
  );
}

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
    'cli': <Terminal size={12}/>,
    'postman': <SiPostman size={12}/>,
    'java': <FaJava size={12} />,
    'n8n' : <SiN8N/>,
    'npm': <FaNpm size={12} />,
    'go': <SiGo size={12} />,
    'orcn': <OrcnIcon />,
    'inference': <Cpu size={12} />,
    'ai infra': <Server size={12} />,
    'governance': <ShieldCheck size={12} />,
    'ai': <FaRobot size={12} />,
    'gateway': <Network size={12} />,
    'adaptive': <Zap size={12} />,
    'vllm': <VllmIcon />,
    'nosana': <NosanaIcon />,
    'gpu': <Cpu size={12} />,
    'compute': <Server size={12} />,
};


  export default icons