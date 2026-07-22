import { clientLogo } from "../../data/clientLogo";
import Heading from "../Heading/Heading";

const OurClient = () => {
  return (
    <section className="container-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading*/}

        <Heading
          title={"Trusted by industry leaders"}
          paragraph={"Our Happy Clients"}
          description={
            "Join 10+ businesses that have trusted us to elevate their digital presence."
          }
        />

        {/* Marquee */}
                  <div className="marquee-track flex min-w-max items-center gap-4 sm:gap-6 lg:gap-8">
        
                    {[...clientLogo, ...clientLogo].map((item, index) => (
                      <div
                        key={index}
                        className="
                          flex-shrink-0
                          flex
                          items-center
                          justify-center
                          min-w-[140px]
                          sm:min-w-[170px]
                          md:min-w-[200px]
                          lg:min-w-[220px]
                          h-[90px]
                          sm:h-[110px]
                          md:h-[120px]
                          rounded-3xl
                          bg-white
                          border border-slate-100
                          shadow
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:shadow-md
                        "
                      >
                        <img
                          src={item.logo}
                          alt={`Customer ${index}`}
                          draggable={false}
                          className="
                            h-20
                            sm:h-16
                            md:h-16
                            lg:h-20
                            xl:h-28
                            w-auto
                            object-contain
                            select-none
                            transition-transform duration-300
                            group-hover:scale-105
                          "
                        />
                      </div>
                    ))}
                  </div>
      </div>
    </section>
  );
};

export default OurClient;
