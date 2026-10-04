import { FaGithub } from "react-icons/fa";
import { projectdetails } from "../data/project.data";
import { CoverBlock, coverFor } from "./ProjectsSection";
import ReadmeBody from "./ReadmeBody";

function ProjectDetailPage({ slug }: { slug: string }) {
  const p = projectdetails.find((x) => (x as { slug?: string }).slug === slug);

  if (!p) {
    return (
      <section>
        <div className="flex items-center justify-between py-2.5">
          <a
            href="/projects"
            className="num group text-[11px] tracking-wide text-neutral-500 transition-colors hover:text-neutral-200"
          >
            <span className="mr-1.5 inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
            projects
          </a>
        </div>
        <div className="groove-tb py-10">
          <p className="text-[18px] font-semibold text-neutral-100">project not found</p>
          <p className="mt-2 text-[14px] text-neutral-500">no project lives at /project/{slug}</p>
        </div>
      </section>
    );
  }

  const hero = coverFor(p as Parameters<typeof coverFor>[0]);

  return (
    <section>
      <div id="project" className="flex items-center justify-between py-2.5 scroll-mt-4">
        <a
          href="/projects"
          className="num group text-[11px] tracking-wide text-neutral-500 transition-colors hover:text-neutral-200"
        >
          <span className="mr-1.5 inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          projects
        </a>
        {p.onetag && (
          <span className="num inline-flex items-center rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-[3px] text-[10px] tracking-wide text-amber-200/90">
            {p.onetag}
          </span>
        )}
      </div>

      <div className="groove-tb py-6">
        <CoverBlock src={hero} alt={`${p.title} preview`} />

        <h1 className="mt-5 text-[26px] font-semibold tracking-tight text-neutral-100 leading-tight">
          {p.title}
        </h1>
        <p className="mt-2 max-w-[68ch] text-[15px] leading-[1.7] text-neutral-400">
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center whitespace-nowrap rounded-full border border-[#2e2f36] bg-white/[0.04] px-2.5 py-[3px] text-[11.5px] font-medium text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
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
          {(p as { webUrl?: string }).webUrl && (
            <a
              href={(p as { webUrl?: string }).webUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 rounded-full border border-[#2e2f36] bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white"
            >
              live
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          )}
        </div>

        {/* body = live github readme, hand-written content only as fallback */}
        <ReadmeBody githubUrl={p.link} fallback={p.content} />
      </div>

      <div className="groove-b flex w-full items-center justify-between py-3">
        <a
          href="/projects"
          className="badge-pill num group"
        >
          <span className="mr-1 inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          all projects
        </a>
        <span className="num text-[11px] text-neutral-600">vinitngr © 2026</span>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
