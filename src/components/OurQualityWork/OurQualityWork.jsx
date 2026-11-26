import { useMemo, useState } from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaFacebook,
  FaArrowRight,
  FaSearch,
  FaVideo,
  FaBullhorn,
  FaMobileAlt,
  FaPenNib,
  FaCamera,
} from "react-icons/fa";

import Heading from "../Heading/Heading";
import { projectsData } from "../../data/projectsData";
import { navbarData } from "../../data/navbar";
import GrowBrand from "../GrowBrand/GrowBrand";

/* ── Icons ─────────────────────────────────────────────── */
const categoryIcons = {
  Websites: FaLaptopCode,
  Graphics: FaPaintBrush,
  "Facebook Page Setup": FaFacebook,
};

// Fallback by keyword, for services that have no explicit icon above
const iconRules = [
  [/video|motion|animation/i, FaVideo],
  [/web|site|develop|code|software/i, FaLaptopCode],
  [/graphic|design|logo|brand|creative/i, FaPaintBrush],
  [/facebook|social|page/i, FaFacebook],
  [/seo|search/i, FaSearch],
  [/market|ads?\b|advert|promot|boost/i, FaBullhorn],
  [/app|mobile/i, FaMobileAlt],
  [/content|writ|copy/i, FaPenNib],
  [/photo/i, FaCamera],
];

/* ── Services listed in the navbar dropdown(s) ─────────── */
const navServices = navbarData
  .filter((item) => item.children)
  .flatMap((item) => item.children);

// "Websites" ≈ "Website Development", "Graphics" ≈ "Graphic Design", etc.
const serviceKey = (text = "") =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "")
    .replace(/s$/, "");

const sameService = (a, b) => {
  const x = serviceKey(a);
  const y = serviceKey(b);
  if (!x || !y) return a === b;
  return (
    x === y ||
    (Math.min(x.length, y.length) >= 4 && (x.startsWith(y) || y.startsWith(x)))
  );
};

const getCategoryIcon = (category) => {
  if (categoryIcons[category]) return categoryIcons[category];

  const navMatch = navServices.find(
    (sub) => sub.icon && sameService(category, sub.name),
  );
  if (navMatch) return navMatch.icon;

  const rule = iconRules.find(([pattern]) => pattern.test(category));
  return rule ? rule[1] : FaLaptopCode;
};

const OurQualityWork = () => {
  // Websites will be active by default
  const [activeCategory, setActiveCategory] = useState("Websites");

  // Every navbar service + any project category not already covered
  const categories = useMemo(() => {
    const projectCategories = [
      ...new Set(projectsData.map((project) => project.category)),
    ];
    const ordered = [];

    navServices.forEach((sub) => {
      const match = projectCategories.find((c) => sameService(c, sub.name));
      const label = match ?? sub.name;
      if (!ordered.includes(label)) ordered.push(label);
    });

    projectCategories.forEach((c) => {
      if (!ordered.includes(c)) ordered.push(c);
    });

    return ordered;
  }, []);

  // Category project count
  const categoryCounts = useMemo(() => {
    return projectsData.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {});
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <div>
      <section
        id="project"
        className="container-section relative isolate overflow-hidden py-12"
      >
        {/* Light animation for cards (disabled for reduced-motion users) */}
        <style>{`
        @keyframes ourwork-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        .ourwork-rise { animation: ourwork-rise 0.6s ease-out backwards; }
        @media (prefers-reduced-motion: reduce) { .ourwork-rise { animation: none; } }
      `}</style>

        {/* Backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(6,78,59,0.08)_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 -z-10 h-96 w-96 rounded-full bg-lime-300/25 blur-3xl"
        />

        {/* SECTION HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <Heading title="Our Portfolio" paragraph="Check Our Quality Work" />
        </div>

        {/* CATEGORY FILTER */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`group inline-flex min-h-11 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 sm:px-5 sm:text-sm ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-green-400 to-lime-400 text-emerald-950 shadow-lg shadow-lime-400/30"
                    : "border-emerald-900/10 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-lime-400 hover:bg-lime-50 hover:text-emerald-950"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-[17px] sm:w-[17px] ${
                    isActive ? "text-emerald-950" : "text-emerald-600"
                  }`}
                />

                <span className="whitespace-nowrap">{category}</span>

                <span
                  className={`flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                    isActive
                      ? "bg-emerald-950 text-lime-300"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {categoryCounts[category] || 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* PROJECT GRID */}
        {filteredProjects.length > 0 ? (
          <div
            key={activeCategory}
            className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);

              return (
                <article
                  key={project.id}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className="ourwork-rise group relative flex h-full min-w-0 flex-col rounded-3xl border border-emerald-900/10 bg-white p-2 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-lime-400/60 hover:shadow-[0_28px_50px_-24px_rgba(6,78,59,0.5)] motion-reduce:transition-none"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Hover tint */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* CATEGORY BADGE */}
                    <span className="absolute left-3 top-3 inline-flex max-w-[calc(100%-24px)] items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1.5 text-[10px] font-bold text-lime-300 shadow-md backdrop-blur-md sm:left-4 sm:top-4 sm:text-xs">
                      <CategoryIcon
                        className="h-3 w-3 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{project.category}</span>
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="line-clamp-2 text-lg font-extrabold leading-snug tracking-tight text-emerald-950 transition-colors duration-300 group-hover:text-emerald-700 sm:text-xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500 sm:text-[15px]">
                      {project.description}
                    </p>

                    {/* Bottom meta */}
                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between gap-3 border-t border-emerald-900/10 pt-4">
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="h-1 w-7 shrink-0 rounded-full bg-gradient-to-r from-green-500 to-lime-400 transition-all duration-300 group-hover:w-11" />

                          <span className="truncate text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                            {project.category}
                          </span>
                        </div>

                        {/* Arrow Link */}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title}`}
                            className="group/link flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400 text-emerald-950 transition-all duration-300 hover:bg-emerald-950 hover:text-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 active:scale-95"
                          >
                            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-rotate-45 motion-reduce:transition-none" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="mt-10 flex min-h-60 items-center justify-center rounded-3xl border border-dashed border-emerald-900/20 bg-white/70 px-6 text-center backdrop-blur-sm">
            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-lime-400 text-xl text-emerald-950">
                <FaSearch />
              </div>

              <h3 className="mt-4 text-lg font-bold text-emerald-950">
                No projects found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try selecting another category.
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
      </section>
      <div className="mt-14 sm:mt-16 lg:mt-20">
        <GrowBrand />
      </div>
    </div>
  );
};

export default OurQualityWork;
