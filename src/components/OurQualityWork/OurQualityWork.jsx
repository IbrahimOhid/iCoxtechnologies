import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaGraduationCap,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import Heading from "../Heading/Heading";
import { projectsData } from "../../data/projectsData";
import Button from "../../components/Button/Button";

const categoryIcons = {
  All: FaSearch,
  Websites: FaLaptopCode,
  "App Designs": FaMobileAlt,
  Graphics: FaPaintBrush,
  Admission: FaGraduationCap,
};

const OurQualityWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="container-section py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Heading
          title={"Our Portfolio"}
          paragraph={"Check Our Quality Work"}
          description={
            "Explore our latest projects across different domains – crafted with passion and precision."
          }
        />

        {/* ─── Filter Tabs ─── */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {Object.keys(categoryIcons).map((category) => {
            const Icon = categoryIcons[category];
            const isActive = activeCategory === category;
            const isAdmission = category === "Admission";

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                      : "bg-primary/10 text-slate-700 hover:bg-primary/20 hover:scale-105"
                  }
                  ${isAdmission && !isActive ? "border-2 border-primary/30 hover:border-primary" : ""}
                  ${isAdmission && isActive ? "bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30" : ""}
                  min-h-[44px] touch-manipulation
                `}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-500"}`}
                />
                {category}
                {isAdmission && (
                  <span className="ml-1 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-bold text-slate-900">
                    NEW
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ─── Projects Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge (on image) */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {project.category}
                </span>

                {/* View Project button (on hover) */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium text-white bg-gradient-to-r from-primary via-sky-500 to-cyan-500 px-4 py-2.5 rounded-full  transition-all duration-300 shadow-lg shadow-primary/30"
                  >
                    View Project
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CTA: "How can we help you?" ─── */}
        <div className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Ready to grow your brand?
            </h3>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Partner with our agency to design, build and scale digital
              products that deliver real business results.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button value={"Start a Project"} phone={"01317878615"} />
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary transition-all duration-300 min-h-[48px]"
              >
                View All Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurQualityWork;
