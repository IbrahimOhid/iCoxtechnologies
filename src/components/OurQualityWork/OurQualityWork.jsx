import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaGraduationCap,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

// ─── Sample Project Data ───
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Websites",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    description: "Modern online store with seamless checkout",
  },
  {
    id: 2,
    title: "Health Tracking App",
    category: "App Designs",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    description: "UI/UX for wellness mobile application",
  },
  {
    id: 3,
    title: "Brand Identity Suite",
    category: "Graphics",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Complete branding for a tech startup",
  },
  {
    id: 4,
    title: "University Admission Portal",
    category: "Admission",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop",
    description: "Streamlined admission process for students",
  },
  {
    id: 5,
    title: "Real Estate Dashboard",
    category: "Websites",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Interactive property management platform",
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "App Designs",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    description: "User-friendly interface for food ordering",
  },
];

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
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Check Our Quality Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore our latest projects across different domains – crafted with
            passion and precision.
          </p>
        </div>

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
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge (on image) */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {project.category}
                </span>

                {/* View Project link (on hover) */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-primary transition-colors"
                  >
                    View Project
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CTA: "How can we help you?" ─── */}
        <div className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              How can we help you?
            </h3>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Let's discuss your next project – we'd love to bring your ideas to
              life.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-h-[48px]"
              >
                Start a Project
                <FaArrowRight className="h-4 w-4" />
              </a>
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
