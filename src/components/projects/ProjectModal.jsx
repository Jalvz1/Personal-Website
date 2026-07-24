import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaXmark,
  FaGithub,
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
  FaFilePdf,
} from "react-icons/fa6";

// Detail popup for a project. Shows a click-through image slideshow (the pages
// I built) plus "What I did". Closes on Esc / backdrop click; arrows and the arrow keys move through images. 
// Portaled to <body> so it overlays everything.
export default function ProjectModal({ project, onClose }) {
  const gallery = project?.gallery ?? [];
  const count = gallery.length;
  const [index, setIndex] = useState(0);

  const prev = () => count > 1 && setIndex((i) => (i - 1 + count) % count);
  const next = () => count > 1 && setIndex((i) => (i + 1) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // lock background scroll
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, count]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="my-auto w-full max-w-5xl rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: title on the left, action buttons + close on the right */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5">
          <h3 className="min-w-0 text-xl font-bold text-slate-900 sm:text-2xl">
            {project.title}
          </h3>

          <div className="flex flex-shrink-0 flex-wrap items-center justify-end gap-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                <FaArrowUpRightFromSquare size={14} /> Live Demo
              </a>
            )}
            {project.documents
              ?.filter((doc) => doc.url)
              .map((doc) => {
                const DocIcon = doc.url.toLowerCase().endsWith(".pdf")
                  ? FaFilePdf
                  : FaArrowUpRightFromSquare;
                return (
                  <a
                    key={doc.url}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    <DocIcon size={14} /> {doc.label}
                  </a>
                );
              })}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                <FaGithub size={16} /> Code
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            >
              <FaXmark size={22} />
            </button>
          </div>
        </div>

        <div className="space-y-6 p-5">
          {/* Image slideshow */}
          {count > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <img
                key={index}
                src={gallery[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                className="aspect-video w-full object-contain"
              />

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow hover:bg-white"
                  >
                    <FaChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow hover:bg-white"
                  >
                    <FaChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white">
                    {index + 1} / {count}
                  </div>
                </>
              )}
            </div>
          )}

          {/* What I did section */}
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              What I did
            </h4>
            <ul className="space-y-2">
              {project.whatIDid.map((item, i) => (
                <li key={i} className="flex gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
