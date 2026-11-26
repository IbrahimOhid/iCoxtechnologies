import { HiSparkles } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Logo from "/logo/icox.webp";
import { servicesData } from "../../data/serviceData";
import Button from "../Button/Button";
import AllWorkButton from "../Button/AllWorkButton";

// Services shown around the hub (taken from the same data the Services section uses).
const services = servicesData.slice(0, 8);

// Radius of the service ring, as a % of the infographic's width.
const RADIUS = 35;

const nodes = services.map((service, i) => {
  const angle = ((360 / services.length) * i - 90) * (Math.PI / 180);
  return {
    service,
    x: +(50 + RADIUS * Math.cos(angle)).toFixed(2),
    y: +(50 + RADIUS * Math.sin(angle)).toFixed(2),
  };
});

const Hero = () => {
  return (
    <section className="morph relative isolate overflow-hidden">
      {/* Light animations (all disabled for users who prefer reduced motion) */}
      <style>{`
        @keyframes hero-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes hero-pop     { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: none; } }
        @keyframes hero-float   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes hero-dash    { to { stroke-dashoffset: -20; } }
        @keyframes hero-spin    { to { transform: rotate(360deg); } }
        @keyframes hero-ping    { 0% { transform: scale(0.85); opacity: 0.6; } 100% { transform: scale(1.7); opacity: 0; } }

        .hero-fade-up { animation: hero-fade-up 0.8s ease-out both; }
        .hero-pop     { animation: hero-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
        .hero-float   { animation: hero-float 5s ease-in-out infinite; }
        .hero-spoke   { stroke-dasharray: 4 6; animation: hero-dash 2.4s linear infinite; }
        .hero-spin    { animation: hero-spin 28s linear infinite; }
        .hero-ping    { animation: hero-ping 3.6s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up, .hero-pop, .hero-float, .hero-spoke, .hero-spin, .hero-ping { animation: none !important; }
        }
      `}</style>

      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [-webkit-mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
      </div>

      <div className="container-section grid items-center gap-14 py-14 md:py-20 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <span className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-sm font-semibold text-lime-300">
            <HiSparkles className="text-base" aria-hidden="true" />
            Digital Agency
          </span>

          {/* Heading */}
          <h1
            className="hero-fade-up mt-6 text-4xl font-black leading-[1.3] tracking-normal text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block">Your Complete </span>
            <span className="inline-block bg-gradient-to-r from-green-400 via-lime-300 to-lime-400 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="block">Solutions Partner.</span>
          </h1>

          {/* Description */}
          <p
            className="hero-fade-up mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            From the first post to the final pixel - we plan, create, promote
            and build your brand, all under one roof.
          </p>

          {/* Buttons */}
          <div
            className="hero-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Button value={"Discuss Your Project"} path={"contact"} />

            <AllWorkButton value={"View Our Work"} path={"work"} />
          </div>
        </div>

        {/* RIGHT — services infographic */}
        <div className="relative flex justify-center">
          <div
            aria-label="Our services"
            className="relative aspect-square w-full max-w-[520px]"
          >
            {/* Soft glow */}
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-lime-400/10 blur-3xl"
            />

            {/* Orbit ring with a travelling light */}
            <div
              aria-hidden="true"
              className="hero-spin absolute rounded-full border border-white/10"
              style={{ inset: `${50 - RADIUS}%` }}
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_14px_3px_rgba(163,230,53,0.7)]" />
            </div>

            {/* Spokes from hub to each service */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              {nodes.map(({ service, x, y }) => (
                <line
                  key={service.id}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="rgba(163,230,53,0.4)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="hero-spoke"
                />
              ))}
            </svg>

            {/* Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className="hero-ping absolute inset-0 rounded-full border-2 border-lime-400/60"
              />
              <span
                aria-hidden="true"
                className="hero-ping absolute inset-0 rounded-full border-2 border-lime-400/60"
                style={{ animationDelay: "1.8s" }}
              />
              <div className="relative h-28 w-28  items-center justify-center rounded-full bg-gradient-to-br bg-primary shadow-[0_0_60px_rgba(163,230,53,0.45)] sm:h-32 sm:w-32">
                {/* LOGO */}
                <NavLink to="/" className="shrink-0">
                  <img
                    src={Logo}
                    alt="Company logo"
                    className="object-contain select-none"
                  />
                </NavLink>
              </div>
            </div>

            {/* Service nodes */}
            <ul className="absolute inset-0 list-none">
              {nodes.map(({ service, x, y }, i) => {
                const Icon = service.icon;

                return (
                  <li
                    key={service.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className="hero-pop"
                      style={{ animationDelay: `${0.4 + i * 0.12}s` }}
                    >
                      <div
                        className="hero-float group flex w-20 flex-col items-center gap-2 sm:w-28"
                        style={{ animationDelay: `${i * 0.6}s` }}
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-lime-300 ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r from-green-500 to-lime-500  group-hover:text-white group-hover:shadow-md group-hover:shadow-lime-400/30 sm:h-16 sm:w-16 sm:text-2xl">
                          <Icon />
                        </span>
                        <span className="line-clamp-2 text-center text-[11px] font-semibold leading-tight text-white/90 sm:text-sm">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
