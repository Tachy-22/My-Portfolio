import { Outlet } from "react-router-dom";

function GeneralPageLayout() {
  return (
    <div className=" w-full laptop:pl-[12rem] laptop:p-0 ">
      <Outlet />
    </div>
  );
}

export default GeneralPageLayout;
