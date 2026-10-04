import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "../data/experience";

function ExperienceSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experience" className="scroll-mt-4">
      <div className="flex items-center justify-between py-2.5">
        <span className="lbl">experience - where i've worked</span>
        <span className="num text-[11px] text-neutral-600">
          {String(experiences.length).padStart(2, "0")} roles
        </span>
      </div>

      <div className="groove-tb">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <div key={`${exp.company}-${exp.jobtitle}`} className={i > 0 ? "groove-t" : ""}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-4 text-left"
              >
                {exp.logolink ? (
                  <img
                    src={`/${exp.logolink}`}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full border border-[#26272d] bg-[#0b0b0d] object-cover"
                  />
                ) : (
                  <span className="num flex size-10 shrink-0 items-center justify-center rounded-full border border-[#26272d] bg-[#0b0b0d] text-[12px] text-neutral-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}

                <span className="min-w-0">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-[15px] font-semibold tracking-tight text-neutral-200 transition-colors group-hover:text-white">
                      {exp.jobtitle}
                    </span>
                    <span className="num hidden w-36 shrink-0 text-right text-[11px] text-neutral-500 sm:block">
                      {exp.date} - {exp.enddate}
                    </span>
                  </span>
                  <span className="mt-1.5 block">
                    <span className="badge-pill">{exp.company}</span>
                  </span>
                  <span className="num mt-1.5 block text-[11px] text-neutral-500 sm:hidden">
                    {exp.date} - {exp.enddate}
                  </span>
                </span>

                <ChevronDown
                  className={`mt-[3px] size-4 shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 text-neutral-200"
                      : "text-neutral-600 group-hover:text-neutral-300"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="fade-up pb-6 pl-14 pr-8">
                  <div
                    className="max-w-[72ch] text-[13.5px] leading-[1.75] text-neutral-400 [&_a]:text-amber-200/90 [&_a]:no-underline hover:[&_a]:text-amber-100 [&_li]:pl-1 [&_li]:marker:text-neutral-600 [&_ol]:mb-0 [&_ol]:ml-0 [&_ol]:mt-1.5 [&_ol]:list-outside [&_ol]:space-y-1 [&_ol]:pl-5 [&_ul]:mt-2 [&_ul]:list-outside [&_ul]:space-y-1.5 [&_ul]:pl-5"
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />
                  {exp.companyLink && (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link num mt-3 inline-block text-[12px] font-medium text-amber-200/90 hover:text-amber-100"
                    >
                      {exp.companyLink.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;
