import { EduAndCert } from "../data/education";

function EducationSection() {
  const cert = EduAndCert.certifications.find((c) => c.done && c.link) ?? EduAndCert.certifications[0];

  return (
    <section>
      <div className="flex items-center justify-between py-2.5">
        <span className="lbl">education - where i studied</span>
        <span className="num text-[11px] text-neutral-600">
          {String(EduAndCert.education.length).padStart(2, "0")} schools
        </span>
      </div>

      <div className="groove-tb">
        {EduAndCert.education.map((edu, i) => (
          <div
            key={edu.degree}
            className={`grid grid-cols-[auto_1fr] items-start gap-4 py-5 ${i > 0 ? "groove-t" : ""}`}
          >
            <img
              src={`/${edu.insitituteLogo}`}
              alt={`${edu.from} logo`}
              loading="lazy"
              className="size-10 shrink-0 rounded-full border border-[#26272d] bg-[#0b0b0d] object-cover"
            />
            <span className="min-w-0">
              <span className="flex items-start justify-between gap-3">
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-semibold tracking-tight text-neutral-200">
                    {edu.degree}
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] text-neutral-500">
                    {edu.span}
                  </span>
                </span>
                <span className="num hidden w-36 shrink-0 text-right text-[11px] leading-snug text-neutral-500 sm:block">
                  {edu.from}
                </span>
              </span>
              <span className="num mt-1.5 block text-[11px] text-neutral-500 sm:hidden">
                {edu.from}
              </span>
            </span>
          </div>
        ))}

        {/* certification - same block, lightly separated */}
        <div className="groove-t py-5">
          <p className="lbl mb-3">certification</p>
          <div className="flex items-center justify-between gap-3">
            <p className="truncate text-[14px] font-medium text-neutral-200">
              {cert.name}
              <span className="ml-1.5 text-[12px] font-normal text-neutral-500">
                {cert.platform}
              </span>
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="badge-pill num group shrink-0"
            >
              certificate
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
