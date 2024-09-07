import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";

function Layout() {
  return (
    <main>
      <Menubar />
      <div className="container m-auto p-5">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
