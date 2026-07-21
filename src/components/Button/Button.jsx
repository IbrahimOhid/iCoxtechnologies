
import { FaArrowRight } from "react-icons/fa";

const Button = ({ value, phone }) => {
  // Base styling classes optimized for slick touch targets
  const buttonClasses = `
    group inline-flex items-center justify-center gap-2
    rounded-full bg-gradient-to-r from-primary via-sky-500 to-cyan-500
    px-6 py-4 text-sm font-bold text-white
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-md hover:shadow-sky-500/35
    active:scale-[0.97] cursor-pointer w-full sm:w-auto
  `;

  return phone ? (
    <a
      href={`tel:${phone}`}
      className="inline-block w-full sm:w-auto select-none"
    >
      <button type="button" className={buttonClasses}>
        {value}{" "}
        <FaArrowRight
          className="
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
      
      
    "
        />
      </button>
    </a>
  ) : (
    <button type="button" className={buttonClasses}>
      {value}{" "}
      <FaArrowRight
        className="
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
      />
    </button>
  );

};

export default Button;
