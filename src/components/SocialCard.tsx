import { ArrowUpRight } from 'lucide-react'
import { socialLinks } from '../data/social'
import { AboutPrevProps } from '../utils/type'

function SocialCard({ }: AboutPrevProps) {
  return (
    <div className="soft-card p-5 sm:p-6">
      <p className="mono-label text-[11px] text-zinc-500 mb-1">elsewhere</p>
      <h3 className="text-lg font-semibold tracking-tight text-zinc-100">Socials</h3>
      <p className="text-[13px] text-zinc-500 mb-4">Connect with me around the web</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {socialLinks.map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group">
            <div className="soft-card-flat p-3 flex flex-col gap-4 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-200">
              <Icon className="size-5 text-zinc-400 group-hover:text-amber-400 transition" />
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-zinc-300">{label}</span>
                <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialCard
