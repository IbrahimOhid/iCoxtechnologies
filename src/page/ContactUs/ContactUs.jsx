import React from "react";
import Heading from "../../components/Heading/Heading";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { LuMapPinned } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { socialLinks } from "../../data/socialData";

const ContactUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container-section">
        {/* ─── Heading ─── */}
        <Heading
          title={"Contact Us"}
          paragraph={"Start Your Journey with Us"}
        />

        {/* ─── Contact Cards ─── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 mt-8 sm:mt-12">
          {/* Reach Us */}
          <div className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <span className="absolute bottom-4 right-5 text-lg sm:text-xl font-bold uppercase text-slate-200/60 pointer-events-none select-none">
              Reach Us
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/25">
                <TfiHeadphoneAlt className="text-2xl sm:text-3xl text-primary transition-all duration-500 group-hover:text-white" />
              </div>
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary">
                    Phone
                  </h3>
                  <a
                    href="tel:+8801701715369"
                    className="text-base sm:text-lg font-semibold text-slate-800 hover:text-primary transition-colors"
                  >
                    +880 1317-878615
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary">
                    Email
                  </h3>
                  <a
                    href="mailto:icoxtechnologies@gmail.com"
                    className="text-base sm:text-lg font-semibold text-slate-800 hover:text-primary transition-colors break-all"
                  >
                    icoxtechnologies@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:icoxtechnologies@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase text-secondary hover:text-primary transition-colors"
                >
                  Send Your Mail
                  <HiOutlineArrowLongRight className="text-lg transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <span className="absolute bottom-4 right-5 text-lg sm:text-xl font-bold uppercase text-slate-200/60 pointer-events-none select-none">
              Hours
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/25">
                <MdAccessTime className="text-2xl sm:text-3xl text-primary transition-all duration-500 group-hover:text-white" />
              </div>
              <div className="flex-1 space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                  <span className="font-bold text-secondary">SAT - THU :</span>{" "}
                  06:00 AM - 10:00 PM
                  <br />
                  <span className="font-bold text-secondary">
                    Friday :
                  </span>{" "}
                  Closed
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-bold uppercase text-secondary hover:text-primary transition-colors">
                  Make Appointment
                  <HiOutlineArrowLongRight className="text-lg transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <span className="absolute bottom-4 right-5 text-lg sm:text-xl font-bold uppercase text-slate-200/60 pointer-events-none select-none">
              Location
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/25">
                <LuMapPinned className="text-2xl sm:text-3xl text-primary transition-all duration-500 group-hover:text-white" />
              </div>
              <div className="flex-1 space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                  Islamabad, Eidgaon,
                  <br />
                  Eidgaon Bus Station, Cox's Bazar
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase text-secondary hover:text-primary transition-colors"
                >
                  View on Map
                  <HiOutlineArrowLongRight className="text-lg transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Social Connect ─── */}
        <div className="mt-16 lg:mt-20 text-center">
          <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
            Social Connect
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.target}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
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
