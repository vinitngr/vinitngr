function MessageHome() {
  return (
    <div id="contact-form" className="flex flex-col gap-3">
      <p className="text-[13px] text-zinc-500">
        Feel free to message - I try to reply quickly.
      </p>
      <form
        action={import.meta.env.VITE_FORMSPREE_URL}
        method="POST"
        className="flex flex-col gap-2.5"
      >
        <input
          type="text"
          name="contact"
          placeholder="Email or phone"
          className="w-full px-4 py-3 text-sm bg-white/[0.04] border border-white/10 rounded-xl text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-amber-400/50 transition"
          required
        />
        <textarea
          name="message"
          placeholder="Tell me about your project…"
          rows={4}
          className="w-full px-4 py-3 text-sm bg-white/[0.04] border border-white/10 rounded-xl text-zinc-100 placeholder:text-zinc-600 outline-none resize-none focus:border-amber-400/50 transition"
          required
        />
        <button
          type="submit"
          className="w-full py-3 text-sm font-semibold bg-amber-400 text-black rounded-xl hover:bg-amber-300 transition"
        >
          Send message
        </button>
      </form>
    </div>
  )
}

export default MessageHome
