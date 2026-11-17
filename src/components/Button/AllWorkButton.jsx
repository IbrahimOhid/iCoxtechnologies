import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const AllWorkButton = ({ value, path }) => {
  return (
    <NavLink
      to={path}
      className="group inline-flex min-h-[44px] min-w-[140px] items-center justify-center gap-2 rounded-full  px-6 py-3.5 text-sm font-semibold text-primary shadow-sm shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-500/30 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 sm:px-8 sm:text-base"
    >
      <span>{value}</span>

      <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </NavLink>
  );
};

export default AllWorkButton;