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
import FloatingCard from "../Card/FloatingCard";
import AllWorkButton from "../Button/AllWorkButton";

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
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    font-black leading-tight tracking-tight
    text-slate-900
  "
          >
            <span className="block">We design & build</span>
            <span
              className="
      inline-block
      bg-gradient-to-r from-emerald-500 to-cyan-500
      bg-clip-text text-transparent
    "
            >
              high-impact digital
            </span>
            <span className="block">Experiences</span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-8
              text-slate

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

            <AllWorkButton value={"View Our Work"}/>
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
            "
          />
          {/* Floating Card */}
          <FloatingCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
