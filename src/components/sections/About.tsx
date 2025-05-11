import { Mail, MapPin, Linkedin, Github, GraduationCap } from 'lucide-react'
import Highlight from '../Highlight'
import Mobile from '../Mobile'

function About() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen  ">
      <div className="w-full max-w-4xl pb-10">
        {/* <div className="grid md:grid-cols-5 gap-2 mb-2">
          <div className="bg-[#1A1A22] rounded-md p-3 col-span-3 lg:col-span-5 2xl:col-span-3 flex flex-col justify-center border border-[#2d2d3a]">
            <h1 className="text-4xl font-bold text-white mb-2">
              Vinit Nagar
              <br />
              <span className="text-gray-300/60 text-2xl">Full Stack Developer</span>
            </h1>
            <p className="text-gray-500 mb-2 text-2">
              I specialize in building scalable <Highlight>web applications</Highlight> and solving complex problems with efficient <Highlight>backend</Highlight> solutions. I have a strong interest in <Highlight>AI/ML</Highlight>, especially <Highlight>computer vision</Highlight>, and a good enough understanding of AWS for cloud deployment. Always eager to learn, I focus on pushing technology’s limits with innovative solutions. 🚀🙏🏻
            </p>
          </div>

          <div className="hidden md:flex border overflow-hidden lg:hidden 2xl:flex border-[#2d2d3a] rounded-md h-full col-span-2 items-center justify-center">
            <img
              src="./iitj.jpg"
              alt="Vinit Nagar"
              className="h-full border scale-200 rounded-md -translate-x-28 translate-y-10 border-[#2d2d3a]  object-cover"
            />
          </div>
        </div> */}

        <Mobile/>

        <div className="mb-2 flex flex-wrap gap-2 justify-center">
          {[
            "https://github-readme-stats.vercel.app/api?username=vinitngr&show_icons=true&theme=dark",
            "https://github-readme-stats.vercel.app/api/top-langs/?username=vinitngr&layout=compact&theme=dark",
          ].map((url, index) => (
            <iframe key={index} src={url} ></iframe>
          ))}

          <iframe
            width={'100%'}
            src="           
            https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=vinitngr&theme=dark" ></iframe>
          <img
            src="https://ghchart.rshah.org/vinitngr"
            alt="GitHub Contribution Graph"
            className=" w-full h-auto"
          />

        </div>


        <div className="bg-[#1A1A22] rounded-md p-6 border border-[#2d2d3a]  mb-2">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
          <div className="space-y-4">
            <div className="flex items-center text-gray-400">
              <Mail className="w-6 h-6 mr-4" />
              vinitnagar56@gmail.com
            </div>
            <div className="flex items-center text-gray-400">
              <GraduationCap className="w-6 h-6 mr-4" />
              MBM university
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-6 h-6 mr-4" />
              Jodhpur , India
            </div>
            <div className="flex items-center text-gray-400">
              <Linkedin className="w-6 h-6 mr-4" />
              <a href="https://www.linkedin.com/in/vinit-nagar-264434293/" target="_blank" className='overflow-x-hidden' rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center text-gray-400">
              <Github className="w-6 h-6 mr-4" />
              <a href="https://github.com/vinitngr" target="_blank" className='overflow-x-hidden' rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>


        <div className=" bg-[#1A1A22] rounded  border border-[#2d2d3a]  p-6  ">
          <h3 className="text-2xl font-bold text-white mb-6">Hobbies</h3>
          <div className="space-y-4">
            <div className="  p-4 border border-[#2d2d3a]">
              <h4 className="text-white font-semibold"><Highlight>Coding</Highlight></h4>
              <p className="text-gray-400">
                I love creating projects and learning new technologies. The best part of
                programming is that there's always something new to learn and explore.
              </p>
            </div>
            <div className="p-4 bg-[#1A1A22]  borderbg-[#1A1A22] border border-[#2d2d3a]">
              <h4 className="text-white font-semibold"><Highlight>Gaming</Highlight></h4>
              <p className="text-gray-400">I like watching movies and gaming in my free time. </p>
            </div>
          </div>
        </div>
        <div className='p-2'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.312777301564!2d73.0327088684077!3d26.2674253432997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea67269fb%3A0x93b557732516d6d1!2sM.B.M.%20University!5e0!3m2!1sen!2sin!4v1741095763300!5m2!1sen!2sin" width={'100%'} height="450" loading="lazy"></iframe></div>



        <div
          id="emailForm"
          className="bg-[#1A1A22] mt-5 rounded-md p-4 border border-[#2d2d3a] mb-2 h-[300px] flex flex-col"
        >
          <div className="mb-3">
            Feel free to message, I'll try my best for a quick response
          </div>
          <form
            action={import.meta.env.VITE_FORMSPREE_URL}
            method="POST"
            className="flex flex-col h-full"
          >
            <div>
              <input
                type="text"
                name="contact"
                placeholder="Email or Phone"
                className="w-full p-2 mb-2 bg-[#2d2d3a] text-white rounded-md outline-none"
                required
              />
            </div>

            <div className="flex-1 mb-2">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full h-full p-2 bg-[#2d2d3a] text-white rounded-md outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>


      </div>
    </div>
  )
}

export default About