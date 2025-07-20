import { experiences, miniexperiences } from "../../data/experience";
import Highlight from "../Highlight";
import ExperienceCard from "./ExperienceCard";

function Exp({ showHead = true }: { showHead?: boolean }) {
  return (
    <div>
      <h2 className="text-center sm:text-left sm:text-xl mb-5">Experience</h2>

      {showHead ? (
        <div>
          <div className="font-extralight text-gray-500 mb-4">
          I work on a wide range of projects, from web development to
          ai development, and regularly contribute to open source projects.
          If you want to know more, check out my 
          {" "}<Highlight>Github</Highlight>
          .
          </div>
        </div>
      ) : (
        <div className="text-center text-xs text-gray-500">
        </div>
      )}

      <div className="h-full overflow-auto sm:pb-10">
        {experiences.map((exp, index) => (
          <div key={index} className="my-3">
            <ExperienceCard {...exp} />
          </div>
        ))}


        {showHead && miniexperiences.map((exp, index) => (
          <div
            key={index}
            className={`mt-${index === 0 ? 4 : 2} sm:border-[#2d2d3a]  w-full shadow-md sm:text-lg text-md p-2 sm:p-4 rounded sm:bg-[#1a1a22] sm:border  text-white flex justify-between gap-3`}
          >
            <div>
              {exp.title}{" "}
            </div>
            <div className="text-right text-gray-500">extend</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exp;
