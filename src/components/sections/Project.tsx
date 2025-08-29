import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Project } from "../../utils/type";
import { miniProjects, projectdetails } from "../../data/project.data";
import UnderlineHighlight from "../UnderLineHighlight";
import ImagePreview from "./ImagePreview";
import icons from "../../data/icons";

const ProjectCard = ({ showHead = true }: { showHead?: boolean }) => {
  const [projects, setProjects] = useState<Project[]>([...projectdetails]);

  return (
    <>
      <h2 className="relative text-center sm:text-left sm:text-xl mt-4 sm:mb-4 sm:mt-0 py-2 sm:py-0 border-y-2 sm:border-0 border-white/10">
        <div className="sm:hidden absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>
        Projects
      </h2>
      {showHead && (
        <>
          <div className="font-extralight text-gray-500 mb-5">
            Here are some of the projects I've worked on, showcasing my skills in various web technologies and frameworks. Some were built for learning purposes, while others were created for competitions and <UnderlineHighlight animationVariant="bounceIn" underlineClassName='border-yellow-600' className='text-yellow-600'>hackathons</UnderlineHighlight>.
          </div>
        </>
      )}

      <div className="flex flex-col sm:gap-3 overflow-auto h-full">
        {projects.map((project, index) => (
          <div
            
            key={index}
            id={`card-${index}`}
            className="sm:bg-[#1A1A22]/50 bg-[#1A1A22]/20 group hover:border-orange-400 border-y border-[#1a1a22] sm:border-[#2d2d3a]  rounded-xs sm:p-4 p-2 px-4 transition-all duration-300 shadow-md cursor-pointer"
          >
            <div className="flex w-full justify-between">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold tracking-tight mb-1 group-hover:text-yellow-600">{project.title}</h3>
                  {
                    project.webUrl && (
                      <a
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 flex items-center justify-center group-hover:text-orange-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )
                  }
                </div>
                <p className="text-sm sm:text-gray-500 mb-1 line-clamp-2 text-[#737373]">{project.description}</p>
              </div>
              {project.image ? (
                <ImagePreview src={project.image} alt={project.title} className="size-16 sm:size-20 rounded-full object-contain" />
              ) : (
                <div className="text-3xl font-bold"></div>
              )}
            </div>

            <div className="flex flex-wrap gap-1 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-[#2a2a36]/20 flex items-center justify-center gap-1 text-[#a0a0a0] text-xs py-1 px-2 border border-white/5">
                  {icons[tag.toLowerCase()]}{tag}
                </span>
              ))}
            </div>

            <div className="flex sm:flex-row flex-col justify-between mt-4 sm:items-center">
              <div className="flex w-full justify-between">
                <a href={project.link} target="_blank" className="group text-xs group-hover:text-yellow-600 no-underline flex items-center gap-1 font-medium">
                  <Github size={20} />
                  <span >View Project</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:-rotate-45" />
                </a>

              </div>
              <div className="flex gap-3 items-center mt-3 sm:mt-0 justify-between sm:justify-end">

                {!project.isExpanded && (
                  <button
                    onClick={() => {
                      const updatedProjects = [...projects];
                      updatedProjects[index].isExpanded = true;
                      setProjects(updatedProjects);
                    }}
                    className="sm:hidden items-center gap-2 flex sm:text-gray-500 text-[#737373] text-xs"
                  >
                    <span className="text-nowrap">Show more</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}

              </div>
            </div>
            <div
              className="w-full flex items-center justify-center bg-black/10 text-white/40 text-xs group-hover:py-3 group-hover:mt-4
                          max-h-0 opacity-0 overflow-hidden transition-all duration-300
                          group-hover:max-h-40 border border-white/2 hover:text-white group-hover:opacity-100 cursor-pointer"
            onClick={() => {
              const updatedProjects = [...projects];
              updatedProjects[index].isExpanded = !updatedProjects[index].isExpanded;
              setProjects(updatedProjects);
            }}
            >
              click here to {project.isExpanded ? "collapse" : "expand"}
            </div>


            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${project.isExpanded ? " opacity-100 pt-4" : "max-h-0 opacity-0"
                }`}
            >
              <div className="text-sm text-[#737373] sm:text-gray-500">
                {project.content}
              </div>
              <button
                onClick={() => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].isExpanded = false;
                  setProjects(updatedProjects);
                }}
                className="mt-3 text-xs sm:text-gray-500 text-[#737373] hover:text-gray-400 flex items-center gap-1"
              >
                <span>Show less</span>
                <ChevronUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {
        showHead && (
          <div className="w-full">
            {miniProjects.map((project, index) => (
              <div
                key={index}
              className={`group hover:border-orange-400 mt-${index === 0 ? 5 : 2} border-[#2d2d3a] shadow-md w-full p-4 rounded-xs sm:bg-[#1A1A22]/50 border-y text-white flex flex-col gap-2 relative`}
              >
                <div className="flex items-center justify-between">
                  {project.title}
                  {(project.github || project.link) && (
                    <div className="flex items-center gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-sm text-gray-500">{project.description}</div>
                {project.content && (
                  <div className="w-full text-xs text-gray-500 overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-1000 rounded mt-2">
                    {project.content}
                  </div>
                )}
              </div>
            ))}

            <div className="pb-10 text-center mt-5 w-full">
              <a href="https://github.com/vinitngr" target="_blank">more + </a>
            </div>
          </div>

        )
      }

    </>
  );
};

export default ProjectCard;