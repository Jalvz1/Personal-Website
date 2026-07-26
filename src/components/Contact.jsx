import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

// Contact section (Option C — split card): a blue gradient accent panel with the
// direct-contact info, next to the form (Formsubmit.co, no backend). id="contact".
//
// SETUP: the first time the form is submitted on the live site, Formsubmit emails
// you a one-time confirmation link — click it once and messages start arriving.
export default function Contact() {
  const inputClasses =
    "w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-100";

  // Where Formsubmit returns the visitor after a successful submit. Built from
  // the live origin + Vite base so it's correct on the GitHub Pages sub-path now
  // and on a custom domain later (no hard-coded URL to keep in sync).
  const returnUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Heading (same style as the other sections) */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent-600" />
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Open to new roles and collaborations.
          </p>
        </div>

        {/* Split card: gradient accent panel | form */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:grid md:grid-cols-2">
          {/* Left — gradient accent panel */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#6a4fd6] to-[#292966] p-8 text-white sm:p-10">
            <h3 className="text-2xl font-bold">Connect</h3>
            <p className="mt-4 text-accent-100">
              You can email me or find me online. I'm open to full-stack,
              software engineering, and other tech or analyst roles, as well as
              collaboration opportunities.
            </p>

            {/* Email */}
            <a
              href="mailto:javieralvz0427@gmail.com"
              className="mt-8 inline-flex items-center gap-3 font-medium text-white transition-colors hover:text-accent-100"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <FaEnvelope size={18} />
              </span>
              javieralvz0427@gmail.com
            </a>

            {/* Socials */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Jalvz1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/30 p-3 text-white transition-colors hover:bg-white/15"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/javier-alvarez-2j"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/30 p-3 text-white transition-colors hover:bg-white/15"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right — form on white */}
          <div className="bg-white p-8 sm:p-10">
            <form
              action="https://formsubmit.co/javieralvz0427@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Formsubmit config (hidden) */}
              <input type="hidden" name="_subject" value="New message from your portfolio" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Send the visitor back to this site (not Formsubmit's page) after submit */}
              <input type="hidden" name="_next" value={returnUrl} />
              {/* Honeypot: bots fill this in, humans never see it */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <input type="text" name="name" placeholder="Your name" required className={inputClasses} />
              <input type="email" name="email" placeholder="Your email" required className={inputClasses} />
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className={inputClasses}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-accent-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-700"
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
