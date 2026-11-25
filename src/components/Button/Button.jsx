
import { FaArrowRight } from "react-icons/fa";

const Button = ({ value, phone }) => {
  // Base styling classes optimized for slick touch targets
  const buttonClasses = `
    group inline-flex min-h-[44px] min-w-[140px] items-center  justify-center gap-2 rounded-full  px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-lime-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-500/30 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 sm:px-8 sm:text-base bg-gradient-to-r from-green-500 to-lime-500 cursor-pointer
    
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
