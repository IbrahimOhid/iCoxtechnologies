import { SlArrowUp } from "react-icons/sl";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn, MdArrowOutward } from "react-icons/md";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/iCoxtechnologies",
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
    "group flex w-fit items-center gap-2.5 text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600";

  const headingClass =
    "mb-6 text-sm font-bold uppercase tracking-[0.12em] text-slate-900";

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-100/60 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-50 blur-[100px]"
      />

      <div className="container-section relative z-10 py-14 sm:py-16 lg:py-20">
        {/* Top Brand Section */}
        <div className="mb-14 flex flex-col justify-between gap-8 rounded-2xl border border-slate-100 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-6 shadow-sm sm:p-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <a href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-lg font-extrabold text-white shadow-lg shadow-blue-500/20">
                iC
              </span>

              <span className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                iCox{" "}
                <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                  Technologies
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              We transform ideas into impactful digital experiences through
              thoughtful strategy, creative design, and reliable technology.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Let's Work Together
            <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* About Company */}
          <div>
            <h3 className={headingClass}>
              About Us
              <span className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              Your digital growth partner. We help businesses build a stronger
              online presence with modern, creative, and user-focused digital
              solutions.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
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
              <span className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={linkClass}>
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-3" />
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
              <span className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className={linkClass}>
                    <span>{service}</span>
                    <MdArrowOutward className="text-base text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className={headingClass}>
              Get In Touch
              <span className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
            </h3>

            <p className="mb-6 text-sm leading-6 text-slate-600">
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
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-xl text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon />
                    </span>

                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-medium text-slate-500">
                        {label}
                      </span>

                      <span className="mt-1 block break-words text-sm font-medium leading-5 text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
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
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-7 sm:mt-16 md:flex-row">
          <p className="text-center text-xs leading-6 text-slate-500 sm:text-sm md:text-left">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.facebook.com/iCoxtechnologies"
              target="_blank"
              className="font-bold text-slate-800 transition-colors hover:text-blue-600"
            >
              iCox Technologies
            </a>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 sm:gap-5 sm:text-sm">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-blue-600"
            >
              Privacy Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <a href="/terms" className="transition-colors hover:text-blue-600">
              Terms of Use
            </a>
          </div>

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            <SlArrowUp className="text-lg transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
