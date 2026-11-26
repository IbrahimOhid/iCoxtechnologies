import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "/logo/icox.webp";
import { navbarData } from "../data/navbar";
import WhatsAppButton from "../components/Button/WhatsAppButton";

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const closeSidebar = () => {
    setMobileSidebarOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <>
      {/*  HEADER  */}
      <header className="sticky top-0 z-50 bg-primary shadow-sm shadow-emerald-950/20">
        {/* Backdrop glow + bottom accent line (clipped separately so the logo and dropdown can overflow) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />
          <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-green-500 via-lime-400 to-green-500" />
        </div>

        <nav className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20 lg:h-24">
            {/* LOGO */}
            <NavLink to="/" className="shrink-0">
              <img
                src={Logo}
                alt="Company logo"
                className="h-24 w-auto -ml-5 sm:h-24 lg:h-44 object-contain select-none"
              />
            </NavLink>

            {/*  DESKTOP NAV (lg+)  */}
            <ul className="hidden items-center gap-1 rounded-full bg-white/10 p-1.5 text-sm ring-1 ring-white/15 backdrop-blur-md lg:flex">
              {navbarData.map((item) => (
                <li key={item.id} className="group relative">
                  {item.children ? (
                    // ---- Dropdown parent ----
                    <>
                      <button
                        className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 group-hover:bg-white/15 group-hover:text-white"
                        aria-expanded="false"
                      >
                        {item.icon && <item.icon className="text-lg" />}
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown
                          className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                            item.badge ? "ml-0.5" : ""
                          }`}
                        />
                        {item.badge && (
                          <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm shadow-red-500/30">
                            {item.badge}
                          </span>
                        )}
                      </button>

                      {/* Dropdown menu (the ::before bridges the gap so hover doesn't drop) */}
                      <div className="invisible absolute left-1/2 top-[calc(100%+10px)] min-w-[230px] origin-top -translate-x-1/2 translate-y-1 rounded-2xl border border-emerald-900/10 bg-white p-2 opacity-0 shadow-2xl shadow-emerald-950/25 transition-all duration-300 before:absolute before:inset-x-0 before:-top-3 before:h-3 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                isActive
                                  ? "bg-lime-400 font-semibold text-emerald-950"
                                  : "text-slate-700 hover:bg-lime-100 hover:text-emerald-950"
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    // ---- Regular link ----
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 ${
                          isActive
                            ? "bg-gradient-to-r from-green-400 to-lime-400 text-emerald-950 shadow-md shadow-lime-400/30"
                            : "text-white/85 hover:bg-white/15 hover:text-white"
                        }`
                      }
                    >
                      {item.icon && <item.icon className="text-lg" />}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm shadow-red-500/30">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/*  RIGHT SIDE (WhatsApp + mobile toggle)  */}
            <div className="flex items-center gap-3">
              <div className="hidden items-center justify-end md:flex">
                <WhatsAppButton />
              </div>

              {/*  MOBILE MENU TOGGLE  */}
              <button
                onClick={() => setMobileSidebarOpen(true)}
                aria-label="Open menu"
                className="flex h-11 min-h-[44px] w-11 min-w-[44px] cursor-pointer items-center justify-center rounded-2xl bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30 transition-all hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 lg:hidden"
              >
                <GrMenu className="text-xl" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/*  OVERLAY  */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-50 bg-emerald-950/50 backdrop-blur-sm transition-all duration-300 ${
          mobileSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden="true"
      />

      {/*  MOBILE SIDEBAR  */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-[380px] bg-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-green-500 via-lime-400 to-green-500" />

          {/* Sidebar header */}
          <div className="flex items-center justify-end border-b border-emerald-900/10 px-5 py-4">
            <button
              onClick={closeSidebar}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-400 active:scale-95"
              aria-label="Close menu"
            >
              <RxCross2 size={22} />
            </button>
          </div>

          {/* Sidebar navigation */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
            <nav className="space-y-1.5">
              {navbarData.map((item) => {
                if (item.children) {
                  // Dropdown in mobile
                  const open = mobileDropdownOpen && item.id === 3;

                  return (
                    <div key={item.id}>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen((prev) =>
                            item.id === 3 ? !prev : false,
                          )
                        }
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-semibold transition ${
                          open
                            ? "bg-lime-50 text-emerald-950"
                            : "text-slate-700 hover:bg-lime-50 hover:text-emerald-900"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon && (
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-100 text-emerald-800">
                              <item.icon className="text-xl" />
                            </span>
                          )}
                          {item.name}
                          {item.badge && (
                            <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <MdKeyboardArrowDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            open
                              ? "rotate-180 text-emerald-700"
                              : "text-slate-400"
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-6 overflow-hidden border-l-2 border-lime-300 pl-3 transition-all duration-300 ${
                          open
                            ? "mt-1 max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={sub.path}
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                              `block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                                isActive
                                  ? "bg-lime-400 font-semibold text-emerald-950"
                                  : "text-slate-600 hover:bg-lime-50 hover:text-emerald-900"
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }
                // Regular link in mobile
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl px-3 py-3 text-base font-semibold transition ${
                        isActive
                          ? "bg-emerald-950 text-white shadow-md shadow-emerald-950/20"
                          : "text-slate-700 hover:bg-lime-50 hover:text-emerald-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.icon && (
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                              isActive
                                ? "bg-lime-400 text-emerald-950"
                                : "bg-lime-100 text-emerald-800"
                            }`}
                          >
                            <item.icon className="text-xl" />
                          </span>
                        )}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA at bottom */}
            <div className="mt-8  rounded-2xl border border-lime-200 bg-lime-50 p-4">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
