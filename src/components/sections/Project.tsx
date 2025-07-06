import { ArrowRight, ChevronDown, ChevronUp, Github, Globe } from "lucide-react";
import { useState } from "react";
import { Project } from "../../utils/type";
import { projectdetails } from "../../data/project";
import Highlight from "../Highlight";
import OneTag from "../OneTag";

const ProjectCard = ({ showHead = true }: { showHead?: boolean }) => {
  const [projects, setProjects] = useState<Project[]>([...projectdetails]);

  return (
    <>
      <h2 className=" text-center sm:text-left sm:text-xl mb-5">Projects</h2>
      {showHead && (
        <>
          <div className="font-extralight text-gray-500">
            Here are some of the projects I've worked on, showcasing my skills in various web technologies 🌐 and frameworks. Some were built for learning purposes, while others were created for <Highlight>hackathons</Highlight>.
          </div>
          <div className="font-extrabold mt-5 mb-3">Following Are The Top</div>
        </>
      )}

      <div className="flex flex-col pb-10 gap-4 overflow-auto h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className="sm:bg-[#1A1A22] border border-[#1a1a22] rounded-md sm:p-4 p-2 transition-all duration-300 shadow-md cursor-pointer"
          >
            <div className="flex gap-4 justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{project.description}</p>
              </div>
              {project.image ? (
                <img src={project.image} alt={project.title} className="size-16 sm:size-20 rounded-full object-contain" />
              ) : (
                <div className="text-3xl font-bold"></div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-[#2a2a36] text-[#a0a0a0] text-xs py-1 px-2 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex sm:flex-row flex-col justify-between mt-4 sm:items-center">
              <div className="flex w-full justify-between">
                <a href={project.link} target="_blank" className="group text-xs text-yellow-600 no-underline flex items-center gap-1 font-medium">
                  <Github size={20} />
                  <span >View Project</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:-rotate-45" />
                </a>
                {
                  project.webUrl && (
                    <a href={project.webUrl} target="_blank" className=" mx-2 group text-xs text-zinc-600 no-underline flex items-center gap-1 font-medium">
                      <Globe size={20} className="hover:text-blue-500" />
                    </a>
                  )
                }
              </div>
              <div className="flex gap-3 items-center mt-3 sm:mt-0 justify-between sm:justify-end">

                {!project.isExpanded && (
                  <button
                    onClick={() => {
                      const updatedProjects = [...projects];
                      updatedProjects[index].isExpanded = true;
                      setProjects(updatedProjects);
                    }}
                    className="flex items-center gap-2  text-gray-500 text-xs"
                  >
                    <span className="text-nowrap">Show more</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}
                <div className="flex items-center gap-2">
                  <OneTag onetag={project.onetag as string} />
                </div>

              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${project.isExpanded ? " opacity-100 pt-4" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-sm text-gray-400">{project.extendedDescription}</p>
                <div className="grid gap-2 mt-3">
                  {project.extendedImages && project.extendedImages.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt={project.title}
                      className="w-full object-cover"
                    />
                  ))}
                </div>
              <button
                onClick={() => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].isExpanded = false;
                  setProjects(updatedProjects);
                }}
                className="mt-3 text-xs text-gray-500 hover:text-gray-400 flex items-center gap-1"
              >
                <span>Show less</span>
                <ChevronUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;