import React from "react";
import Heading from "../../components/Heading/Heading";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { LuMapPinned } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { socialLinks } from "../../data/socialData";

/*   Offices      */
const offices = [
  {
    id: "coxsbazar",
    name: "Cox's Bazar Office",
    watermark: "Cox's Bazar",
    address: [
      "RK Mension, 5th Floor",
      "Koborstanroad, Taraboniar Chara,",
      "Cox's Bazar 4700",
    ],
    mapQuery:
      "RK Mension, 5th Floor Koborstanroad, Taraboniar Chara, Cox's Bazar 4700",
  },
  {
    id: "eidgaon",
    name: "Eidgaon Office",
    watermark: "Eidgaon",
    address: [
      "Epon Plaza (Ground Floor)",
      "(Near Dutch-Bangla Bank ATM Booth)",
      "Eidgaon Bus Station, Eidgaon, Cox's Bazar 4702",
    ],
    mapQuery:
      "Epon Plaza, Near Dutch-Bangla Bank ATM Booth, Eidgaon Bus Station, Eidgaon, Cox's Bazar 4702",
  },
];

const mapUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

/*   Shared styles   */
const labelClass =
  "text-xs font-bold uppercase tracking-wider text-emerald-700";
const valueClass =
  "text-base font-semibold text-emerald-950 transition-colors hover:text-emerald-700 sm:text-lg";
const ctaClass =
  "group/cta inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-900 transition-colors hover:bg-lime-400 hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500";
const arrowClass =
  "text-lg transition-transform duration-300 group-hover/cta:translate-x-1";

/*   Light info card                   ─ */
const InfoCard = ({ watermark, icon: Icon, children }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-lime-400/60 hover:shadow-[0_28px_50px_-24px_rgba(6,78,59,0.45)] motion-reduce:transition-none sm:p-8">
    {/* Top accent that draws in on hover */}
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-500 to-lime-400 transition-transform duration-500 group-hover:scale-x-100"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-2 right-4 select-none text-5xl font-black uppercase tracking-tight text-emerald-900/[0.05] sm:text-6xl"
    >
      {watermark}
    </span>

    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-lime-400 text-2xl text-emerald-950 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:h-16 sm:w-16 sm:text-3xl">
        <Icon />
      </div>
      <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">{children}</div>
    </div>
  </div>
);

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(6,78,59,0.08)_1px,transparent_0)] [background-size:24px_24px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-lime-300/25 blur-3xl"
      />

      <div className="container-section">
        {/*  ─ Heading  ─ */}
        <Heading
          title={"Contact Us"}
          paragraph={"Start Your Journey with Us"}
        />

        {/*  ─ Contact Cards  ─ */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8">
          {/* Reach Us — featured dark card */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white hover:shadow-lg ring-1 ring-lime-400/20 transition-all duration-500 hover:-translate-y-1.5 motion-reduce:transition-none sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime-400/20 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2 right-4 select-none text-5xl font-black uppercase tracking-tight text-white/[0.05] sm:text-6xl"
            >
              Reach Us
            </span>

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-ping rounded-2xl bg-lime-400/30 [animation-duration:2.8s] motion-reduce:animate-none"
                />
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-lime-400 text-2xl text-emerald-950 shadow-lg shadow-lime-400/25 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:text-3xl">
                  <TfiHeadphoneAlt />
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-lime-300">
                    Phone
                  </h3>
                  <a
                    href="tel:+8801701715369"
                    className="text-base font-semibold text-white transition-colors hover:text-lime-300 sm:text-lg"
                  >
                    +880 1317-878615
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-lime-300">
                    Email
                  </h3>
                  <a
                    href="mailto:icoxtechnologies@gmail.com"
                    className="break-all text-base font-semibold text-white transition-colors hover:text-lime-300 sm:text-lg"
                  >
                    icoxtechnologies@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:icoxtechnologies@gmail.com"
                  className="group/cta inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                >
                  Send Your Mail
                  <HiOutlineArrowLongRight className={arrowClass} />
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <InfoCard watermark="Hours" icon={MdAccessTime}>
            <div className="space-y-2.5 text-base text-slate-700 sm:text-lg">
              <p className="flex flex-wrap items-center gap-x-2">
                <span className="font-bold text-emerald-950">SAT - THU :</span>
                <span>06:00 AM - 10:00 PM</span>
              </p>
              <p className="flex flex-wrap items-center gap-x-2">
                <span className="font-bold text-emerald-950">Friday :</span>
                <span className="rounded-full bg-red-50 px-3 py-0.5 text-sm font-semibold text-red-600">
                  Closed
                </span>
              </p>
            </div>
            <button type="button" className={ctaClass}>
              Make Appointment
              <HiOutlineArrowLongRight className={arrowClass} />
            </button>
          </InfoCard>

          {/* Offices */}
          {offices.map((office) => (
            <InfoCard
              key={office.id}
              watermark={office.watermark}
              icon={LuMapPinned}
            >
              <h3 className={labelClass}>{office.name}</h3>
              <address className="space-y-0.5 text-base not-italic leading-relaxed text-slate-700 sm:text-lg">
                {office.address.map((line, i) => (
                  <span
                    key={line}
                    className={`block ${
                      i === 0 ? "font-semibold text-emerald-950" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={mapUrl(office.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClass}
              >
                View on Map
                <HiOutlineArrowLongRight className={arrowClass} />
              </a>
            </InfoCard>
          ))}
        </div>

        {/*  ─ Social Connect  ─ */}
        <div className="mt-16 text-center lg:mt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl lg:text-4xl">
            Social{" "}
            <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-3 rounded-3xl border border-emerald-900/10 bg-white/70 p-3 shadow-sm backdrop-blur-sm sm:gap-4 sm:p-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.target}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg sm:h-14 sm:w-14"
                  style={{
                    backgroundColor: "var(--bg-color, #f1f5f9)",
                    color: "var(--icon-color, #475569)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty(
                      "--bg-color",
                      social.color,
                    );
                    e.currentTarget.style.setProperty(
                      "--icon-color",
                      "#ffffff",
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--bg-color", "#f1f5f9");
                    e.currentTarget.style.setProperty(
                      "--icon-color",
                      "#475569",
                    );
                  }}
                >
                  <Icon className="text-lg sm:text-xl" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
