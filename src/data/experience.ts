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
    jobtitle: "SDE intern (AI)",
    company: "Hooman Digital",
    date: "Sep 2025",
    enddate: "Present",
    description: `
       Hired as a <u class="text-yellow-600 underline">SDE AI Intern</u>, primarily focusing on building AI agent applications and workflow automation.
    `,
    companyLink: "https://www.hooman.digital/",
  },
  {
    logolink: "wisemangoLogo.png",
    jobtitle: "Full-Stack Developer",
    company: "WiseMango Inc",
    date: "July 2025",
    enddate: "Sep 2025",
    description: `
       Hired as a <u class="text-yellow-600 underline">full-stack developer</u>, primarily focusing on backend development using Node.js and API integration.
      <ul class="list-disc list-inside mt-2">
        <li>
          Developed authentication flow for <u>Klype</u>, <a href="https://WiseMango.io" target="_blank" class="text-yellow-600 underline">WiseMango</a>’s SaaS product
        </li>
         <li>Integrated <span class="text-yellow-600 underline">Firebase</span> for secure login, session management, and user data handling</li>
        <li>Worked on internal data scraping tools for automation</li>
        <li>Worked on frontend and backend (Node.js) features across the product</li>
        <li>Creating landing pages for <u class="text-yellow-600 underline">Kurattor</u> and <u class="text-yellow-600 underline">Klype</u> SaaS products to boost user engagement</li>
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
    description: `
      Attended a one-month ESRC Robotics Workshop, gaining hands-on experience with:
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Programming <span class="text-yellow-600 underline">Arduino</span> and microcontrollers</li>
        <li>Working with <span class="text-yellow-600 underline">Raspberry Pi Pico</span> for embedded projects</li>
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
