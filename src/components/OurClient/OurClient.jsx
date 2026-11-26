import { clientLogo } from "../../data/clientLogo";
import Heading from "../Heading/Heading";

const OurClient = () => {
  return (
    <section className="container-section relative isolate overflow-hidden">
      {/* Backdrop: faint dot grid + soft lime glow behind the marquee */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(6,78,59,0.08)_1px,transparent_0)] [background-size:24px_24px]"
      />
     

      <div className="mx-auto max-w-7xl">
        <Heading
          title="Trusted by Industry Leaders"
          paragraph="Our Happy Clients"
          description="Join 10+ businesses that trust us to build exceptional digital experiences."
        />

        {/* Marquee — edges fade out; vertical padding keeps the hover lift and shadow from being clipped */}
        <div className="relative mt-8 overflow-hidden py-8 [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="client-marquee flex w-max items-center gap-4 sm:gap-6">
            {[...clientLogo, ...clientLogo].map((item, index) => (
              <div
                key={index}
                aria-hidden={index >= clientLogo.length ? "true" : undefined}
                className="group relative h-24 w-40 flex-shrink-0 rounded-3xl bg-slate-200 p-px transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_40px_-16px_rgba(6,78,59,0.45)] motion-reduce:transition-none sm:h-28 sm:w-48 lg:h-32 lg:w-56"
              >
                {/* Gradient border that fades in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500 to-lime-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Card face */}
                <div className="relative flex h-full w-full items-center justify-center rounded-[23px] bg-white p-4 sm:p-5">
                  <img
                    src={item.logo}
                    alt={item.name || `Client ${index + 1}`}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full select-none object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
