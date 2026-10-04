import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projectdetails } from "../data/project.data";

type Project = (typeof projectdetails)[number] & { webUrl?: string };

function githubRepo(link?: string): string | null {
  if (!link) return null;
  const m = link.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/);
  return m ? m[1] : null;
}

// local screenshot → else github's own social card (avatar, repo, description)
function coverFor(p: Project): string | null {
  const local = (p as { extendedImages?: string[] }).extendedImages?.[0]?.replace(/^\.\//, "/");
  if (local) return local;
  const repo = githubRepo(p.link);
  return repo ? `https://opengraph.githubassets.com/1/${repo}` : null;
}

function CoverBlock({ src, alt, onetag, index }: { src: string | null; alt: string; onetag?: string; index?: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <div className="relative overflow-hidden border border-[#26272d] bg-[#0b0b0d]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="aspect-[16/7] w-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      {onetag && (
        <span className="num absolute left-3 top-3 inline-flex items-center rounded-full border border-white/15 bg-black/55 px-2.5 py-[3px] text-[10px] tracking-wide text-amber-200/90 backdrop-blur-sm">
          {onetag}
        </span>
      )}
      {index && (
        <span className="num absolute right-3 top-3 rounded-full bg-black/55 px-2 py-[3px] text-[11px] text-white/70 backdrop-blur-sm">
          {index}
        </span>
      )}
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: string }) {
  return (
    <article className="flex h-full flex-col">
      <CoverBlock src={coverFor(p)} alt={`${p.title} preview`} onetag={p.onetag} index={index} />

      <h3 className="mt-4 text-[20px] font-semibold tracking-tight text-neutral-100 leading-snug">
        {p.title}
      </h3>
      <p className="mt-2 text-[14.5px] leading-[1.65] text-neutral-400 line-clamp-2">
        {p.description}
      </p>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {p.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center whitespace-nowrap rounded-full border border-[#2e2f36] bg-white/[0.04] px-2.5 py-[3px] text-[11.5px] font-medium text-neutral-200"
          >
            {tag}
          </span>
        ))}
        {p.tags.length > 5 && (
          <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#2e2f36] bg-white/[0.04] px-2.5 py-[3px] text-[11.5px] font-medium text-neutral-400">
            +{p.tags.length - 5}
          </span>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between pt-5">
        <div className="flex items-center gap-2">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#2e2f36] bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white"
            >
              <FaGithub className="size-3.5" /> github
            </a>
          )}
          {p.webUrl && (
            <a
              href={p.webUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 rounded-full border border-[#2e2f36] bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white"
            >
              live
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          )}
        </div>
        {p.slug && (
          <a
            href={`/project/${p.slug}#project`}
            className="badge-pill num"
          >
            details +
          </a>
        )}
      </div>
    </article>
  );
}

export { ProjectCard, CoverBlock, coverFor };

function ProjectsSection() {
  const visible = projectdetails.slice(0, 2);
  return (
    <section>
      <div className="flex items-center justify-between py-2.5">
        <span className="lbl">projects - selected work</span>
        <a
          href="/projects"
          className="num group text-[12px] font-medium tracking-wide text-neutral-100 transition-colors hover:text-white"
        >
          show all
          <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
      </div>

      <div className="groove-tb relative grid sm:grid-cols-2">
        {/* centered 3D divider - dark cut + light edge, desktop only */}
        <div
          aria-hidden
          className="groove-v pointer-events-none absolute inset-y-0 left-1/2 hidden w-px sm:block"
        />
        {visible.map((p, i) => (
          <div
            key={p.title}
            className={`py-6 ${i > 0 ? "groove-t" : ""} ${i === 1 ? "flat-t-sm" : ""} ${i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"}`}
          >
            <ProjectCard p={p as Project} index={String(i + 1).padStart(2, "0")} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default ProjectsSection;
