import { AboutPrevProps } from "../utils/type"
import icons from "../data/icons"
import { socialLinks } from "../data/social"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { HiDownload } from "react-icons/hi"
import { Mail } from "lucide-react"

function Badge({ k, label, color }: { k: string, label: string, color: string }) {
  return (
    <span className="mx-[1px] inline-flex items-center gap-1.5 rounded-full border border-[#2e2f36] bg-white/[0.04] px-2.5 py-[2px] align-[-3px] text-[12.5px] font-medium whitespace-nowrap text-neutral-100">
      <span className="text-[13px]" style={{ color }}>{icons[k]}</span> {label}
    </span>
  );
}

function AboutPrev({ }: AboutPrevProps) {
  return (
    <div className="py-8">
      <div className="flex items-center gap-5">
        <img
          src="/vinit.png"
          alt="Vinit Nagar"
          className="size-20 shrink-0 rounded-full border border-black object-cover"
          style={{ boxShadow: "0 0 0 1px #2b2c33" }}
        />
        <div className="min-w-0">
          <h1 className="text-[28px] font-semibold tracking-tight text-neutral-100 leading-tight">
            Hi, I'm Vinit
          </h1>
          <p className="mt-1 text-[17px] font-medium tracking-tight text-neutral-400 leading-snug">
            Backend &amp; AI Systems Engineer
          </p>
        </div>
      </div>
      <p className="mt-6 text-[15px] leading-[1.9] text-neutral-400">
        Currently chasing the <span className="text-neutral-300 underline decoration-dashed decoration-1 underline-offset-[3px] decoration-neutral-600">full AI stack</span>{" "}
        - especially everything around the model -{" "}
        <Badge k="inference" label="inference" color="#6b9dff" />{" "}
        <Badge k="ai infra" label="AI infra" color="#8abf9e" /> and{" "}
        <Badge k="governance" label="governance" color="#e8c468" /> - systems that make AI work{" "}
        <span className="text-neutral-300 underline decoration-dashed decoration-1 underline-offset-[3px] decoration-neutral-600">reliably in production</span>.
      </p>
      <p className="mt-4 text-[15px] leading-[1.9] text-neutral-400">
        I&apos;ve explored quite a few areas of computer science, from{" "}
        <span className="text-neutral-300 underline decoration-dashed decoration-1 underline-offset-[3px] decoration-neutral-600">low-level systems and embedded</span> to{" "}
        <span className="text-neutral-300 underline decoration-dashed decoration-1 underline-offset-[3px] decoration-neutral-600">backend and DevOps</span>, and that breadth
        has become one of my biggest strengths when solving unfamiliar problems. I enjoy connecting
        ideas across layers, understanding the trade-offs, and finding approaches that are practical,
        reliable, and sometimes a little unconventional. Currently building{" "}
        <Badge k="orcn" label="Orcn" color="#f0883e" />
      </p>
      <p className="num mt-4 text-[12px] tracking-wide text-neutral-500">
        currently into - <span className="text-neutral-300">go · ai infra · agentic ai · &quot;Orcn&quot;</span>
      </p>
      <div className="mt-3 flex items-center gap-0.5">
        {socialLinks.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="p-1.5 text-zinc-500 transition-colors hover:text-zinc-100"
          >
            {label === "GitHub" && <FaGithub className="size-4" />}
            {label === "LinkedIn" && <FaLinkedin className="size-4" />}
            {label === "X" && <FaXTwitter className="size-4" />}
            {label === "Resume" && <HiDownload className="size-4" />}
          </a>
        ))}
        <a
          href="mailto:vinitnagar56@gmail.com"
          title="Email"
          className="p-1.5 text-zinc-500 transition-colors hover:text-zinc-100"
        >
          <Mail className="size-4" />
        </a>
      </div>
    </div>
  )
}

export default AboutPrev
