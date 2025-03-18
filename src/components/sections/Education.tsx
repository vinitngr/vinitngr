import { ArrowRight } from 'lucide-react'
import { EduAndCert } from '../../data/education'
import Highlight from '../Highlight'

function Education() {
    return (
        <div>
            <h2 className="text-xl mb-5">Education and certifications</h2>
            <div className="h-full overflow-auto pb-10">
                <div className="font-extralight text-gray-500">
                    I am currently pursuing Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE) from {<Highlight>MBM University</Highlight>}. I completed 12th grade at SVGMS, Sumerpur. Additionally, I have obtained online certifications in Web Development and AI from platform such as {<Highlight>Udemy</Highlight>}.</div>
                <div className="font-extrabold mt-5">Education</div>
                {EduAndCert.education.map((edu, index) => (
                    <div
                        key={index}
                        className={`mt-${index === 0 ? 5 : 2} w-full p-4 rounded bg-[#1a1a22] text-white flex sm:flex-row flex-col justify-between sm:items-center items-start`}
                    >
                        <div className="sm:w-1/2">
                            {edu.degree} {edu.from && <span className="text-[#a0a0a0] text-xs align-top">{edu.span}</span>}
                        </div>
                        <div className="sm:w-1/2 sm:text-right">{edu.from}</div>
                    </div>
                ))}

                <div className="font-extrabold mt-5">Certifications</div>
                {EduAndCert.certifications.map((cert, index) => (
                    <div
                        key={index}
                        className={`mt-${index === 0 ? 5 : 2} w-full p-4 rounded bg-[#1a1a22] text-white flex sm:flex-row flex-col justify-between sm:items-center items-start`}
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
        </div>

    )
}

export default Education