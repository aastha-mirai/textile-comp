import { Navbar, Topbar } from "@containers";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative">
      <header className="absolute top-0 left-0 w-full">
        <Topbar />
        <Navbar />
      </header>

      <main className="w-full h-screen pt-16 md:pt-28">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
