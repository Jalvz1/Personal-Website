import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects, categories } from "../../data/projects.js";

export default function Projects() {
  const [active, setActive] = useState("all"); // current filter tab
  const [selected, setSelected] = useState(null); // project shown in the modal

  // Segmented-control slider: measure the active tab and move a pill under it.
  const tabRefs = useRef([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const movePill = () => {
    const i = categories.findIndex((c) => c.value === active);
    const el = tabRefs.current[i];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  };

  useLayoutEffect(movePill, [active]);
  useEffect(() => {
    window.addEventListener("resize", movePill);
    return () => window.removeEventListener("resize", movePill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Show all projects, or only those in the active category.
  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-600" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Full-stack and machine learning work. Click any project to see the
            screenshots and exactly what I did.
          </p>
        </div>

        {/* Filter tabs — one connected bar with a sliding window */}
        <div className="mb-10 flex justify-center">
          <div className="relative flex w-full max-w-2xl rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {/* Sliding highlight */}
            <span
              className="absolute bottom-1 top-1 rounded-full bg-blue-600 transition-all duration-300 ease-out"
              style={{ left: pill.left, width: pill.width }}
            />
            {categories.map((c, i) => (
              <button
                key={c.value}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                onClick={() => setActive(c.value)}
                className={
                  "relative z-10 flex-1 rounded-full px-6 py-3 text-center text-base font-semibold transition-colors " +
                  (active === c.value
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900")
                }
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked horizontal cards */}
        <div className="space-y-8">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal. Shows only when a card is selected */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
