import { projectdetails } from "../data/project.data";
import { ProjectCard } from "./ProjectsSection";

function ProjectsPage() {
  return (
    <section>
      <div className="flex items-center justify-between py-2.5">
        <a
          href="/"
          className="num group text-[11px] tracking-wide text-neutral-500 transition-colors hover:text-neutral-200"
        >
          <span className="mr-1.5 inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          home
        </a>
        <span className="num text-[11px] text-neutral-600">
          {String(projectdetails.length).padStart(2, "0")} total
        </span>
      </div>

      <div className="groove-tb relative grid sm:grid-cols-2">
        {/* centered 3D divider - dark cut + light edge, desktop only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px sm:block"
          style={{ background: "#000", boxShadow: "1px 0 0 rgba(255,255,255,0.09)" }}
        />
        {projectdetails.map((p, i) => (
          <div
            key={p.title}
            className={`py-6 ${i > 0 ? "groove-t" : ""} ${i === 1 ? "flat-t-sm" : ""} ${i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"}`}
          >
            <ProjectCard p={p} index={String(i + 1).padStart(2, "0")} />
          </div>
        ))}
      </div>

      <div className="groove-b flex w-full items-center justify-between py-3">
        <span className="lbl">projects - full archive</span>
        <span className="num text-[11px] text-neutral-600">vinitngr © 2026</span>
      </div>
    </section>
  );
}

export default ProjectsPage;
