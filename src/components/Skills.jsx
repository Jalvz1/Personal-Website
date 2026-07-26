import { skillGroups } from "../data/skills.js"; // Content comes from data/ 

// id="skills" for the navbar link
export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading (same style as About) */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Skillset
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent-600" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            The languages, frameworks, and tools I work with.
          </p>
        </div>

        {/* One card per group: three across on desktop, stacked on mobile */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-lg"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      <Icon size={30} color={item.color} aria-hidden="true" />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
