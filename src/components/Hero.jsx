// The landing section
// id="home" so the navbar "Home" link scrolls here.

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] scroll-mt-20 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
        Welcome to <span className="text-accent-600">My Page</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
        Take a look at what I have built.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#about"
          className="rounded-lg bg-accent-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-700"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="rounded-lg bg-accent-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-700"
        >
          View Projects
        </a>
        <a
          href="#skills"
          className="rounded-lg bg-accent-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-700"
        >
          My Skillset
        </a>
      </div>
    </section>
  );
}
