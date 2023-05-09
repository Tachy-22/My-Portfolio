import { navArray, socialsArray } from "../../db-arrays/DbArrays";
import { Link } from "react-router-dom";
import Close from "../../assets/svg-icons/close.svg";
import { RootContext } from "../../Layouts/RootLayout";
import { useContext } from "react";
function MobileNav() {
  const { mobileMenuView, setMobileMenuView } = useContext(RootContext);
  return (
    <aside
      className={`${
        !mobileMenuView
          ? " -left-[100%] "
          : "   top-0 right-0 left-0 bottom-0  z-40 "
      } fixed backdrop-blur-xl w-screen  h-screen transition-all duration-700`}
    >
      <section
        className={`
          w-screen  flex flex-col h-full  justify-between items-center `}
      >
        <section
          onClick={() => setMobileMenuView(!mobileMenuView)}
          className={`
           block absolute laptop:hidden bg-black/25 w-fit2  top-0 grow right-0 p-2 m-2 rounded-md`}
        >
          <picture
            style={{ "--image-url": `url(${Close})` }}
            className={`flex border border-gray-400 items-end justify-center  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat opacity-80 hover:scale-[1.1]  h-[3rem] w-[3rem] hover:opacity-100 transition-all duration-700 rounded md hover:z-10`}
          ></picture>
        </section>
        <Link
          onClick={() => setMobileMenuView((prev) => !prev)}
          to="/"
          className=" bg-black grow flex flex-col items-center"
        >
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
        <nav className=" border-gray-500  justify-center  grow flex flex-col ">
          {navArray.map((page, index) => {
            return (
              <Link
                onClick={() => setMobileMenuView((prev) => !prev)}
                to={page.path}
                className="border-y-2 text-[#696972] element-tag-text italic border-gray-500 text-center capitalize py-4 hover:text-[#08fdd8] "
                key={index}
              >
                <p>{page.page}</p>
              </Link>
            );
          })}
        </nav>
        <section className="  flex  grow w-fit items-end justify-center gap-4   p-4 h-fit">
          {socialsArray.map((social, index) => {
            return (
              <Link
                className="w-fith-fit hover:outline p-1  hover:outline-[#08fdd8] rounded-full "
                to="/"
                key={index}
              >
                <img className="w-[2rem]  " src={social.src}></img>
              </Link>
            );
          })}
        </section>
      </section>
    </aside>
  );
}

export default MobileNav;
