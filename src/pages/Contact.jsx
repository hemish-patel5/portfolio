import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400 mb-3">Get in touch</p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Contact Me</h1>
          <p className="mt-2 text-sm text-gray-500">Open to new opportunities and collaborations</p>


<div className="max-w-xs mx-auto mt-10 border border-gray-700 rounded-xl p-6 bg-gray-900">
  <h1>
    Links
  </h1>
  <div className="flex flex-wrap items-center justify-between">
      <h1 className="py-5 text-2xl font-bold">git</h1>
      <p>sdfsdf</p>
    </div>
</div>

        </div>


        <div className="grid gap-6 lg:grid-cols-2 items-start">

          {/* Info card */}
          <div className="rounded-2xl bg-white p-7 shadow-xl">
            <h2 className="text-lg font-medium text-gray-900">Reach out anytime</h2>
            <p className="mt-2 text-sm text-gray-500 leading-4">
              I'm currently open to new opportunities and collaborations. Send a message and I'll respond as soon as I can.
            </p>

            <hr className="my-5 border-t-2 border-gray-200" />

            <div className="flex flex-col gap-3">
              {contact.map((c) => (
                <div key={c.id} className="rounded-xl bg-gray-100 px-4 py-3 hover:scale-105 transition-transform">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-medium">{c.id}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">{c.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
            <form className="space-y-5">
              <label className="block">
                <span className="text-xs font-medium text-gray-400">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-gray-400">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-gray-400">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or question"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 resize-none"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-300 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}