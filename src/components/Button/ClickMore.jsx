import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Works on both light and dark backgrounds (it sits on a card that turns dark on hover).
// Pass `href` to render a link, or `onClick` to render a button.
const ClickMore = ({
  value = "Click Here",
  href,
  onClick,
  className = "",
}) => {
  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type: "button", onClick };

  return (
    <Tag
      {...tagProps}
      className={`group/btn inline-flex cursor-pointer items-center gap-3 rounded-full bg-lime-400 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-emerald-950 transition-colors duration-300 hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 sm:text-base ${className}`}
    >
      <span>{value}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-950 text-lime-300 transition-transform duration-300 group-hover/btn:-rotate-45 motion-reduce:transition-none">
        <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Tag>
  );
};

export default ClickMore;
