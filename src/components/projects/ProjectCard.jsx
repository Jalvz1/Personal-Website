import { FaGithub } from "react-icons/fa6";
import { withLink } from "./withLink.jsx";
import { asset } from "../../utils/asset.js";

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:grid-cols-[minmax(0,420px)_1fr] sm:p-6">
      {/* Clickable thumbnail → opens the modal */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title}`}
        className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 transition hover:border-accent-300"
      >
        <img
          src={asset(project.thumbnail)}
          alt={project.title}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
        {/* Hover overlay — dims the image and prompts a click.
            Skipped for confidential projects (noPhotos) with no real screenshots. */}
        {!project.noPhotos && (
          <span className="absolute inset-0 flex items-center justify-center bg-slate-900/50 text-lg font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Click to view photos
          </span>
        )}
      </button>

      {/* Details */}
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        {project.period && (
          <p className="mt-1 text-sm font-medium text-accent-600">
            {withLink(project.period, project.periodLink)}
          </p>
        )}
        <p className="mt-2 text-slate-600">
          {withLink(project.blurb, project.blurbLink)}
        </p>

        {/* Tech tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-accent-50 px-2 py-0.5 text-xs font-medium text-accent-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions pinned to the bottom */}
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-medium text-white hover:bg-accent-700"
          >
            View Details
          </button>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              <FaGithub size={16} /> View GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
