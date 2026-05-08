import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // add pathname to the dependency array so that it runs on route change
    console.log(pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
