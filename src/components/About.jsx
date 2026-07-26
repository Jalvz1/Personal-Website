import { asset } from "../utils/asset.js";

// id="about" on navbar
export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent-600" />
        </div>

        {/* Photo + text: stacked on phones, side by side from md up */}
        <div className="grid items-center gap-10 md:grid-cols-5">
          {/* Photo */}
          <div className="flex justify-center md:col-span-2">
            <img
              src={asset("/images/unphotogenic.jpg")}
              alt="Javier Alvarez"
              className="aspect-square w-full max-w-sm rounded-2xl border border-slate-200 object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-3">
            {/* Description */}
            <p className="text-lg text-slate-700">
              I recently received my Bachelor's in Computer Science at the University of Houston, with a focus in software engineering and 
              additional experience in machine learning and data analysis. I'm comfortable working across the full stack, 
              and I enjoy the process of designing a codebase that's clean, efficient, and built to scale.
              <br />
              <br />
              I love learning new technologies as projects call for them. While I
              primarily focus on full-stack development, I enjoy expanding my
              knowledge into other areas of computer science. I'm always looking to
              grow my skills and build reliable software that solves real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
