
export const Featured = [
  {
    id: 'card1',
    title: 'TGGStack | @theggs/cli',
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
    extendedDescription: 'TGGStack empowers developers to build and customize tech stacks effortlessly using AI-driven recommendations tailored to diverse project needs. It supports full lifecycle management—including saving, sharing, and collaborative editing—and offers @theggs/cli for seamless stack uploads and management via command line. Architected with modern tools for scalability and performance, TGGStack streamlines development workflows by automating stack generation and configuration.',
    extendedImages: ['./1tggs.png', './2tggs.png', './3tggs.png' , './4tggs.png'],
    tags: ['cloudflare','Turborepo', 'CLI','Workers', 'KV', 'Next.js', 'Gemini', 'Vibe'],
    onetag: 'AI',
    isExpanded: false,
    link: 'https://github.com/vinitngr/the-great-g-stack',
    webUrl: 'https://tggs.vinitngr.xyz'
  }
  ,
  {
    title: "Nodebox",
    description: "A browser-based playground and hosting platform for client-side applications, providing a full Node.js environment directly in your browser.",
    extendedDescription: "NodeBox lets you instantly host or preview any GitHub repository or local project in a secure, browser-based Node.js sandbox—no subscriptions or local setup required. Features include GitHub and folder uploads, instant previews, and support for React Vite projects. Built with WebContainer API, Next.js, and cloud technologies for seamless deployment.",
    extendedImages: ['./nodebox1.png', 'nodebox2.png', 'nodebox3.png'],
    tags: [
      'WebContainer API', 'Next.js', 'cloudflare', 'Workers', 'DNS', 'AWS', 'S3', 'CloudFront', 'Drizzle', 'Neon', 'NextAuth'
    ],
    onetag: 'WebContainer',
    isExpanded: false,
    link: "https://github.com/vinitngr/nodebox",
    webUrl: "https://nodebox.vinitngr.xyz"
  },
  {
    title: "IOLIB.ai",
    description: "An AI-powered library leveraging Retrieval-Augmented Generation (RAG) and semantic search for advanced information retrieval and natural language understanding.",
    extendedDescription: "IOLIB is a digital library that uses embeddings and large language models to enable semantic search and question answering over a vast collection of books and weblogs. Users can query content, receive context-aware answers, and even add their own databases and LLM API keys to generate custom embeddings. Built for hackathons, it showcases the power of RAG and modern AI stacks.",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e3/Nicio.png",
    extendedImages: ['./iolib1.png', 'iolib2.png'],
    tags: [
      "React", "TypeScript", "Tailwind CSS", "LangChain", "Zustand", "Node.js", "MongoDB", "Rate Limiter", "Upstash", "Gemini", "Hackathon", "AI"
    ],
    onetag: 'Hackathon',
    isExpanded: false,
    link: "https://github.com/vinitngr/IOLIB"
  },
  {
    title: "RTCboard",
    description: "A real-time collaboration platform using WebRTC, Node.js, React, MongoDB, and Redis.",
    extendedDescription: "RTCboard enables real-time collaboration with peer-to-peer (P2P) connections, shared canvases, and instant communication. Built with WebRTC, Node.js, React, Redis, and Socket.io, it allows users to create and join rooms for seamless teamwork. The platform demonstrates scalable architecture for live, interactive applications.",
    extendedImages: ['./webRTC.png'],
    tags: [
      "React", "Zustand", "Node.js", "Express", "WebRTC", "Socket.io", "Redis", "MongoDB"
    ],
    onetag: 'WebRTC',
    isExpanded: false,
    link: "https://github.com/vinitngr/RTCboard"
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
