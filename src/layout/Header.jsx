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

  // helper to get active link styles (underline effect)
  const linkClasses = ({ isActive }) =>
    `relative text-sm font-semibold transition-all duration-300 
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full 
     after:bg-primary after:transition-all after:duration-300 
     ${
       isActive
         ? "text-primary after:w-full"
         : "text-slate-700 hover:text-primary after:w-0 hover:after:w-full"
     }`;

  return (
    <>
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">
            {/* LOGO */}
            <NavLink to="/" className="shrink-0">
              <img
                src={Logo}
                alt="Company logo"
                className="h-24 w-auto -ml-5 sm:h-24 lg:h-44 object-contain select-none"
              />
            </NavLink>

            {/* ─── DESKTOP NAV (lg+) ─── */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-[15px]">
              {navbarData.map((item) => (
                <li key={item.id} className="relative group">
                  {item.children ? (
                    // ---- Dropdown parent ----
                    <>
                      <button
                        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-slate-700 hover:text-primary transition-all duration-300 group-hover:bg-primary/5"
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

                      {/* Dropdown menu */}
                      <div
                        className="invisible opacity-0 absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] 
                                   min-w-[220px] rounded-2xl bg-white/95 backdrop-blur-lg p-1.5 
                                   shadow-xl shadow-slate-200/60 border border-slate-100/80
                                   transition-all duration-300 group-hover:visible group-hover:opacity-100 
                                   group-hover:translate-y-0 translate-y-1 origin-top-center"
                      >
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 
                               ${
                                 isActive
                                   ? "bg-primary/10 text-primary"
                                   : "text-slate-700 hover:bg-primary hover:text-white"
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
                        `flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 
                         ${
                           isActive
                             ? "bg-primary text-white shadow-sm shadow-primary/30"
                             : "text-slate-700 hover:bg-primary/5 hover:text-primary"
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

            {/* ─── RIGHT SIDE (WhatsApp) ─── */}
            <div className="hidden md:flex items-center justify-end">
              <WhatsAppButton />
            </div>

            {/* ─── MOBILE MENU TOGGLE ─── */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl bg-slate-100 cursor-pointer text-primary transition-all hover:bg-slate-200 active:scale-95"
            >
              <GrMenu className="text-xl" />
            </button>
          </div>
        </nav>
      </header>

      {/* ─── OVERLAY ─── */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300 
          ${mobileSidebarOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden="true"
      />

      {/* ─── MOBILE SIDEBAR ─── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-[380px] bg-white/98 backdrop-blur-xl shadow-2xl 
          transition-transform duration-300 ease-out 
          ${mobileSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-end border-b border-slate-100 px-5 py-4">
            <button
              onClick={closeSidebar}
              className="rounded-lg p-1 text-red-500 cursor-pointer transition hover:bg-slate-100 active:scale-95"
              aria-label="Close menu"
            >
              <RxCross2 size={26} />
            </button>
          </div>

          {/* Sidebar navigation */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
            <nav className="space-y-1">
              {navbarData.map((item) => {
                if (item.children) {
                  // Dropdown in mobile
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen((prev) =>
                            item.id === 3 ? !prev : false,
                          )
                        }
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                      >
                        <span className="flex items-center gap-3">
                          {item.icon && <item.icon className="text-xl" />}
                          {item.name}
                          {item.badge && (
                            <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <MdKeyboardArrowDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            mobileDropdownOpen && item.id === 3
                              ? "rotate-180 text-primary"
                              : "text-slate-400"
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden pl-4 transition-all duration-300 ${
                          mobileDropdownOpen && item.id === 3
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={sub.path}
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                              `block rounded-lg px-4 py-2.5 text-sm font-medium transition 
                               ${
                                 isActive
                                   ? "bg-primary/10 text-primary"
                                   : "text-slate-600 hover:bg-slate-50 hover:text-primary"
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
                      `flex items-center gap-3 rounded-xl px-3 py-3.5 text-base font-semibold transition 
                       ${
                         isActive
                           ? "bg-primary/10 text-primary"
                           : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                       }`
                    }
                  >
                    {item.icon && <item.icon className="text-xl" />}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA at bottom */}
            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
