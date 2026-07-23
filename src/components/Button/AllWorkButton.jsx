import React from 'react';
import { NavLink } from 'react-router-dom';

const AllWorkButton = ({value}) => {
  return (
    <NavLink
      to="/work"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-lg active:scale-[0.97] min-h-[44px] min-w-[140px] touch-manipulation"
    >
      {value}
    </NavLink>
  );
};

export default AllWorkButton;