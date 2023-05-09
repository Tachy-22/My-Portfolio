import { navArray, socialsArray } from "../../db-arrays/DbArrays";
import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <aside className="w-[10rem] hidden fixed top-0 left-0 bottom-0     bg-[#181818] h-screen laptop:flex flex-col justify-between">
      <Link to="/" className=" bg-black  flex flex-col items-center">
        <div className="glitch-wrapper ">
          <div className="glitch" data-glitch="J">
            J
          </div>
        </div>
        <div className=" bg-black w-full   capitalize flex flex-col gap-6 p-6">
          <p className=" text-center text-3xl ">Jeffery</p>
          <small className=" text-center text-md text-slate-300 ">
            Web developer
          </small>
        </div>
      </Link>
      <nav className="border-y-[0.5px] border-gray-500 flex flex-col ">
        {navArray.map((page, index) => {
          return (
            <Link
              to={page.path}
              className="border-y-[0.5px] text-[#696972] element-tag-text italic border-gray-500 text-center capitalize py-4 hover:text-[#08fdd8] "
              key={index}
            >
              <p>{page.page}</p>
            </Link>
          );
        })}
      </nav>
      <section className="  flex  justify-around  px-2 h-[20%]">
        {socialsArray.map((social, index) => {
          return (
            <Link
              className="w-[20%] h-fit hover:border-4  hover:border-[#08fdd8] rounded-full "
              to="/"
              key={index}
            >
              <img className="w-full  " src={social.src}></img>
            </Link>
          );
        })}
      </section>
    </aside>
  );
}

export default DesktopMenu;
