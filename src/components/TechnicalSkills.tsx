import icons from "../data/icons";
import { skillGroups } from "../data/skills";

function TechnicalSkills() {
  const all = skillGroups.flatMap((g) => g.items);
  return (
    <section>
      <div className="flex items-center justify-between py-2.5">
        <span className="lbl">technical skills - what i work with</span>
        <span className="num text-[11px] text-neutral-600">
          {String(all.length).padStart(2, "0")} skills
        </span>
      </div>

      <div className="groove-tb py-6">
        <div className="flex flex-wrap gap-1.5">
          {all.map((skill) => (
            <span key={skill} className="badge-pill">
              {icons[skill.toLowerCase()]}
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
