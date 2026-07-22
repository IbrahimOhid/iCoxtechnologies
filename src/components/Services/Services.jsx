import { FaCheck } from "react-icons/fa";
import { servicesData } from "../../data/serviceData";
import Button from "../Button/Button";
import WhatsAppButton from "../Button/WhatsAppButton";
import Heading from "../Heading/Heading";

const Services = () => {
  return (
    <section className="container-section overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        

        <Heading
          title={"Everything your brand needs to grow"}
          paragraph={"Professional Digital Services"}
          description={"From strategy to execution, we help businesses build strong digital products and meaningful customer experiences."}
        />

        {/* Services */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        p-6
        sm:p-7
        lg:p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-[0_25px_60px_rgba(14,165,233,0.18)]
      "
              >
                {/* Animated Top Border */}
                <div
                  className="
          absolute
          left-0
          top-0
          h-1
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-primary
          via-sky-500
          to-cyan-500
          transition-transform
          duration-500
          ease-out
          group-hover:scale-x-100
        "
                />

                {/* Icon */}
                <div
                  className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
          shadow-sm
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:-rotate-6
          group-hover:bg-primary
          group-hover:text-white
          group-hover:shadow-lg
        "
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-grow text-[15px] leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, index) => {
                    const highlight = feature.toLowerCase().includes("3 month");

                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-3 ${
                          highlight
                            ? "font-semibold text-primary"
                            : "text-slate-700"
                        }`}
                      >
                        <FaCheck
                          className={`mt-1 h-4 w-4 flex-shrink-0 ${
                            highlight ? "text-primary" : "text-green-500"
                          }`}
                        />

                        <span className="text-sm leading-6 sm:text-base">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Buttons */}
                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-3">
                    <Button value="Let's Talk" phone="01317878615" />

                    <WhatsAppButton />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
