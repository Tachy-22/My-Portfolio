import { Outlet } from "react-router-dom";
import DesktopMenu from "../Components/Desktop/DesktopMenu";

function RootLayout() {
  return (
    <div className="flex h-screen   w-full">
      <DesktopMenu />
      <Outlet />
    </div>
  );
}

export default RootLayout;
