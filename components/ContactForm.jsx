const ContactForm = () => {
  return (
    <div className="flex w-full justify-start">
      <div className="my-10 flex w-full flex-col items-center justify-center text-black">
        <div className="grid w-[90%] gap-6 rounded-xl bg-[#d8e5ed] p-6 md:p-8">
          <div className="flex justify-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h2>
          </div>

          <form
            name="Maxum-Contact"
            action="/success"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4"
          >
            {/* Netlify spam protection */}
            <input className="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Maxum-Contact" />

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-800">
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="company" className="text-sm font-medium text-gray-800">
                Company
              </label>
              <input
                id="company"
                type="text"
                name="company"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2"
                placeholder="Company name (optional)"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm font-medium text-gray-800">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2"
                placeholder="604-123-4567"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-800">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="project-details"
                className="text-sm font-medium text-gray-800"
              >
                Message *
              </label>
              <textarea
                id="project-details"
                name="project-details"
                required
                rows={5}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2"
                placeholder="Tell us about your project, materials, quantities, timing…"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="w-[40%] rounded-md bg-accent2 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#b26636]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
