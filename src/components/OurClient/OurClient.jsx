import { clientLogo } from "../../data/clientLogo";
import Heading from "../Heading/Heading";

const OurClient = () => {
  return (
    <section className="container-section overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Heading
          title="Trusted by Industry Leaders"
          paragraph="Our Happy Clients"
          description="Join 10+ businesses that trust us to build exceptional digital experiences."
        />

        {/* Marquee */}
        <div className="relative mt-12 overflow-hidden">
          <div className="client-marquee flex w-max items-center gap-4 sm:gap-6">
            {[...clientLogo, ...clientLogo].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  h-24
                  w-40
                  sm:h-28
                  sm:w-48
                  lg:h-32
                  lg:w-56
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >
                <img
                  src={item.logo}
                  alt={item.name || `Client ${index + 1}`}
                  loading="lazy"
                  draggable={false}
                  className="
                     h-20
                            sm:h-16
                            md:h-16
                            lg:h-20
                            xl:h-28
                            w-auto
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
