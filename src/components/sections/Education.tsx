import { ArrowRight } from 'lucide-react'
import { EduAndCert } from '../../data/education'
import Highlight from '../Highlight'

function Education({showHead = true}: {showHead?: boolean}) {
    return (
        <div>
            {showHead && (
                <>
                <h2 className="text-xl mb-5">Education and Certifications</h2>
                    <div className="font-extralight text-gray-500">
                        I am currently pursuing a Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE) from <Highlight>MBM University</Highlight>. I completed 12th grade at SVGMS, Sumerpur. Additionally, I have obtained online certifications in Web Development and AI from platforms such as <Highlight>Udemy</Highlight>.
                    </div>
                    <div className="h-full overflow-auto pb-10"></div>
                </>
            )}
            <div className="sm:font-extrabold mt-5">Education</div>
                {EduAndCert.education.map((edu, index) => (
                    <div
                        key={index}
                        className={`mt-${index === 0 ? 5 : 2} shadow-md w-full p-4 rounded sm:bg-[#1A1A22] border border-[#1a1a22] text-white flex sm:flex-row flex-col justify-between sm:items-center items-start`}
                    >
                        <div className="sm:w-1/2">
                            {edu.degree} {edu.from && <span className="text-[#a0a0a0] text-xs align-top">{edu.span}</span>}
                        </div>
                        <div className="sm:w-1/2 sm:text-right">{edu.from}</div>
                    </div>
                ))}

                <div className="sm:font-extrabold mt-5">Certifications</div>
                {EduAndCert.certifications.map((cert, index) => (
                    <div
                        key={index}
                        className={`mt-${index === 0 ? 5 : 2} shadow-md w-full p-4 rounded sm:bg-[#1A1A22] border border-[#1a1a22] text-white flex sm:flex-row flex-col justify-between sm:items-center items-start`}
                    >
                        <div className="sm:w-1/2">
                            {cert.name} {cert.platform && <span className="text-[#a0a0a0] text-xs align-top">{cert.platform}</span>}
                        </div>
                        <div className="flex items-center group">
                            <a
                                onClick={cert.done ? undefined : (e) => e.preventDefault()}
                                className={`${cert.done ? 'cursor-pointer text-yellow-700' : 'cursor-not-allowed text-gray-500'}`}
                                href={cert.done ? cert.link : undefined}
                                target="_blank"
                                title={cert.done ? undefined : 'Yet to receive'}
                            >
                                Certificate
                            </a>

                            <ArrowRight
                                className={`w-4 h-4 ml-1 transition-transform duration-200 ease-in-out ${cert.done ? 'cursor-pointer text-yellow-700 group-hover:-rotate-45' : 'cursor-not-allowed text-gray-500'
                                    }`}
                            />
                        </div>
                    </div>
                ))}

            </div>

    )
}

export default Education