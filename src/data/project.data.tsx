import React from "react";
import ImagePreview from "../components/sections/ImagePreview";

export const Featured = [
  {
    id: 'card1',
    title: 'Codrel | context Engine for agents',
    description:
      'A Context engine designed to enhance AI agents by providing dynamic, relevant context from various data sources for improved decision-making and responses.',
    link: 'https://github.com/hoomanbuilds/codrel',
    tags: ['MCP', 'RAG', 'vscode-extension', 'kiro', 'context', 'Vector', 'embedding', 'chromaDB', 'cli', 'npm' ,'amazonvibecoding'],
    winner: '2× Track Winner',
  },
  {
    id: 'card2',
    title: 'The-Great-G-Stack | @theggs/cli',
    description:
      'AI-powered stack builder that generates tailored prompts or full tech stacks, with seamless options to store, upload, download, and share directly from the platform.',
    link: 'https://github.com/vinitngr/RTCboard',
    tags: ['cloudflare', 'Turborepo', 'CLI', 'Workers', 'KV', 'Next.js', 'Gemini', 'Vibe'],
    winner: null,
  },
];


export const projectdetails = [
  {
    title: 'The-Great-G-Stack | @theggs/cli',
    description: 'AI-powered stack builder that generates tailored prompts or full tech stacks with seamless options to store, upload, download, and share directly from the platform.',
    extendedImages: ['./1tggs.png', './2tggs.png', './3tggs.png', './4tggs.png'],
    tags: ['cloudflare', 'Turborepo', 'CLI', 'Workers', 'KV', 'Next.js', 'Gemini', 'Vibe' , 'prompt engineering', 'Vibe'],
    onetag: 'AI',
    isExpanded: false,
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">the-great-g-stack</span> empowers developers to build and customize tech stacks effortlessly using AI-driven recommendations.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Supports full lifecycle management: saving, sharing, and collaborative editing</li>
          <li>Includes <span className="text-yellow-600 underline">@theggs/cli</span> for seamless stack uploads and management</li>
          <li>Automates stack generation and configuration for scalable projects</li>
          <li>Stack images inline for context:</li>
          <ul className="list-none ml-5 mt-3 space-y-1">
            <li><ImagePreview
              project
              extendedImages={['./1tggs.png', './2tggs.png', './3tggs.png', './4tggs.png']}
              src="./1tggs.png"
              alt="TGGStack 1"
              className="mt-1 rounded shadow"
            /></li>
            <li><ImagePreview src="./2tggs.png" alt="TGGStack 2" className="mt-1 rounded shadow" /></li>
            <li><ImagePreview src="./3tggs.png" alt="TGGStack 3" className="mt-1 rounded shadow" /></li>
            <li><ImagePreview src="./4tggs.png" alt="TGGStack 4" className="mt-1 rounded shadow" /></li>
          </ul>
        </ul>
      </>
    ),
    link: 'https://github.com/vinitngr/the-great-g-stack',
    webUrl: 'https://tggs.vinitngr.xyz'
  },
  {
    title: "Nodebox",
    description: "A browser-based playground and hosting platform for client-side applications, providing a full Node.js environment directly in your browser.",
    extendedImages: ['./nodebox1.png', './nodebox2.png', './nodebox3.png'],
    tags: ['WebContainer API', 'Next.js', 'cloudflare', 'Workers', 'DNS', 'AWS', 'S3', 'CloudFront', 'Drizzle', 'Neon', 'NextAuth'],
    onetag: 'WebContainer',
    isExpanded: false,
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">Nodebox</span> provides a fully browser-based Node.js environment for instant project hosting and preview.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Instantly preview and host projects directly from GitHub repositories or local files</li>
          <li>Supports React Vite and other client-side frameworks</li>
          <li>Built with <span className="text-yellow-600 underline">WebContainer API</span> for fully in-browser Node.js execution</li>
          <li>Secure <span className="text-yellow-600 underline">sandbox</span> environment with cloud deployment support</li>
          <li>Inline project images:</li>
          <ul className="list-none ml-5 mt-3 space-y-1">
            <li><ImagePreview
              project
              extendedImages={['./nodebox1.png', './nodebox2.png', './nodebox3.png']}
              src="./nodebox1.png"
              alt="Nodebox 1"
              className="mt-1 rounded shadow"
            /></li>
            <li><ImagePreview src="./nodebox2.png" alt="Nodebox 2" className="mt-1 rounded shadow" /></li>
            <li><ImagePreview src="./nodebox3.png" alt="Nodebox 3" className="mt-1 rounded shadow" /></li>
          </ul>
        </ul>
      </>
    ),
    link: "https://github.com/vinitngr/nodebox",
    webUrl: "https://nodebox.vinitngr.xyz"
  },
  {
    title: "IOLIB.ai",
    description: "An AI-powered library leveraging Retrieval-Augmented Generation (RAG) and semantic search for advanced information retrieval.",
    extendedImages: ['./iolib1.png', './iolib2.png'],
    tags: ["React", "TypeScript", "Tailwind CSS", "LangChain", "Zustand", "Node.js", "MongoDB", "Rate Limiter", "Upstash", "Gemini", "Hackathon", "AI"],
    onetag: 'Hackathon',
    isExpanded: false,
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">IOLIB.ai</span> leverages <span className="text-yellow-600 underline">RAG</span> and semantic search for intelligent content retrieval.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Query books and weblogs for <span className="text-yellow-600 underline">context-aware answers</span></li>
          <li>Support <span className="text-yellow-600 underline">PDFs</span> and <span className="text-yellow-600 underline">Web Pages</span> to extract context from unstructured data</li>
          <li>Add custom databases and LLM API keys for generating <span className="text-yellow-600 underline">embeddings</span></li>
          <li>Inline screenshots:</li>
          <ul className="list-none ml-5 mt-3 space-y-1">
            <li><ImagePreview
              project
              extendedImages={['./iolib1.png', './iolib2.png']}
              src="./iolib1.png"
              alt="IOLIB 1"
              className="mt-1 rounded shadow"
            /></li>
            <li><ImagePreview src="./iolib2.png" alt="IOLIB 2" className="mt-1 rounded shadow" /></li>
          </ul>
        </ul>
      </>
    ),
    link: "https://github.com/vinitngr/IOLIB"
  },
  {
    title: "RTCboard",
    description: "A real-time collaboration platform using WebRTC, Node.js, React, MongoDB, and Redis.",
    extendedImages: ['./webRTC.png', './webRTC2.png'],
    tags: ["React", "Zustand", "Node.js", "Express", "WebRTC", "Socket.io", "Redis", "MongoDB"],
    onetag: 'WebRTC',
    isExpanded: false,
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">RTCboard</span> enables real-time collaboration via <span className="text-yellow-600 underline">WebRTC</span> and P2P connections.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Create and join dynamic rooms for real-time shared canvas collaboration and drawing</li>
          <li>Built a custom <span className="text-yellow-600 underline">rich text editor</span> and integrated a canvas (<a href="https://excalidraw.com" target="_blank" className="text-yellow-600 underline">Excalidraw</a>) for interactive drawing</li>
          <li>Instant chat, voice, and media communication for seamless teamwork</li>
          <li>Backend powered by <span className="text-yellow-600 underline">Node.js</span>, <span className="text-yellow-600 underline">Redis</span>, and <span className="text-yellow-600 underline">MongoDB</span> for scalable, low-latency performance</li>
          <li>Supports multiple simultaneous users with synchronized state updates</li>
          <li>Optionally record sessions or save canvas snapshots for later reference</li>
          <li>Project views inline:</li>
          <ul className="list-none ml-5 mt-3 space-y-1">
            <li><ImagePreview
              project
              extendedImages={['./webRTC.png', './webRTC2.png']}
              src="./webRTC.png"
              alt="RTCboard 1"
              className="mt-1 rounded shadow"
            /></li>
            <li><ImagePreview src="./webRTC2.png" alt="RTCboard 2" className="mt-1 rounded shadow" /></li>
          </ul>
        </ul>
      </>
    ),
    link: "https://github.com/vinitngr/RTCboard",
    webUrl: "https://rtcboard.vinitngr.xyz"
  }
];


