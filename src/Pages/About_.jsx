import { motion } from "framer-motion";
import { skillTechnologyArray } from "../db-arrays/DbArrays";
function About_() {
  return (
    <section className="  tablet:w-full   laptop:flex-row flex flex-col tablet:p-2 w-screen laptop:h-full  min-h-full laptop:items-center ">
      <article className="     flex w-screen  tablet:w-3/4 flex-col justify-center h-full   ">
        <span className="    element-tags grow ">&lt; section &gt;</span>
        <article className="         flex flex-col justify-center  ">
          <span className="    grow element-tags laptop:tab-2 ">
            &lt; h2 &gt;
          </span>
          <h2 className="  shrink w-full    grow text-[#08fdd8] laptop:text-6xl text-3xl  font-bold   lg:text-left  laptop:tab-3 tab-2">
            Me, Myself & I
          </h2>
          <span className="    grow element-tags laptop:tab-2 tab">
            &lt; /h2 &gt;
          </span>
          <span className="    grow element-tags laptop:tab-2 tab">
            &lt; p &gt;
          </span>
          <div className="   shrink  grow p-4  w-screen tablet:w-full flex flex-col gap-6">
            <p className="  laptop:tab-3 tab-2">
              Welcome to my About Me page! I&apos;m thrilled to have this opportunity
              to share a bit about myself and my journey in the world of
              front-end development. I&apos;m a front end developer located in
              Nigeria. In October 2022, I embarked on my journey into front-end
              development, and ever since, I have been passionate about creating
              exceptional digital experiences.
            </p>
            <p className="  laptop:tab-3 tab-2">
              One of my greatest passions lies in the realm of programming and
              artificial intelligence. I find the potential of AI to transform
              industries and improve lives truly fascinating. I&apos;m eager to
              further explore this field and apply my programming skills to
              contribute to its advancement.
            </p>
            <p className="  laptop:tab-3 tab-2">
              Collaboration is something I value greatly, and I am excited about
              the prospect of working with a dynamic and diverse team. I believe
              that collective efforts and different perspectives can lead to
              exceptional outcomes. I enjoy collaborating, brainstorming ideas,
              and bringing them to life through coding.
            </p>
            <p className="  laptop:tab-3 tab-2">
              I am currently in my fourth year of pursuing a degree in
              Mechanical Engineering, which has significantly enhanced my
              technical abilities and problem-solving skills. This background
              provides me with a unique perspective when approaching programming
              challenges, as I can leverage my engineering knowledge to create
              efficient and well-structured code.
            </p>
            <p className="  laptop:tab-3 tab-2">
              In my web development journey, I strive for excellence by building
              clean, interactive, and responsive websites that leave a lasting
              impression on users. I pay meticulous attention to detail,
              ensuring that the websites I create not only look visually
              appealing but also function flawlessly across various devices and
              platforms.
            </p>
            <p className="  laptop:tab-3 tab-2">
              Thank you for taking the time to learn a bit about me. I am
              excited about the future opportunities that await me in the world
              of front-end development and AI, and I look forward to
              collaborating with like-minded individuals who share my passion
              for creating remarkable digital experiences.
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
              animate={{ scale: 1.2 }}
              initial={{ scale: 1 }}
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
