import { ArrowRight } from 'lucide-react'
import { AboutPrevProps } from '../utils/type'

function ConnectPrev({ setisopen, setselectfxn }: AboutPrevProps) {
  return (
    <div className="soft-card p-5 flex flex-col gap-3 h-full">
      <p className="mono-label text-[11px] text-zinc-500">contact</p>
      <h3 className="text-lg font-semibold tracking-tight text-zinc-100">Have something in mind?</h3>
      <p className="text-[13px] text-zinc-500 leading-relaxed">
        Freelance, internships or part-time - I reply fast.
        Also on <button onClick={() => window.open("https://www.fiverr.com/s/Eg4GpKD", "_blank")} className="text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-amber-400/40">Fiverr</button>.
      </p>
      <button
        onClick={() => {
          if (setisopen && setselectfxn) {
            setisopen(true);
            setselectfxn('about');
            setTimeout(() => document.getElementById('emailForm')?.scrollIntoView({ behavior: 'smooth' }), 100);
          } else {
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="group mt-auto inline-flex items-center justify-center gap-1.5 text-sm font-medium bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/[0.1] hover:border-amber-400/30 transition"
      >
        Message me
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:-rotate-45" />
      </button>
    </div>
  )
}

export default ConnectPrev
