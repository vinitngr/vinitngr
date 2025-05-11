
function MessageHome() {
  return (
    <div
          id="emailForm contact"
          className="sm:bg-[#1A1A22] shadow-md rounded-md sm:p-4 p-2 sm:border border-[#2d2d3a] h-[300px] flex flex-col"
        >
                    <span className="mb-5">Message me</span>

          <div className="mb-3 text-xs">
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
  )
}

export default MessageHome