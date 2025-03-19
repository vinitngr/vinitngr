import { Briefcase, Folder, Home, PersonStandingIcon } from "lucide-react"
import { HiMenu } from "react-icons/hi";
import { RxVercelLogo } from "react-icons/rx"

function Navbar({ setselectfxn, setisopen, isopen }: { setselectfxn: (option: string) => void, setisopen: (option: boolean) => void, isopen: boolean }) {
  return (

<nav className="flex justify-between items-center mb-2 py-2 px-4 bg-[#1a1a22] border border-[#2d2d3a] rounded-md shadow-lg">
  <div className="flex gap-4 justify-between w-full items-center">
    <div
      onClick={() => {setisopen(!isopen) ; setselectfxn('projects')}}
      className={`font-bold text-4xl text-gray-500 transition-transform duration-300 ${isopen ? 'hover:-rotate-90' : 'hover:rotate-90'} tracking-tight`}
    >
      <RxVercelLogo size={30}/>
    </div>
    
    <div className="md:hidden flex items-center text-gray-500 cursor-pointer"
      onClick={() => setisopen(!isopen)}
    >
      <HiMenu size={35}
      />
    </div>
  </div>

  <div className={`hidden gap-1 md:flex`}>
    {[
      { name: "home", label: "Home", Icon: Home },
      { name: "projects", label: "Project", Icon: Folder },
      { name: "experience", label: "Experience", Icon: Briefcase },
      { name: "about", label: "Me", Icon: PersonStandingIcon },
    ].map(({ name, label, Icon }) => (
      <button
        key={name}
        className="text-sm font-semibold px-4 hover:text-yellow-600 text-gray-500 py-2 rounded transition-all"
        onClick={() => {
          setselectfxn(name);
          setisopen(name !== "home");
        }}
      >
        <p className="hidden sm:flex items-center gap-2">
          <Icon className="size-4" />
          {label}
        </p>
      </button>
    ))}
  </div>
</nav>

  )
}

export default Navbar