import { experiences, miniexperiences } from "../../data/experience";
import UnderlineHighlight from "../UnderLineHighlight";
import ExperienceCard from "./ExperienceCard";

function Exp({ showHead = true }: { showHead?: boolean }) {
  return (
    <div>
      <h2 className="relative text-center border-y-2 sm:border-y-0 border-white/10 sm:border-0 sm:mt-0 sm:py-0 sm:mb-4 sm:text-left sm:text-xl mt-4 py-2">
        <div className="sm:hidden absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>
        Experience</h2>

      {showHead ? (
        <div>
          <div className="font-extralight text-gray-500 mb-4">
          I work on a wide range of projects, from web development to
          ai development, and regularly contribute to open source projects.
          If you want to know more, check out my
          {" "}<UnderlineHighlight underlineClassName='border-yellow-600' className='Github text-yellow-600' onClick={()=>window.open("https://github.com/vinitngr" , "_blank")}>GitHub</UnderlineHighlight>
          .
          </div>
        </div>
      ) : (
        <div className="text-center text-xs text-gray-500">
        </div>
      )}

      <div className="h-full overflow-auto sm:pb-10">
        {experiences.map((exp, index) => (
          <div key={index} className="sm:my-3">
            <ExperienceCard {...exp} />
          </div>
        ))}


        {showHead && miniexperiences.map((exp, index) => (
          <div
            key={index}
            className={`mt-${index === 0 ? 4 : 2} border-[#1a1a22] sm:border-[#2d2d3a]   w-full shadow-md sm:text-lg text-md p-2 sm:p-4 rounded-xs sm:bg-[#1A1A22]/50 bg-[#1A1A22]/20 border-y  text-white flex justify-between gap-3`}
          >
            <div>
              {exp.title}{" "}
            </div>
            <a href="https://github.com/vinitngr" target="_blank">
              <div className="text-right text-gray-500">extend</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exp;
