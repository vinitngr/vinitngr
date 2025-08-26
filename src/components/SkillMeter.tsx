import { AboutPrevProps } from "../utils/type";

const skills = [
  { name: "FullStack", level: "90%" },
  { name: "python", level: "50%" },
  { name: "AI/ML", level: "40%" },
];

export default function SkillMeter({ animatedItems, handleMouseEnter, handleMouseLeave }: AboutPrevProps) {
  return (
    <div
      id="card3"
      className={`grid-item order-3 p-4  col-span-3 sm:col-span-1 cursor-pointer bg-gradient-to-br bg-[#1a1a22] shadow-md border border-[#2d2d3a]/80 transition-all duration-300 
        ${animatedItems.includes('card3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-lg font-semibold text-[#e0e0e0] mb-3 tracking-tight">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3 group w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1 sm:gap-4">
            <p className="text-sm text-[#a0a0a0]/80 tracking-tight sm:w-24">{skill.name}</p>
            <div className="w-full sm:w-40 bg-[#2d2d3a]/80 h-2 rounded-full relative overflow-hidden">
              <div
                title={skill.level}
                className="absolute top-0 left-0 h-full bg-gray-600 transition-all duration-100 ease-in-out group-hover:bg-yellow-600"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
