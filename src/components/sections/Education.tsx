import { ArrowRight } from 'lucide-react'
import { EduAndCert } from '../../data/education'
import UnderlineHighlight from '../UnderLineHighlight'

function Education({ showHead = true }: { showHead?: boolean }) {
    return (
        <div>
            {showHead && (
                <>
                    <h2 className="text-xl mb-5">Education and Certifications</h2>
                    <div className="font-extralight text-[#737373] sm:text-gray-500">
                        I am currently pursuing a Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE) from <UnderlineHighlight underlineClassName='border-yellow-600' className='text-yellow-600'>MBM University</UnderlineHighlight>. I completed 12th grade at SVGMS, Sumerpur. Additionally, I have obtained online certifications in Web Development and AI from platforms such as <UnderlineHighlight underlineClassName='border-yellow-600' className='text-yellow-600'>Udemy</UnderlineHighlight>.
                    </div>
                    <div className="h-full overflow-auto pb-5"></div>
                </>
            )}
            <div className="sm:font-extrabold sm:border-0 mt-5 sm:mt-0 border-y-2 border-white/10 py-2 text-center sm:text-start relative">
                <div className="sm:hidden  absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>
                Education
            </div>
            {EduAndCert.education.map((edu, index) => {
                const marginClasses = index === 0
                    ? "mt-0 sm:mt-0" 
                    : "mt-0 sm:mt-2";

                return (
                    <div
                        key={index}
                        className={`${marginClasses} bg-[#1A1A22]/20 border-b sm:border-t border-[#1a1a22] sm:border-[#2d2d3a] shadow-md w-full sm:p-4 p-2 px-4 rounded-xs sm:bg-[#1A1A22]/50 text-white flex sm:flex-row flex-col justify-between sm:items-center items-start`}
                    >
                        <div className="sm:w-1/2 flex items-center">
                            {showHead && (
                                <img
                                    src={edu.insitituteLogo}
                                    className="rounded-full h-8 w-8 mr-4"
                                    alt={edu.from + " logo"}
                                />
                            )}
                            <div>
                                {edu.degree}{" "}
                                {edu.from && (
                                    <span className="text-[#a0a0a0] text-xs align-top">{edu.span}</span>
                                )}
                            </div>
                        </div>
                        <div className="sm:w-1/2 sm:text-right text-[#737373] sm:text-gray-500">
                            {edu.from}
                        </div>
                    </div>
                );
            })}


            <div className="sm:font-extrabold sm:mt-0 sm:border-0 mt-5 border-y-2 border-white/10 py-2 text-center sm:text-start relative">
                <div className="sm:hidden  absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>
                Certifications
            </div>
            {EduAndCert.certifications.map((cert, index) => {
                const marginClasses = index === 0
                    ? "mt-0 sm:mt-0"
                    : "mt-0 sm:mt-2";

                return (
                    <div
                        key={index}
                        className={`${marginClasses} border-y bg-[#1A1A22]/20 border-[#1a1a22] sm:border-[#2d2d3a] shadow-md w-full sm:p-4 p-2 px-4 rounded-xs sm:bg-[#1A1A22]/50 text-white flex sm:flex-row flex-col justify-between sm:items-center items-start`}
                    >
                        <div className="sm:w-1/2">
                            {cert.name}{" "}
                            {cert.platform && (
                                <span className="text-[#a0a0a0] text-xs align-top">{cert.platform}</span>
                            )}
                        </div>
                        <div className="flex items-center group">
                            <a
                                onClick={cert.done ? undefined : (e) => e.preventDefault()}
                                className={`${cert.done
                                        ? "cursor-pointer text-yellow-700"
                                        : "cursor-not-allowed text-[#737373] sm:text-gray-500"
                                    }`}
                                href={cert.done ? cert.link : undefined}
                                target="_blank"
                                title={cert.done ? undefined : "Yet to receive"}
                            >
                                Certificate
                            </a>

                            <ArrowRight
                                className={`w-4 h-4 ml-1 transition-transform duration-200 ease-in-out ${cert.done
                                        ? "cursor-pointer text-yellow-700 group-hover:-rotate-45"
                                        : "cursor-not-allowed text-[#737373] sm:text-gray-500"
                                    }`}
                            />
                        </div>
                    </div>
                );
            })}


        </div>

    )
}

export default Education