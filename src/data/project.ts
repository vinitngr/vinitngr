
export const Featured = [
  {
    id: 'card1',
    title: 'The-Great-G-Stack | @theggs/cli',
    description: 'AI-powered stack builder that generates tailored prompts or full tech stacks, with seamless options to store, upload, download, and share directly from the platform.',
    link: 'https://github.com/vinitngr/RTCboard',
    tags: ['cloudflare','Turborepo', 'CLI','Workers', 'KV', 'Next.js', 'Gemini', 'Vibe'],
  }
  ,
  {
    id: 'card2',
    title: 'Nodebox | webContainer',
    description: 'Browser based playgound and hosting platform for your Client Side applicatoins.',
    link: 'https://nodebox.vinitngr.xyz',
    tags: ['Webcontainer', 'Next.js', 'cloudflare', 'Workers', 'Dns', 'AWS', 'S3', "Cloudfront", "Drizzle", "Neon", "Next-auth"]
  }
];


export const projectdetails = [
  {
    title: 'The-Great-G-Stack | @theggs/cli',
    description: 'AI-powered stack builder that generates tailored prompts or full tech stacks with seamless options to store, upload, download, and share directly from the platform.',
    extendedImages: ['./1tggs.png', './2tggs.png', './3tggs.png', './4tggs.png'],
    tags: ['cloudflare','Turborepo', 'CLI','Workers', 'KV', 'Next.js', 'Gemini', 'Vibe'],
    onetag: 'AI',
    isExpanded: false,
    html: `
      <p>
        <span class="text-yellow-600 underline">the-great-g-stack</span> empowers developers to build and customize tech stacks effortlessly using AI-driven recommendations.
      </p>
      <ul class="list-disc list-inside text-gray-500 mt-2 space-y-1">
        <li>Supports full lifecycle management: saving, sharing, and collaborative editing</li>
        <li>Includes <span class="text-yellow-600 underline">@theggs/cli</span> for seamless stack uploads and management</li>
        <li>Automates stack generation and configuration for scalable projects</li>
        <li>Stack images inline for context:</li>
        <ul class="list-none ml-5 mt-3 space-y-1">
          <li><img src="./1tggs.png" alt="TGGStack 1" class="mt-1 rounded shadow" /></li>
          <li><img src="./2tggs.png" alt="TGGStack 2" class="mt-1 rounded shadow" /></li>
          <li><img src="./3tggs.png" alt="TGGStack 3" class="mt-1 rounded shadow" /></li>
          <li><img src="./4tggs.png" alt="TGGStack 4" class="mt-1 rounded shadow" /></li>
        </ul>
      </ul>
    `,
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
    html: `
      <p>
        <span class="text-yellow-600 underline">Nodebox</span> provides a fully browser-based Node.js environment for instant project hosting and preview.
      </p>
      <ul class="list-disc list-inside text-gray-500 mt-2 space-y-1">
        <li>Instantly preview and host projects directly from GitHub repositories or local files</li>
        <li>Supports React Vite and other client-side frameworks</li>
      <li>Built with <span class="text-yellow-600 underline">WebContainer API</span> for fully in-browser Node.js execution</li>
        <li>Secure <span class="text-yellow-600 underline">sandbox</span> environment with cloud deployment support</li>
        <li>Inline project images:</li>
        <ul class="list-none ml-5 mt-3 space-y-1">
          <li><img src="./nodebox1.png" alt="Nodebox 1" class="mt-1 rounded shadow" /></li>
          <li><img src="./nodebox2.png" alt="Nodebox 2" class="mt-1 rounded shadow" /></li>
          <li><img src="./nodebox3.png" alt="Nodebox 3" class="mt-1 rounded shadow" /></li>
        </ul>
      </ul>
    `,
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
    html: `
      <p>
        <span class="text-yellow-600 underline">IOLIB.ai</span> leverages <span class="text-yellow-600 underline">RAG</span> and semantic search for intelligent content retrieval.
      </p>
      <ul class="list-disc list-inside text-gray-500 mt-2 space-y-1">
      <li>Query books and weblogs for <span class="text-yellow-600 underline">context-aware answers</span></li>
      <li>Support <span class="text-yellow-600 underline">PDFs</span> and <span class="text-yellow-600 underline">Web Pages</span> to extract context from unstructured data</li>
      <li>Add custom databases and LLM API keys for generating <span class="text-yellow-600 underline">embeddings</span></li>
      <li>Inline screenshots:</li>
      <ul class="list-none ml-5 mt-3 space-y-1">
        <li><img src="./iolib1.png" alt="IOLIB 1" class="mt-1 rounded shadow" /></li>
        <li><img src="./iolib2.png" alt="IOLIB 2" class="mt-1 rounded shadow" /></li>
      </ul>
    </ul>

    `,
    link: "https://github.com/vinitngr/IOLIB"
  },
  {
    title: "RTCboard",
    description: "A real-time collaboration platform using WebRTC, Node.js, React, MongoDB, and Redis.",
    extendedImages: ['./webRTC.png' , './webRTC2.png'],
    tags: ["React", "Zustand", "Node.js", "Express", "WebRTC", "Socket.io", "Redis", "MongoDB"],
    onetag: 'WebRTC',
    isExpanded: false,
    html: `
      <p>
        <span class="text-yellow-600 underline">RTCboard</span> enables real-time collaboration via <span class="text-yellow-600 underline">WebRTC</span> and P2P connections.
      </p>
      <ul class="list-disc list-inside text-gray-500 mt-2 space-y-1">
        <li>Create and join dynamic rooms for real-time shared canvas collaboration and drawing</li>
<li>Built a custom <span class="text-yellow-600 underline">rich text editor</span> and integrated a canvas (<a href="https://excalidraw.com" target="_blank" class="text-yellow-600 underline">Excalidraw</a>) for interactive drawing</li>

        <li>Instant chat, voice, and media communication for seamless teamwork</li>
        <li>Backend powered by <span class="text-yellow-600 underline">Node.js</span>, <span class="text-yellow-600 underline">Redis</span>, and <span class="text-yellow-600 underline">MongoDB</span> for scalable, low-latency performance</li>
        <li>Supports multiple simultaneous users with synchronized state updates</li>
        <li>Optionally record sessions or save canvas snapshots for later reference</li>
        <li>Project views inline:</li>
        <ul class="list-none ml-5 mt-3 space-y-1">
          <li><img src="./webRTC.png" alt="RTCboard 1" class="mt-1 rounded shadow" /></li>
          <li><img src="./webRTC2.png" alt="RTCboard 2" class="mt-1 rounded shadow" /></li>
        </ul>
      </ul>
    `,
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
    github: "https://github.com/vinitngr/ownacar"
  },
  {
    title: "I3STeller",
    stack: ["Three.js"],
    tags: [{ color: "text-white", content: "Hackathon" }],
    description: "Real-time ISS and user position tracker with 3D globe visualization.",
    link: "https://vinitngr.github.io/I3STeller/",
    github: "https://github.com/vinitngr/I3STeller"
  },
  {
    title: "Rejoice Clone",
    stack: ["plain"],
    description: "Single-page animated website using GSAP (Rejouice clone).",
    github: "https://github.com/vinitngr/rejouice_clone_GSAP",
    link: "https://vinitngr.github.io/rejouice_clone_GSAP/"
  },
  {
    title: "MCP Vinit",
    stack: ["Node.js"],
    description: "Minimal clean backend starter kit (MCP).",
    github: "https://github.com/vinitngr/mcpVinit"
  },
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
}
