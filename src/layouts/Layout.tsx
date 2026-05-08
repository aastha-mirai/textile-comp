import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { ScrollToTop, Icon } from "@components";
import { Footer, Navbar, Topbar } from "@containers";
import { SOCIAL_ICON_LINKS } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";

function Layout() {
  const { isMobile } = useScreenSize();
  const [show, setShow] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {/* redirect to whatsapp channel */}
      {show && (
        <div
          className={`z-level-9 transition-all duration-300 ${
            isFooterVisible
              ? "absolute right-6 bottom-34"
              : "fixed right-6 bottom-6"
          }`}
        >
          <Icon
            size={isMobile ? 68 : 128}
            icon="whatsappSupport"
            onClick={() => {
              window.open(SOCIAL_ICON_LINKS.WHATSAPP, "_blank");
            }}
          />
        </div>
      )}
      <div className="relative">
        <ScrollToTop />
        <header className="absolute top-0 left-0 w-full">
          <Topbar />
          <Navbar />
        </header>

        <main className="w-full pt-16 md:pt-28">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
