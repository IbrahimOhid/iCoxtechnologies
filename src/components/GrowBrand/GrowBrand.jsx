import Button from "../../components/Button/Button";
import AllWorkButton from "../Button/AllWorkButton";

const GrowBrand = () => {
  return (
    <div>
      {/* Light animations (disabled for reduced-motion users) */}
      <style>{`
        @keyframes growbrand-drift { from { transform: translate(0, 0) scale(1); } to { transform: translate(28px, -18px) scale(1.1); } }
        @keyframes growbrand-spin  { to { transform: rotate(360deg); } }
        .growbrand-drift { animation: growbrand-drift 9s ease-in-out infinite alternate; }
        .growbrand-spin  { animation: growbrand-spin 40s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .growbrand-drift, .growbrand-spin { animation: none; } }
      `}</style>

      {/* ─── CTA: "How can we help you?" ─── */}
      <div className=" relative isolate mt-16 overflow-hidden  bg-emerald-950 p-8 text-center ring-1 ring-lime-400/20 sm:mt-20 sm:p-12 lg:p-16">
        {/* Background */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* Grid, faded toward the edges */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] [-webkit-mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          {/* Drifting glows */}
          <div className="growbrand-drift absolute -left-20 -top-24 h-72 w-72 rounded-full bg-lime-400/25 blur-3xl" />
          <div
            className="growbrand-drift absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-green-400/25 blur-3xl"
            style={{ animationDelay: "-4s" }}
          />

          {/* Orbit ring with a travelling light */}
          <div className="growbrand-spin absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-white/15">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_14px_3px_rgba(163,230,53,0.7)]" />
          </div>

          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
        </div>

        <div className="mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-green-400 via-lime-300 to-lime-400 bg-clip-text text-transparent">
              grow your brand?
            </span>
          </h3>
          <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Partner with our agency to design, build and scale digital products
            that deliver real business results.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button value={"Start a Project"} phone={"01317878615"} />
            <AllWorkButton value={"View Our Work"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowBrand;
