import {
  FaCode,
  FaPalette,
  FaVideo,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

import HeroImage from "/images/hero.webp";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div
        className="
          container-section
          grid
          items-center
          gap-14
          py-14
          md:py-20
          lg:grid-cols-2
        "
      >
        {/* LEFT */}
        <div>
          {/* Heading */}

          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900

              sm:text-5xl

              lg:text-6xl
            "
          >
            We design & build
            <span className="text-primary"> high-impact digital </span>
            <br />
            Experiences
          </h1>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-8
              text-slate-600

              sm:text-lg
            "
          >
            A creative digital agency helping startups and businesses grow
            through thoughtful design, scalable development and
            performance-driven strategy.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4

              sm:flex-row
            "
          >
            <Button value={"Let's Talk"} phone={"01317878615"} />

            <button
              className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    border
    border-slate-300
    bg-white
    px-8
    py-4
    text-sm
    font-semibold
    text-slate-800
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-primary
    hover:text-primary
    hover:shadow-lg cursor-pointer
  "
            >
              View Our Work
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
            relative
            flex
            justify-center
          "
        >
          <div
            className="
              absolute
              h-80
              w-80
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />
          <img
            src={HeroImage}
            alt="Digital Agency"
            className="
              relative
              w-full
              max-w-xl
              rounded-3xl
              shadow-2xl
            "
          />
          {/* Floating Card */}
          <div
            className="
    absolute
    left-2
    top-8
    z-20
    rounded-3xl
    border
    border-white/40
    bg-white/90
    px-5
    py-4
    shadow-[0_20px_45px_rgba(15,23,42,0.15)]
    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_30px_60px_rgba(14,165,233,0.25)]

    sm:left-4
    lg:-left-10
    lg:top-12
  "
          >
            <div className="flex items-center gap-4">
              <div
                className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-primary
        to-cyan-500
        text-white
        shadow-lg
      "
              >
                <FaProjectDiagram className="text-xl" />
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">250+</h3>

                <p className="text-sm font-medium text-slate-500">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
          <div
            className="
    absolute
    right-2
    bottom-8
    z-20
    rounded-3xl
    border
    border-white/40
    bg-white/90
    px-5
    py-4
    shadow-[0_20px_45px_rgba(15,23,42,0.15)]
    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_30px_60px_rgba(14,165,233,0.25)]

    sm:right-4
    lg:-right-10
    lg:bottom-12
  "
          >
            <div className="flex items-center gap-4">
              <div
                className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-emerald-500
        to-cyan-500
        text-white
        shadow-lg
      "
              >
                <FaUsers className="text-xl" />
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">120+</h3>

                <p className="text-sm font-medium text-slate-500">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
