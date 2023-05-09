import { projectsArray } from "../db-arrays/DbArrays";

function Work() {
  return (
    <section className="w-full  min-h-screen max-w-full flex flex-col justify-start">
      <article className="   flex laptop:w-3/4 w-full flex-col justify-center h-fit   ">
        <article className="       flex flex-col justify-center  ">
          <span className="  element-tags tab-2">&lt; h2 &gt;</span>
          <h2 className="  text-[#08fdd8] tablet:text-6xl text-2xl font-bold   lg:text-left  tab-3">
            My Portfolio
          </h2>
          <span className="  element-tags tab-2">&lt; /h2 &gt;</span>
          <span className="  element-tags tab-2">&lt; p &gt;</span>
          <div className="  p-4  tabet:text-md  flex flex-col gap-6">
            <p className=" tab-3">
              A small gallery of recent projects chosen by me. I&apos;ve done
              them all together with amazing people from companies around the
              globe. It&apos;s only a drop in the ocean compared to the entire
              list. Interested to see some more? Visit
              <span className="  text-[#08fdd8]"> my work </span> page.
            </p>
          </div>
          <span className="  element-tags tab-2">&lt; p/ &gt;</span>
        </article>
      </article>
      <span className="    element-tags tab">&lt; section &gt;</span>


      <div className="r w-full h-full p-[2rem]  grow grid tablet:grid-cols-3 grid-cols-1 gap-6 ">
        {projectsArray.map((project, index) => {
          return (
            <picture
              style={{ "--image-url": `url(${project.src})` }}
              className=" flex border items-end justify-center  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat opacity-50 hover:scale-[1.2] tablet:h-full h-[10rem] w-full hover:opacity-100 transition-all duration-700 rounded md hover:z-10"
              key={index}
            >
              hello
            </picture>
          );
        })}
      </div>
      <span className="    element-tags tab">&lt; section/ &gt;</span>
    </section>
  );
}

export default Work;
