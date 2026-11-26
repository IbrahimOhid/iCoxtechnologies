import { SlArrowUp } from "react-icons/sl";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn, MdArrowOutward } from "react-icons/md";
import AllWorkButton from "../components/Button/AllWorkButton";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/iCoxtechnologies",
      target: "_blank",
    },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
    { name: "X", icon: FaXTwitter, href: "#" },
    { name: "YouTube", icon: FaYoutube, href: "#" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#aboutUs" },
    { name: "Our Services", href: "#services" },
    { name: "Our Projects", href: "#project" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
    "Graphic Design",
    "SEO Optimization",
  ];

  const contactInfo = [
    {
      icon: MdPhone,
      label: "Phone",
      value: "+880 1317-878615",
      href: "tel:+8801317878615",
    },
    {
      icon: MdEmail,
      label: "Email",
      value: "icoxtechnologies@gmail.com",
      href: "mailto:icoxtechnologies@gmail.com",
    },
    {
      icon: MdLocationOn,
      label: "Location",
      value: "Islamabad, Eidgaon, Cox's Bazar",
      href: "https://www.google.com/maps/search/?api=1&query=Eidgaon%2C+Cox%27s+Bazar",
    },
  ];

  const linkClass =
    "group flex w-fit items-center gap-2.5 text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-lime-300";

  const headingClass =
    "mb-6 text-sm font-bold uppercase tracking-[0.12em] text-white";

  const barClass =
    "mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-green-400 to-lime-400";

  return (
    <footer className="relative isolate overflow-hidden bg-emerald-950">
      {/* Light animation (disabled for reduced-motion users) */}
      <style>{`
        @keyframes footer-drift { from { transform: translate(0, 0) scale(1); } to { transform: translate(30px, -20px) scale(1.12); } }
        .footer-drift { animation: footer-drift 10s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) { .footer-drift { animation: none; } }
      `}</style>

      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [-webkit-mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />
        <div className="footer-drift absolute -left-24 top-0 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
        <div
          className="footer-drift absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-green-400/15 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-green-500 via-lime-400 to-green-500" />

        {/* Oversized wordmark */}
        <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[8rem] font-black leading-none tracking-tighter text-white/[0.03] sm:text-[12rem] lg:text-[16rem]">
          iCox
        </span>
      </div>

      <div className="container-section relative z-10 py-14 sm:py-16 lg:py-20">
        {/* Top Brand Section */}
        <div className="relative mb-14 flex flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8 md:flex-row md:items-center">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/70 to-transparent"
          />

          <div className="max-w-xl">
            <a href="/" className="inline-flex items-center gap-3">
              <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                iCox{" "}
                <span className="bg-gradient-to-r from-green-400 via-lime-300 to-lime-400 bg-clip-text text-transparent">
                  Technologies
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
              We transform ideas into impactful digital experiences through
              thoughtful strategy, creative design, and reliable technology.
            </p>
          </div>

          <AllWorkButton value={"Let's Work Together"} path={"contact"} />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* About Company */}
          <div>
            <h3 className={headingClass}>
              About Us
              <span className={barClass} />
            </h3>

            <p className="text-sm leading-7 text-white/70">
              Your digital growth partner. We help businesses build a stronger
              online presence with modern, creative, and user-focused digital
              solutions.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href, target }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target={target}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-green-400 hover:to-lime-400 hover:text-emerald-950 hover:shadow-lg hover:shadow-lime-400/25"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headingClass}>
              Quick Links
              <span className={barClass} />
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={linkClass}>
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className={headingClass}>
              Our Services
              <span className={barClass} />
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className={linkClass}>
                    <span>{service}</span>
                    <MdArrowOutward className="text-base text-lime-300 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className={headingClass}>
              Get In Touch
              <span className={barClass} />
            </h3>

            <p className="mb-6 text-sm leading-6 text-white/70">
              Have a project in mind? Let's discuss how we can help your
              business grow.
            </p>

            <ul className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Location" ? "_blank" : undefined}
                    rel={
                      label === "Location" ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-lime-400 text-xl text-emerald-950 shadow-md shadow-lime-400/20 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon />
                    </span>

                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-medium text-white/55">
                        {label}
                      </span>

                      <span className="mt-1 block break-words text-sm font-medium leading-5 text-white transition-colors duration-300 group-hover:text-lime-300">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:mt-16 md:flex-row">
          <p className="text-center text-xs leading-6 text-white/60 sm:text-sm md:text-left">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.facebook.com/iCoxtechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white transition-colors hover:text-lime-300"
            >
              iCox Technologies
            </a>
            . All rights reserved.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/60 sm:gap-5 sm:text-sm">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-lime-300"
            >
              Privacy Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-white/30" />

            <a href="/terms" className="transition-colors hover:text-lime-300">
              Terms of Use
            </a>
          </div> */}

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-lime-400 text-emerald-950 shadow-lg shadow-lime-400/25 transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 active:scale-95"
          >
            <SlArrowUp className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
