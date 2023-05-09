import ProfileImage from "../../assets/img/picture_of_me_3-removebg-preview.png";
import { motion } from "framer-motion";
function Introduction() {
  return (
    <section className="   flex    w-full items-start justify-center   ">
      <div className="   flex items-start justify-start  h-full w-fit grow">
        <article className="  w-fit   laptop:my-[10rem] max-[410px]:text-sm  ">
          <span className="  element-tags tab-2">&lt; h1 &gt;</span>
          <div className="    tab-3 laptop:w-max w-fit laptop:text-8xl tablet:text-7xl text-2xl shrink  text-left  font-extrabold    gap-4 flex flex-col  ">
            <h2 className="  ">Hi,</h2>
            <div className="  flex gap-[1rem] w-fit  ">
              <h2 className="    flex flex-col justify-center  ">I’m</h2>

              <div className="  glitch-wrapper  ">
                <div className="  glitch-text" data-glitch="J">
                  J
                </div>
                <h2>effery,</h2>
              </div>
            </div>
            <h2>Web developer</h2>
          </div>
          <span className="  element-tags tab-2">&lt; /h1 &gt;</span>
          <p className="    tlaptop:text-xl text-sm tab-2  text-[#696972]">
            <span className="   element-tags"> &lt; p &gt;</span>
            <span className="  tab-3  tracking-widest break-words element-tag-text italic mx-2 ">
              <p> Front End Developer / Ai Enthusiasts</p>
            </span>
            <span className="  element-tags">&lt; /p &gt;</span>
          </p>
          <button className="  custom-button laptop:m-6 laptop:mx-8 my-2 ml-[4rem] tablet:w-1/3 w-fit laptop:text-xl text-xs">
            Contact me!
          </button>
        </article>
      </div>

      <motion.figure
        animate={{ y: 100, scale: 1 }}
        initial={{ scale: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="tablet:block hidden   rounded-full  backdrop-brightness-50 ta-[0.5rem] border-2 opacity-90 transition-all duration-800 border-[#303033] laptop:h-full max-w-[25rem] laptop:relative absolute top-0 right-5 w-[20%] h-fit"
      >
        <img
          className="  h-full w-full   rounded-full  "
          src={ProfileImage}
          alt="profile-image"
        />
      </motion.figure>
    </section>
  );
}

export default Introduction;