export const miniProjects: MiniProject[] = [
  {
    title: "OwnACar",
    stack: ["React", "TailwindCSS", "Clerk"],
    tags: [{ color: "text-red-500", content: "Discontinued" }],
    description: "Car booking platform (discontinued).",
    github: "https://github.com/vinitngr/ownacar",
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">OwnACar</span> was a car booking platform built with <span className="text-yellow-600 underline">React</span> and <span className="text-yellow-600 underline">TailwindCSS</span>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Implemented booking and scheduling logic</li>
          <li>Used Clerk for authentication</li>
          <li>Responsive UI with TailwindCSS</li>
          <li>Discontinued project, mainly for learning and experimentation</li>
        </ul>
      </>
    )
  },
  {
    title: "I3STeller",
    stack: ["Three.js"],
    tags: [{ color: "text-white", content: "Hackathon" }],
    description: "Real-time ISS and user position tracker with 3D globe visualization.",
    github: "https://github.com/vinitngr/I3STeller",
    link: "https://vinitngr.github.io/I3STeller/",
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">I3STeller</span> tracks ISS and user positions in real-time with a 3D globe using <span className="text-yellow-600 underline">Three.js</span>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>3D globe visualization of ISS position</li>
          <li>Real-time updates using object-based code architecture</li>
          <li>Hackathon project for Devpost submission</li>
        </ul>
      </>
    )
  },
  {
    title: "Rejoice Clone",
    stack: ["plain"],
    description: "Single-page animated website using GSAP (Rejouice clone).",
    github: "https://github.com/vinitngr/rejouice_clone_GSAP",
    link: "https://vinitngr.github.io/rejouice_clone_GSAP/",
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">Rejoice Clone</span> is a single-page animated website inspired by Rejouice using <span className="text-yellow-600 underline">GSAP</span>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Mouse interaction animations</li>
          <li>GSAP timeline-based animations</li>
          <li>Responsive layout with plain HTML, CSS, and JS</li>
          <li>Single-page scrolling animations for enhanced UX</li>
        </ul>
      </>
    )
  },
  {
    title: "MCP Vinit",
    stack: ["Node.js"],
    description: "Minimal clean backend starter kit (MCP).",
    github: "https://github.com/vinitngr/mcpVinit",
    content: (
      <>
        <p>
          <span className="text-yellow-600 underline">MCP Vinit</span> is a minimal implementation of the Model Context Protocol (MCP) server, designed for practice and experimentation.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Server-side connection setup with lightweight tooling</li>
          <li>Practice code in <span className="text-yellow-600 underline">/src/prac</span></li>
          <li><span className="text-yellow-600 underline">m1-index.ts</span>: MCP stdio connection (Method 1)</li>
          <li><span className="text-yellow-600 underline">m2-index.ts</span>: MCP stdio connection (Method 2)</li>
          <li><span className="text-yellow-600 underline">sse-server-mcp.ts</span>: SSE (Server-Sent Events) MCP server</li>
          <li>Simple and minimal setup for MCP integration, no complex tooling</li>
        </ul>
        <p className="mt-2 text-gray-400 italic">Note: 🧑🏽‍💻 will be working on soon</p>
      </>
    )
  }
  ,
  {
    title: "AmzClone",
    stack: ["plain"],
    description: "Functional Amazon frontend clone.",
    link: "https://vinitngr.github.io/webD-amzClone/",
    github: "https://github.com/vinitngr/webD-amzClone"
  }
];

interface MiniProject {
  title: string;
  stack: string[];
  tags?: { color: string; content: string }[];
  description: string;
  link?: string;
  github?: string;
  content?: React.ReactNode;
}
