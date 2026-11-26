import {
  FaImages,
  FaFilm,
  FaVideo,
  FaCheck,
  FaBullhorn,
  FaChartLine,
  FaPaintBrush,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
  FaCamera,
  FaCalendarAlt,
  FaBullseye,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

/* ── Content (from the iCox Social Media Management package PDF) ── */
const meta = [
  { label: "Duration", value: "3 months recommended", icon: FaCalendarAlt },
  { label: "Platform", value: "Facebook included", icon: FaFacebookF },
  {
    label: "Service",
    value: "End-to-end content & ads",
    icon: FaProjectDiagram,
  },
];

const stats = [
  { value: "60", label: "Social media post designs", icon: FaImages },
  { value: "15", label: "Short-form reels", icon: FaFilm },
  { value: "3", label: "Long-form videos (3–5 minutes)", icon: FaVideo },
];

const included = [
  { name: "Captions & copywriting", value: "Every post & video" },
  { name: "Posting & scheduling", value: "Included" },
  { name: "Competitor research & strategy", value: "Included" },
  { name: "Monthly content plan & calendar", value: "Included" },
  { name: "Performance tracking & monthly report", value: "Included" },
  {
    name: "Facebook & Instagram boosting (set-up & management)",
    value: "Ad budget paid separately",
    warn: true,
  },
];

const pillars = [
  {
    title: "Strategy & Planning",
    icon: FaBullseye,
    items: [
      "Competitor research and benchmarking",
      "Brand voice and content pillars",
      "Monthly content calendar",
      "Hashtag and keyword research",
    ],
  },
  {
    title: "Content Creation",
    icon: FaPaintBrush,
    items: [
      "60 custom post designs, on-brand",
      "15 reels, shot and edited in-house",
      "3 long-form videos with motion graphics and color grading",
      "Captions written for your audience",
    ],
  },
  {
    title: "Publishing & Tracking",
    icon: FaChartLine,
    items: [
      "Scheduled and published on time",
      "Ongoing performance monitoring",
      "Clear monthly report with recommendations",
      "Optimization based on real data",
    ],
  },
  {
    title: "Paid Advertising",
    icon: FaBullhorn,
    items: [
      "Boosted posts and Facebook campaigns",
      "Ad spend paid directly by you to Meta",
      "No markup on your ad budget",
      "Full campaign set-up and optimization",
    ],
  },
];

const months = [
  {
    label: "Month 1",
    title: "Research & Foundation",
    text: "Competitor study, strategy, content plan and first campaigns.",
    bar: "bg-lime-400",
  },
  {
    label: "Month 2",
    title: "Build & Engage",
    text: "Consistent publishing, audience growth and campaign optimization.",
    bar: "bg-emerald-700",
  },
  {
    label: "Month 3",
    title: "Grow & Scale",
    text: "Refined content, stronger reach and clear results to build on.",
    bar: "bg-emerald-950",
  },
];

const otherPlatforms = [FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn];

/* ── Small shared pieces ───────────────────────────────── */
const SectionTitle = ({ children }) => (
  <div>
    <h2 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">
      {children}
    </h2>
    <span className="mt-3 block h-1.5 w-14 rounded-full bg-lime-400" />
  </div>
);

const CheckBadge = () => (
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/30 text-emerald-700">
    <FaCheck className="h-2.5 w-2.5" aria-hidden="true" />
  </span>
);

const SocialMediaManagement = ({ price = "[Price]", onClose }) => {
  const terms = [
    "Recommended duration: 3 months, billed monthly",
    `Monthly fee: ${price} BDT per month`,
    "Ad budget is paid directly to Meta and is separate from our service fee",
    "Deliverables are fixed for each month, as listed above",
    "Additional posts, videos, platforms or campaigns are available as add-ons",
  ];

  return (
    <div className="relative isolate w-full overflow-hidden bg-white text-emerald-950">
      {/* Light animations (disabled for reduced-motion users) */}
      <style>{`
        @keyframes smm-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes smm-drift   { from { transform: translate(0, 0) scale(1); } to { transform: translate(30px, -20px) scale(1.12); } }
        @keyframes smm-shine   { from { transform: translateX(0) skewX(-12deg); } to { transform: translateX(520%) skewX(-12deg); } }
        .smm-fade-up { animation: smm-fade-up 0.8s ease-out backwards; }
        .smm-drift   { animation: smm-drift 9s ease-in-out infinite alternate; }
        .smm-shine   { animation: smm-shine 4.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .smm-fade-up, .smm-drift, .smm-shine { animation: none; } }
      `}</style>

      {/* ───────────── COVER ───────────── */}
      <header className="relative isolate overflow-hidden bg-emerald-950">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [-webkit-mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]" />
          <div className="smm-drift absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime-400/20 blur-3xl" />
          <div
            className="smm-drift absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-green-400/20 blur-3xl"
            style={{ animationDelay: "-4s" }}
          />
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-green-500 via-lime-400 to-green-500" />
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-lime-400 hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-300 active:scale-95 sm:right-6 sm:top-6"
          >
            <FaTimes />
          </button>
        )}

        <div className="mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-between gap-16 px-4 pb-10 pt-8 sm:min-h-[34rem] sm:px-6 sm:pt-10 lg:px-8">
          <p className="text-lg font-bold text-white sm:text-xl">
            iCox <span className="text-lime-400">Technologies</span>
          </p>

          <div>
            <p
              className="smm-fade-up text-xs font-bold uppercase tracking-[0.3em] text-lime-400"
              style={{ animationDelay: "0.05s" }}
            >
              Service Package
            </p>
            <h1
              className="smm-fade-up mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              Social Media
              <span className="block bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p
              className="smm-fade-up mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg"
              style={{ animationDelay: "0.25s" }}
            >
              We plan, create, publish and track your social media, so your
              brand stays visible, consistent and growing every month.
            </p>
          </div>

          <dl
            className="smm-fade-up grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-3"
            style={{ animationDelay: "0.35s" }}
          >
            {meta.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/15 text-lime-300 ring-1 ring-lime-400/30">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-bold text-lime-400">{label}</dt>
                  <dd className="text-sm text-white/80">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:space-y-20 sm:px-6 sm:py-16 lg:px-8">
        {/* ───────────── WHAT'S INCLUDED ───────────── */}
        <section>
          <SectionTitle>What&rsquo;s Included Every Month</SectionTitle>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white shadow-[0_30px_60px_-30px_rgba(6,78,59,0.6)] ring-1 ring-lime-400/20 transition-all duration-500 hover:-translate-y-1.5 motion-reduce:transition-none sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-400/15 blur-3xl transition-opacity duration-500 group-hover:bg-lime-400/30"
                />
                <Icon
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-3xl text-lime-300/60 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                />
                <p className="relative text-6xl font-black tracking-tight text-lime-400 sm:text-7xl">
                  {value}
                </p>
                <p className="relative mt-3 text-base font-semibold text-white">
                  {label}
                </p>
                <p className="relative mt-1 text-xs font-bold uppercase tracking-wider text-white/50">
                  per month
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {included.map(({ name, value, warn }) => (
              <li
                key={name}
                className="flex flex-col gap-2 rounded-2xl border border-emerald-900/10 bg-white px-5 py-4 shadow-sm transition-colors hover:border-lime-400/60 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="flex items-start gap-3 text-sm font-semibold text-emerald-950 sm:text-base">
                  <CheckBadge />
                  {name}
                </span>
                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                    warn
                      ? "bg-amber-100 text-amber-800"
                      : "bg-lime-100 text-emerald-900"
                  }`}
                >
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────────── PILLARS ───────────── */}
        <section>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, icon: Icon, items }) => (
              <div
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-lime-400/60 hover:shadow-[0_28px_50px_-24px_rgba(6,78,59,0.45)] motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-500 to-lime-400 transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-lime-400 text-2xl text-emerald-950 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-emerald-950">
                  {title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckBadge />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Production & Equipment */}
          <div className="mt-5 flex flex-col gap-4 rounded-3xl border border-lime-300 bg-lime-50 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-950 text-xl text-lime-300">
              <FaCamera aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-emerald-950">
                Production &amp; Equipment
              </h3>
              <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
                Our team shoots your content using our own camera and phone
                equipment. Travel, location, equipment rental and other
                production costs are not included in the monthly fee and will be
                agreed in advance, if needed.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── WHY 3 MONTHS ───────────── */}
        <section>
          <SectionTitle>Why 3 Months?</SectionTitle>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
            Building a strong online presence takes time. Results grow with
            consistency, and most brands need around three months of steady work
            to build momentum, audience trust and measurable growth.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {months.map(({ label, title, text, bar }) => (
              <div
                key={label}
                className="group rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
              >
                <span className={`block h-1.5 w-full rounded-full ${bar}`} />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-emerald-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── PLATFORMS ───────────── */}
        <section>
          <SectionTitle>Platforms</SectionTitle>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-900 bg-lime-50 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-950 px-3 py-1 text-xs font-bold text-lime-300">
                  Included
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 text-lg text-lime-300">
                  <FaFacebookF aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-emerald-950">
                Facebook
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                Page management, posts, reels, boosting and Facebook ad
                campaigns are all covered in the monthly fee.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  Add-on
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  {otherPlatforms.map((Icon, i) => (
                    <Icon key={i} className="text-lg" aria-hidden="true" />
                  ))}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-emerald-950">
                Other Platforms
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                Instagram, TikTok, YouTube, LinkedIn and others can be added for
                an additional monthly fee, based on the platform and content
                volume.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── PACKAGE TERMS ───────────── */}
        <section>
          <SectionTitle>Package Terms</SectionTitle>

          <ul className="mt-8 space-y-3">
            {terms.map((term) => (
              <li
                key={term}
                className="flex items-start gap-3 text-base text-slate-700"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-lime-500 bg-lime-200" />
                {term}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex flex-col gap-2 overflow-hidden rounded-2xl bg-lime-400 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span
              aria-hidden="true"
              className="smm-shine absolute inset-y-0 -left-1/4 w-1/5 bg-white/30"
            />
            <span className="relative text-base font-bold text-emerald-950">
              Monthly Package Fee
            </span>
            <span className="relative text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
              {price} BDT
            </span>
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-emerald-950 p-8 text-center shadow-[0_30px_60px_-30px_rgba(6,78,59,0.6)] ring-1 ring-lime-400/20 sm:p-12">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="smm-drift absolute -left-20 -top-24 h-72 w-72 rounded-full bg-lime-400/25 blur-3xl" />
            <div
              className="smm-drift absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-green-400/25 blur-3xl"
              style={{ animationDelay: "-4s" }}
            />
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-lime-400 sm:text-3xl md:text-4xl">
            Ready to grow your brand?
          </h2>
          <p className="mt-3 text-base text-white/80 sm:text-lg">
            Start a conversation with us today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/8801317878615"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center justify-center gap-2.5 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-emerald-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 sm:text-base"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              WhatsApp: +880 1317-878615
            </a>
            <a
              href="mailto:icoxtechnologies@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400 hover:text-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 sm:text-base"
            >
              <FaEnvelope className="text-lg" aria-hidden="true" />
              icoxtechnologies@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
