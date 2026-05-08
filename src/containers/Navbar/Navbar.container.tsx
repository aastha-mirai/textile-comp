import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logoWithTextDark from "@assets/svgs/logo-with-text-dark.svg";
import logoWithText from "@assets/svgs/logo-with-text.svg";
import { ContactInfo, Icon, SocialIconPanel, Typography } from "@components";
import { ROUTES } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";

const links = [
  { to: ROUTES.HOME, text: "Home" },
  { to: ROUTES.ABOUT, text: "About Us" },
  { to: ROUTES.SERVICES, text: "Products & Services" },
  { to: ROUTES.PHOTOS, text: "Photos" },
  { to: ROUTES.CONTACT, text: "Contact-Us" },
];

const Navbar = () => {
  const { isMobile } = useScreenSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-0 md:top-12 left-0 bg-theme-gradient md:border-t md:border-lightGray shadow z-level-9 w-full h-16 flex flex-wrap gap-2 justify-between items-center pr-2 xl:pr-16">
      {/* Logo */}
      <div
        className="relative flex items-center h-full bg-white pr-2 md:pl-6 lg:pl-8 xl:pl-16 px-4 md:w-1/3 sm:w-1/2 w-4/5"
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
        }}
      >
        <Link to={ROUTES.HOME} className="flex items-center">
          <img src={logoWithTextDark} alt="Maa Vindhwasini Enterprises Logo" />
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full">
        <Icon
          icon="menu"
          size={24}
          color="white"
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4">
        <nav className="flex items-center lg:gap-6 xl:gap-8 md:gap-3 text-sm">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative group inline-block"
              >
                <Typography
                  variant={isMobile ? "caption" : "subtitle"}
                  color="white"
                  text={link.text}
                  uppercase
                />
                <div
                  className={`absolute -bottom-5 left-0 h-[4px] bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-level-7"
            onClick={() => setMenuOpen(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setMenuOpen(false);
            }}
            aria-label="Close menu"
          />

          <div className="fixed top-0 left-0 w-5/6 h-screen bg-secondary shadow-lg overflow-auto z-level-8 md:hidden">
            {/* Header with logo + close */}
            <div className="flex items-center justify-between p-4 mb-12">
              <Link to={ROUTES.HOME} className="flex items-center">
                <img src={logoWithText} alt="Maa Vindhwasini Enterprises" />
              </Link>

              <Icon
                icon="cancel"
                size={16}
                color="white"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Mobile nav links */}
            <nav className="flex flex-col">
              {links.map((link) => {
                const isActive = location.pathname === link.to; // check active link
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`flex justify-between items-center w-full border-b border-darkGray text-sm px-4 py-3 first:border-t ${
                      isActive ? "bg-darkGray text-white" : "text-white"
                    }`}
                  >
                    <Typography
                      variant="subtitle"
                      color="white"
                      text={link.text}
                    />
                    <Icon icon="arrowRight" size={20} color="white" />
                  </Link>
                );
              })}
            </nav>
            {/* Contact & social */}
            <div className="flex flex-col p-4 gap-6 mt-2">
              <ContactInfo />
              <SocialIconPanel size={24} color="secondary" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
