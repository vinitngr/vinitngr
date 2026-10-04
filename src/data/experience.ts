import { Experience } from "../utils/type";

export const miniexperiences = [
  {
    title: "Open Source",
    description: "Frequent...",
  },
];

export const experiences: Experience[] = [
  {
    logolink: "HoomandigitalLogo.jpeg",
    jobtitle: "Applied AI Intern",
    company: "Hooman Digital",
    date: "Sep 2025",
    enddate: "April 2026",
    summary: "Production multi-agent RAG + Go microservices for async AI workloads.",
    description: `
       Working as an <span class="badge-pill">applied AI intern</span>, primarily building production AI infrastructure - multi-agent systems, async backends, and GPU orchestration.
       <ul class="list-disc list-inside mt-2 space-y-1">
         <li>Engineered a production multi-agent RAG system with dynamic tool execution, streamlining context retrieval.</li>
         <li>Architected a scalable microservices backend using gRPC and RabbitMQ for asynchronous task distribution.</li>
         <li>Developed high-performance Go workers for compute-heavy ingestion and summarization pipelines.</li>
         <li>Automated GPU orchestration using Nosana SDK and MCP for seamless AI model deployment.</li>
       </ul>
    `,
    companyLink: "https://www.hooman.digital/",
  },
  {
    logolink: "wisemangoLogo.png",
    jobtitle: "Full Stack Developer Intern",
    company: "WiseMango Inc",
    date: "July 2025",
    enddate: "Sep 2025",
    summary: "Node.js backend, auth flows + SaaS landing pages across the product.",
    description: `
       Hired as a <span class="badge-pill">full-stack developer</span>, primarily focusing on backend development using Node.js and API integration.
      <ul class="list-disc list-inside mt-2">
        <li>
          Developed authentication flow for <span class="badge-pill">Klype</span>, <a href="https://WiseMango.io" target="_blank" class="text-yellow-600 underline">WiseMango</a>’s SaaS product
        </li>
         <li>Integrated <span class="badge-pill">Firebase</span> for secure login, session management, and user data handling</li>
        <li>Worked on internal data scraping tools for automation</li>
        <li>Worked on frontend and backend (Node.js) features across the product</li>
        <li>Creating landing pages for <span class="badge-pill">Kurattor</span> and <span class="badge-pill">Klype</span> SaaS products to boost user engagement</li>
      </ul>
    `,
    companyLink: "https://WiseMango.io",
  },
  {
    logolink: "",
    jobtitle: "Embedded Systems Trainee",
    company: "ESRC",
    date: "June 2024",
    enddate: "July 2024",
    duration: "1 month",
    summary: "One-month embedded sprint - Arduino, Pi Pico, sensors, mini robots.",
    description: `
      Attended a one-month ESRC Robotics Workshop, gaining hands-on experience with:
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Programming <span class="badge-pill">Arduino</span> and microcontrollers</li>
        <li>Working with <span class="badge-pill">Raspberry Pi Pico</span> for embedded projects</li>
        <li>Integrating sensors and learning real-time system fundamentals</li>
         <li>Projects we built:
           <ol class="list-decimal list-inside mt-1 ml-5">
        <li>Line-following robot</li>
        <li>Tic Tac Toe game</li>
        <li>Secure biometric access case</li>
      </ol>
        </li>
      </ul>
    `,
    companyLink: "",
  },
];
