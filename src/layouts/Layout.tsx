import { Navbar, Topbar } from "@containers";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative">
      <header className="absolute top-0 left-0 w-full bg-transparent">
        <Topbar />
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
