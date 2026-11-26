import { FaCheck } from "react-icons/fa";
import { servicesData } from "../../data/serviceData";
import Heading from "../Heading/Heading";
import GrowBrand from "../GrowBrand/GrowBrand";
import ClickMore from "../Button/ClickMore";

const Services = () => {
  return (
    <section
      id="services"
      className="container-section relative isolate overflow-hidden"
    >
      {/* Backdrop: faint dot grid + soft lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(6,78,59,0.09)_1px,transparent_0)] [background-size:24px_24px]"
      />

      <div className="mx-auto max-w-7xl">
        <Heading
          title={"Everything your brand needs to grow"}
          paragraph={"Professional Digital Services"}
          description={
            "From strategy to execution, we help businesses build strong digital products and meaningful customer experiences."
          }
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white p-7 transition-[border-color,box-shadow] duration-500 hover:border-emerald-950 hover:shadow-[0_30px_60px_-24px_rgba(6,78,59,0.55)] motion-reduce:transition-none lg:p-8"
              >
                {/* Dark green fill rises from the bottom on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 translate-y-full bg-emerald-950 transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
                />

                {/* Oversized icon watermark, visible on the dark state */}
                <Icon
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 -z-10 h-44 w-44 rotate-12 text-lime-400/0 transition-colors duration-500 group-hover:text-lime-400/10"
                />

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-lime-400 text-white shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 motion-reduce:transition-none">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-emerald-950 transition-colors duration-500 group-hover:text-white sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-grow text-[15px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-emerald-100/80">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3 border-t border-emerald-900/10 pt-6 transition-colors duration-500 group-hover:border-white/15">
                  {(service.features ?? []).map((feature, index) => {
                    const highlight = feature.toLowerCase().includes("3 month");

                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-3 transition-colors duration-500 ${
                          highlight
                            ? "-mx-2 rounded-lg bg-lime-100 px-2 py-1.5 font-semibold text-emerald-900 group-hover:bg-lime-400 group-hover:text-emerald-950"
                            : "text-slate-700 group-hover:text-emerald-50"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                            highlight
                              ? "bg-emerald-950 text-lime-300 group-hover:bg-emerald-950"
                              : "bg-lime-400/30 text-emerald-700 group-hover:bg-lime-400 group-hover:text-emerald-950"
                          }`}
                        >
                          <FaCheck className="h-2.5 w-2.5" aria-hidden="true" />
                        </span>

                        <span className="text-sm leading-6 sm:text-base">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <div className="pt-8">
                  <ClickMore value="Click Here" path={service.path} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
