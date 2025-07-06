import { miniexperiences } from "../../data/experience";
import Highlight from "../Highlight"

function Exp({ showHead = true }: { showHead?: boolean }) {
  return (
    <div>
      <h2 className="text-center sm:text-left sm:text-xl mb-5">Experience</h2>
      {
        showHead ? (
          <div>
            <div className="font-extralight text-gray-500">
              I'm still in the learning phase, so no industrial experience yet 😅. However, I've attended numerous workshops and completed several courses in Web and AI. I’m also passionate about contributing to {<Highlight>Open Source</Highlight>}, constantly improving my skills and staying up to date with the latest trends.
            </div>
            <div className="font-extrabold mt-5">Following Are The Few</div>
          </div>
        ) : <div className="text-center text-xs text-gray-500">I'm still in the learning phase, so no major industrial experience yet 😅</div>
        
      }
      <div className="h-full overflow-auto pb-10">

        {miniexperiences.map((exp, index) => (
          <div
            key={index}
          className={`mt-${index === 0 ? 5 : 2} w-full shadow-md sm:text-lg text-md p-2 sm:p-4 rounded sm:bg-[#1a1a22] border border-[#1a1a22] text-white flex justify-between gap-3`}
          >
            <div>
              {exp.title} {exp.source && <span className="text-[#a0a0a0] text-xs align-top">{exp.source}</span>}
            </div>
            <div className="text-right text-gray-500">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exp