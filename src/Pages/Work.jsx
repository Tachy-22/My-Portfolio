import { projectsArray } from "../db-arrays/DbArrays";

function Work() {
  return (
    <section className="w-full  min-h-screen max-w-full flex flex-col justify-start">
      <article className="   flex laptop:w-3/4 w-full flex-col justify-center h-fit   ">
        <article className="       flex flex-col justify-center  ">
          <span className="  element-tags tablet:tab-2 tab">&lt; h2 &gt;</span>
          <h2 className="  text-[#08fdd8] tablet:text-6xl text-2xl font-bold   lg:text-left  tablet:tab-3 tab-2">
            My Portfolio
          </h2>
          <span className="  element-tags tab-tablet:tab-2 tab">
            &lt; /h2 &gt;
          </span>
          <span className="  element-tags tablet:tab-2 tab">&lt; p &gt;</span>
          <div className="    tabet:text-md  flex flex-col gap-6">
            <p className=" tablet:tab-3 tab-2">
              A gallery of recent projects chosen by me. I&apos;ve done them
              mostly alone, but i&apos;m looking forward to working on projects
              with a team. Interested to see some more? Visit
              <span className="  text-[#08fdd8]">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Tachy-22/"
                >
                  {" "}
                  my git hub repo
                </a>
              </span>
              .
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
              className=" flex items-end justify-center  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat opacity-50 hover:scale-[1.1] tablet:h-full h-[10rem] w-full hover:opacity-100 transition-all duration-700 rounded md hover:z-10 hover:text-white  text-black"
              key={index}
            >
              <a
                target="_blank"
                href={project.path}
                rel="noreferrer"
                className="p-2  bg-black w-full text-center"
              >
                <p className="hover:decoration underline underline-offset-8 hover:text-[#08fdd8]">
                  {project.project}
                </p>
              </a>
            </picture>
          );
        })}
      </div>
      <span className="    element-tags tab">&lt; section/ &gt;</span>
    </section>
  );
}

export default Work;
