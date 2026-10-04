import icons from '../data/icons';
import { skills } from '../data/skills';
import { AboutPrevProps } from '../utils/type';

function TechnicalCard({ }: AboutPrevProps) {
  return (
    <div className="soft-card p-5 sm:p-6">
      <p className="mono-label text-[11px] text-zinc-500 mb-1">stack</p>
      <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-4">Technical skills</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map(skill => (
          <a
            href={`https://www.google.com/search?q=${skill}`}
            target="_blank"
            rel="noreferrer"
            key={skill}
            className="chip inline-flex items-center gap-1.5 text-xs text-zinc-400 px-2.5 py-1.5 hover:border-amber-400/40 hover:text-zinc-200 transition"
          >
            {skill.toLowerCase() === "zustand"
              ? <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Zustand" className="w-3 h-3 grayscale" />
              : <span className="text-zinc-500">{icons[skill.toLowerCase()]}</span>}
            {skill}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TechnicalCard
