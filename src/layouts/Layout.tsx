import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";

function Layout() {
  return (
    <>
      <Menubar />
      <main className="container m-auto p-5">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
