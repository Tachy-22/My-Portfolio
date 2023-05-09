import Hamburger from "../../assets/svg-icons/hamburger.svg";
import { RootContext } from "../../Layouts/RootLayout";
import { useContext } from "react";
function MobileMenu() {
  const { mobileMenuView, setMobileMenuView } = useContext(RootContext);
  return (
    <section
      onClick={() => setMobileMenuView(!mobileMenuView)}
      className="w-fit fixed laptop:hidden laptop:hidden  bg-black/25 block top-0  right-0 p-2 m-2 rounded-md"
    >
      <picture
        style={{ "--image-url": `url(${Hamburger})` }}
        className=" flex border border-gray-400 items-end justify-center  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat opacity-80 hover:scale-[1.1]  h-[3rem] w-[3rem] hover:opacity-100 transition-all duration-700 rounded md hover:z-10"
      ></picture>
    </section>
  );
}

export default MobileMenu;
