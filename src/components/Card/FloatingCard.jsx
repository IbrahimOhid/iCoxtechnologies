import { FaUsers, FaProjectDiagram } from "react-icons/fa";

const floatingData = [
  {
    id: 1,
    icon: FaProjectDiagram,
    totalProject: "250",
    title: "Projects Completed",
    position: "top-left", 
  },
  {
    id: 2,
    icon: FaUsers,
    totalProject: "120",
    title: "Happy Clients",
    position: "bottom-right",
  },
];

const FloatingCard = () => {
  return (
    <>
      {floatingData.map((data) => {
        // Determine position classes based on data.position
        const positionClasses =
          data.position === "top-left"
            ? "top-4 left-4 sm:top-6 sm:left-6 lg:-left-6 lg:top-6"
            : "bottom-4 right-4 sm:bottom-6 sm:right-6 lg:-right-6 lg:bottom-6";

        return (
          <div
            key={data.id}
            className={`
              absolute
              z-20
              rounded-2xl sm:rounded-3xl
              border border-white/40
              bg-white backdrop-blur-xl
              px-4 py-3 sm:px-5 sm:py-4
              shadow-[0_20px_45px_rgba(15,23,42,0.12)]
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(14,165,233,0.25)]
              ${positionClasses}
            `}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Icon container with gradient */}
              <div
                className="
                  flex h-9 w-9 sm:h-11 sm:w-11
                  items-center justify-center
                  rounded-xl sm:rounded-2xl
                  bg-gradient-to-br from-emerald-500 to-cyan-500
                  text-white
                "
              >
                {<data.icon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </div>

              {/* Stats text */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-primary leading-tight">
                  {data.totalProject}+
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate">
                  {data.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FloatingCard;
