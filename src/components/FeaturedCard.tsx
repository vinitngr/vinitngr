import { useEffect, useState } from "react";
import { Featured } from "../data/project.data";
import { AboutPrevProps } from "../utils/type";
import icons from "../data/icons";

function FeaturedCard({ }: AboutPrevProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % Featured.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const item = Featured[currentIndex];

  return (
    <div className="featured-box px-5 py-5 sm:px-6">
      {/* faint diagonal glow patches - warm top-right, cool bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.13) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.11) 0%, transparent 70%)" }}
      />
      <div className="relative flex items-center justify-between">
        <p className="lbl">featured - {String(currentIndex + 1).padStart(2, '0')} / {String(Featured.length).padStart(2, '0')}</p>
        {item?.winner && (
          <span className="num inline-flex items-center gap-1.5 text-[10px] tracking-wide text-amber-200/90 bg-amber-400/10 border border-amber-400/25 rounded-none px-2.5 py-1">
            ★ {item.winner}
          </span>
        )}
      </div>

      <div className="relative mt-4" key={currentIndex}>
        <div className="fade-up">
          <h3 className="truncate text-[22px] font-semibold leading-tight tracking-tight text-neutral-100">
            {item?.title}
          </h3>
          <p className="mt-2 min-h-[68px] max-w-[64ch] text-[14px] leading-relaxed text-neutral-400 line-clamp-3">
            {item?.description}
          </p>

          <div className="mt-4 flex flex-nowrap gap-1.5 overflow-hidden">
            {item?.tags.slice(0, 7).map((tag) => (
              <span key={tag} className="badge-pill">
                {icons[tag.toLowerCase()]} {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <a
              href={item?.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-amber-300/90 hover:text-amber-200"
            >
              View project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {Featured.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`go to ${index}`}
                    className={`h-1.5 rounded-none transition-all duration-300 ${currentIndex === index ? "w-8 bg-amber-400/90" : "w-3 bg-white/15 hover:bg-white/30"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentIndex((i) => (i + 1) % Featured.length)}
                className="num text-[11px] text-neutral-500 hover:text-neutral-200"
              >
                next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
