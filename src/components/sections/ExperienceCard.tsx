import React, { useState } from "react";
import { Building2, Calendar, ExternalLink } from "lucide-react";
import { Experience } from "../../utils/type";

const ExperienceCard: React.FC<Experience> = ({
    logolink,
    company,
    jobtitle,
    companyLink,
    date,
    enddate,
    description,
}) => {
    const [open, setOpen] = useState(false);
    const displayDuration = `${date} - ${enddate}`


    return (
        <div className="w-full sm:border sm:border-[#2d2d3a]  sm:bg-[#1A1A22] relative rounded-md  sm:p-4 p-2 transition-all duration-300"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(!open); }}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    {logolink ? (
                        <a href={companyLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img
                                src={logolink}
                                alt={`${company} logo`}
                                className="h-10 w-10 object-contain rounded-full"
                                style={{ maxHeight: "2.5rem" }}
                            />
                        </a>
                    ) : (
                        <div className="flex-shrink-0 size-10 flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-gray-400" />
                        </div>
                    )}
                    <div>
                        <div className="flex gap-1 items-start">
                            <h3 className="text-lg font-semibold tracking-tight">{company}</h3>
                            {enddate === "Present" && (
                                <div className="mt-0.5 ml-1 size-1.5 bg-green-400 rounded-full"></div>
                            )}
                        </div>

                        <p className="text-sm text-gray-500  line-clamp-3">{jobtitle}</p>
                    </div>
                </div>

                {companyLink && (
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{displayDuration}</span>
            </div>


            {open && (
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">{description}</p>
            )}

        </div>
    );
};

export default ExperienceCard;
