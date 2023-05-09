import { motion } from "framer-motion";
import { skillTechnologyArray } from "../db-arrays/DbArrays";
function About_() {
  return (
    <section className="  tablet:w-full  laptop:flex-row flex flex-col py-2 laptop:h-full  min-h-full laptop:items-center ">
      <article className="     flex tablet:w-3/4 flex-col justify-center h-full   ">
        <span className="    element-tags grow ">&lt; section &gt;</span>
        <article className="         flex flex-col justify-center  ">
          <span className="    grow element-tags laptop:tab-2 ">
            &lt; h2 &gt;
          </span>
          <h2 className="  shrink w-full    grow text-[#08fdd8] laptop:text-6xl text-4xl font-bold   lg:text-left  laptop:tab-3 tab-2">
            Me, Myself & I
          </h2>
          <span className="    grow element-tags laptop:tab-2 tab">
            &lt; /h2 &gt;
          </span>
          <span className="    grow element-tags laptop:tab-2 tab">
            &lt; p &gt;
          </span>
          <div className="   shrink  grow p-4 w-full flex flex-col gap-6">
            <p className="  laptop:tab-3 tab-2">
              I’m a Front-End Developer located in Poland. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </p>
            <p className="  laptop:tab-3 tab-2">
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of MMA, outdoor activities, TV
              series and English literature.
            </p>
            <p className="  laptop:tab-3 tab-2">
              A family person and father of two fractious boys, Interested in
              the entire frontend spectrum and working on ambitious projects
              with positive people.
            </p>
            <p className="   laptop:tab-3 tab-2 text-[#08fdd8]">
              Let&apos;s make something special.
            </p>
          </div>
          <span className="    element-tags grow laptop:tab-2 tab">
            &lt; p/ &gt;
          </span>
        </article>
        <span className="    element-tags grow  flex justify-end  ">
          &lt; section/ &gt;
        </span>
      </article>
      <section className="   w-full  tablet:w-full   p-[7rem]  laptop:w-[50rem]  relative h-max   flex  flex-wrap  grow items-center ">
        {skillTechnologyArray.map((technology, index) => {
          return (
            <motion.div
              key={index}
              animate={{ scale: 0.9 }}
              initial={{ scale: 0.6 }}
              drag
              dragConstraints={{ left: 50, right: 50, top: 50, bottom: 50 }}
              transition={{ repeat: Infinity, duration: 1, delay: 2 }}
              className="    text-center flex items-center justify-center  w-full h-[10rem]  basis-1  rounded-full p-12 grow  text-[#08fdd8] "
            >
              <p className=" border-2 max-w-[15rem]  tablet:w-full border-[#08fdd8]  rounded-md p-4">
                {technology.technology}
              </p>
            </motion.div>
          );
        })}
      </section>
    </section>
  );
}

export default About_;
