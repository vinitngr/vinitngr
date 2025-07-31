import { RxVercelLogo } from "react-icons/rx";
import About from "./sections/About";
import Exp from "./sections/Exp";
import Education from "./sections/Education";
import ProjectCard from "./sections/Project";
import PdfViewer from "./PdfPreview";


const Sidebar = ({ isOpen, setIsOpen, selected , setselectfxn } : { isOpen: boolean, setIsOpen: (option: boolean) => void, selected: string , setselectfxn: (option: string) => void}) => {

  const onClick = () => {
    window.open('https://drive.google.com/file/d/11RtF0DaTjzu1vsWB20VuXP3SWYvlowec/view?usp=sharing', "_blank");
  };

  
  return (
    <div className={`bg-[#121218] font-mono lg:relative h-screen fixed top-0 z-20 left-0 ${isOpen && 'border-r-1'} overflow-hidden transition-all ease-in-out duration-500 border-[#2d2d3a] ${isOpen ? 'w-full lg:w-[80vw]' : 'w-0'}`}>
      <div className='flex text-white justify-between items-center'>
        <div onClick={() => setIsOpen(false)} className='flex justify-center -rotate-90 items-center m-3 text-center cursor-pointer hover:text-yellow-500'>
          <RxVercelLogo size={20} />
        </div>
        <div className="flex text-xs gap-5 overflow-x-scroll mr-5">
          {["projects", "experience", "education", "about", "resume"].map((item) => (
            <div
              key={item}
              className={` flex gap-1 items-center cursor-pointer ${selected === item && "underline-offset-4 underline text-yellow-500"}`}
              onClick={() => setselectfxn(item)}
            >
              {item}
              {/* {item == 'resume' ? <SquareArrowOutUpRight size={10}/>  : ''} */}
            </div>
          ))}

        </div>
        <div></div>
      </div>
      <div className={`bg-[#121218] text-white max-h-screen p-3 sm:p-5 transition-all ease-in-out duration-150 overflow-y-scroll`}>
        {selected === 'about' && <About />}
        {selected === 'projects' && <ProjectCard />}
        {selected === 'experience' && <Exp />}
        {selected === 'education' && <Education />}
        { selected === 'resume' && <PdfViewer/>}
      </div>
    </div>
  );
};

export default Sidebar;

