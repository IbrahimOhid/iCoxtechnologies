import { SlArrowUp } from "react-icons/sl";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative container-section overflow-hidden bg-gradient-to-r from-primary via-sky-600 to-cyan-600">
      <div className=" relative z-10">
        {/* ─── Footer Grid ─── */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              iCox Technologies
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              We are a digital agency focused on strategy, design and
              development—helping brands build meaningful digital experiences
              and grow sustainably.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition hover:text-white"
                >
                  Video Editing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MdPhone className="mt-0.5 text-lg text-white/60" />
                <span>+880 1317-878615</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MdEmail className="mt-0.5 text-lg text-white/60" />
                <span>icoxtechnologies@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MdLocationOn className="mt-0.5 text-lg text-white/60" />
                <span>Islamabad, Eidgaon, Cox's Bazar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-white/70 md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">iCox Technologies</span>. All
            rights reserved.
          </p>

          {/* Scroll Button */}
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-[0_14px_35px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:text-primary active:scale-95 sm:h-14 sm:w-14"
          >
            <SlArrowUp className="text-lg transition-transform duration-300 group-hover:-translate-y-1 sm:text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
