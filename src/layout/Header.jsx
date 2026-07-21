import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

import Logo from "/logo/icox.webp";

import { navbarData } from "../data/navbar.js";
import Button from "../components/Button/Button";
import WhatsAppButton from "../components/Button/WhatsAppButton";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          {navbarData.map((item) => (
            <div key={item.id} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-3
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "text-slate-700 hover:bg-primary/10 hover:text-primary"
                  }
                `
                }
              >
                {item.icon && <item.icon className="text-base" />}

                {item.name}

                {item.children && (
                  <FaChevronDown
                    className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                  />
                )}

                {item.badge && (
                  <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] text-white">
                    {item.badge}
                  </span>
                )}
              </NavLink>

              {/* Dropdown */}
              {item.children && (
                <div
                  className="
                    invisible
                    absolute
                    left-0
                    top-full
                    mt-2
                    w-64
                    rounded-2xl
                    bg-white
                    p-2
                    opacity-0
                    shadow-2xl
                    transition-all
                    duration-300
                    group-hover:visible
                    group-hover:opacity-100
                  "
                >
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.id}
                      to={sub.path}
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-primary
                        hover:text-white
                      "
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          <WhatsAppButton />

          <Button value="Get Started" phone="01701715369" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            text-xl
            transition
            hover:bg-primary
            hover:text-white
            lg:hidden
          "
        >
          <GrMenu />
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          h-full
          w-[320px]
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          lg:hidden

          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b p-5">
          <img src={Logo} alt="" className="h-10" />

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-slate-100
              hover:bg-red-500
              hover:text-white
            "
          >
            <RxCross2 />
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col gap-2 p-5">
          {navbarData.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                text-base
                font-semibold
                transition-all

                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }
              `
              }
            >
              {item.icon && <item.icon className="text-xl shrink-0" />}

              <span className="flex-1">{item.name}</span>

              {item.badge && (
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-5 space-y-3">
          <WhatsAppButton />

          <Button value="Get Started" phone="01701715369" />
        </div>
      </aside>
    </header>
  );
};

export default Header;
