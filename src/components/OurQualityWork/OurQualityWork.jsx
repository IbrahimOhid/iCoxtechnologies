import { useMemo, useState } from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaFacebook,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

import Heading from "../Heading/Heading";
import { projectsData } from "../../data/projectsData";
import GrowBrand from "../GrowBrand/GrowBrand";

const categoryIcons = {
  Websites: FaLaptopCode,
  Graphics: FaPaintBrush,
  "Facebook Page Setup": FaFacebook,
};

const OurQualityWork = () => {
  // Websites will be active by default
  const [activeCategory, setActiveCategory] = useState("Websites");

  // Get unique categories automatically
  const categories = useMemo(() => {
    return [...new Set(projectsData.map((project) => project.category))];
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
    <section className="container-section py-12 ">
      {/* SECTION HEADING */}
      <div className="mx-auto max-w-3xl text-center">
        <Heading
          title="Our Portfolio"
          paragraph="Check Our Quality Work"
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="mt-8 flex justify-center sm:mt-10">
        <div
          className="
            flex
            w-full
            max-w-full
            flex-wrap
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-2
            shadow-sm
            sm:w-auto
            sm:gap-2.5
            sm:rounded-full
            md:gap-3
          "
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category] || FaLaptopCode;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`
                  group
                  inline-flex
                  min-h-11
                  touch-manipulation
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-3.5
                  py-2.5
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-300
                  ease-out
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                  sm:rounded-full
                  sm:px-4
                  sm:text-sm
                  md:px-5

                  ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : " text-slate-600 bg-white hover:text-primary "
                  }
                `}
              >
                {/* Icon */}
                <Icon
                  className={`
                    h-4
                    w-4
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:h-[17px]
                    sm:w-[17px]

                    ${isActive ? "text-white" : "text-slate-500"}
                  `}
                />

                {/* Category Name */}
                <span className="whitespace-nowrap">{category}</span>

                {/* Count */}
                <span
                  className={`
                    flex
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    px-1.5
                    py-0.5
                    text-[10px]
                    font-bold
                    leading-none

                    ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }
                  `}
                >
                  {categoryCounts[category] || 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/*PROJECT GRID*/}
      {filteredProjects.length > 0 ? (
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            sm:mt-10
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-7
            xl:gap-8
          "
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="
                group
                relative
                flex
                h-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1.5
                hover:border-primary/20
                hover:shadow-md
                sm:rounded-3xl
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  bg-slate-100
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />


                {/* CATEGORY BADGE*/}
                <span
                  className="
                    absolute
                    left-3
                    top-3
                    inline-flex
                    max-w-[calc(100%-24px)]
                    items-center
                    truncate
                    rounded-full
                    border
                    border-white/50
                    bg-white/90
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-slate-800
                    shadow-md
                    backdrop-blur-md
                    sm:left-4
                    sm:top-4
                    sm:text-xs
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* CONTENT */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  p-5
                  sm:p-6
                "
              >
                {/* Title */}
                <h3
                  className="
                    line-clamp-2
                    text-lg
                    font-extrabold
                    leading-snug
                    tracking-tight
                    text-secondary
                    transition-colors
                    duration-300
                    group-hover:text-primary
                    sm:text-xl
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    line-clamp-3
                    text-sm
                    leading-6
                    text-slate-500
                    sm:text-[15px]
                  "
                >
                  {project.description}
                </p>

                {/* Bottom Meta */}
                <div
                  className="
                    mt-auto
                    flex
                    items-center
                    justify-between
                    gap-3
                    border-t
                    border-slate-100
                    pt-5
                  "
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="
                        h-1
                        w-7
                        shrink-0
                        rounded-full
                        bg-primary
                        transition-all
                        duration-300
                        group-hover:w-11
                      "
                    />

                    <span
                      className="
                        truncate
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-400
                        sm:text-xs
                      "
                    >
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
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-white
                        active:scale-95
                      "
                    >
                      <FaArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* EMPTY STATE*/
        <div
          className="
            mt-10
            flex
            min-h-60
            items-center
            justify-center
            rounded-3xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-6
            text-center
          "
        >
          <div>
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
              "
            >
              <FaSearch className="text-xl" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-800">
              No projects found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try selecting another category.
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          CTA
      ====================================================== */}
      <div className="mt-14 sm:mt-16 lg:mt-20">
        <GrowBrand />
      </div>
    </section>
  );
};

export default OurQualityWork;
