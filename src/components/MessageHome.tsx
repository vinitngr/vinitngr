
function MessageHome() {
  return (
    <div
      id="emailForm contact"
      className="sm:bg-[#1A1A22] shadow-md rounded-md sm:p-4 sm:border border-[#2d2d3a] h-[300px] flex flex-col"
    >
      <span className="mt-5 py-2 border-t-2 border-b-2 sm:border-b-0 border-white/10 relative">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_8px,transparent_8px,transparent_16px)] pointer-events-none"></div>

        Message me
      </span>

      {/* <div className="mb-3 text-xs text-[#737373] sm:text-gray-500">
            Feel free to message, I'll try my best for a quick response
          </div> */}
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
            className="w-full p-2 sm:mb-2 sm:border-y px-4 border-white/10 text-white rounded-xs bg-[#1A1A22]/20 sm:bg-[#1A1A22]/50 outline-none"
            required
          />
        </div>

        <div className="flex-1 mb-2">
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-full p-2 px-4  border-y border-white/10 bg-[#1A1A22]/20 sm:bg-[#1A1A22]/50 text-white rounded-xs outline-none resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-orange-400 text-white rounded-xs hover:bg-orange-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default MessageHome