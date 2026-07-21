import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801701715369"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl
        bg-[#25D366]

        px-5
        py-3

        text-sm
        font-semibold
        text-white

        shadow-[#25D366]/30

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#1EBE5D]
        hover:shadow-md
        hover:shadow-[#25D366]/40

        active:scale-95
      "
    >
      <FaWhatsapp className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
