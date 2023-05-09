import { Outlet } from "react-router-dom";
import DesktopMenu from "../Components/Desktop/DesktopMenu";
import MobileMenu from "../Components/Mobile/MobileMenu";
import MobileNav from "../Components/Mobile/MobileNav";

import { createContext, useState } from "react";

export const RootContext = createContext({});

function RootLayout() {
  const [mobileMenuView, setMobileMenuView] = useState(false);
  console.log(mobileMenuView);
  return (
    <RootContext.Provider
      value={{
        mobileMenuView,
        setMobileMenuView,
      }}
    >
      <div className="flex h-screen   w-full">
        <MobileMenu />
        <MobileNav />
        <DesktopMenu />
        <Outlet />
      </div>
    </RootContext.Provider>
  );
}

export default RootLayout;
