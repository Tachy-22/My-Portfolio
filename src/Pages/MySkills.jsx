function MySkills() {
  return (
    <section className="flex items-center tablet:w-full w-screen h-full ">
      <article className="  lg:w-[60%] xl:w-[50%] ">
        <h2 className="text-[#08fdd8] tablet:text-6xl text-3xl font-bold py-6 laptop:text-left  text-center">
          Skills & Experience
        </h2>
        <div className="px-4 flex flex-col gap-6">
          <p>
            Since beginning my journey as a freelance developer nearly 10 years
            ago, I’ve done remote work for agencies, consulted for startups, and
            collaborated with talented people to create web products for both
            business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts.
          </p>
          <p>
            I also have full-stack developer experience with popular open-source
            CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
          </p>
          <p>
            Visit my <span className="text-[#08fdd8]">LinkedIn</span> profile
            for more details or just
            <span className="text-[#08fdd8]">contact</span> me.
          </p>
        </div>
      </article>
    </section>
  );
}

export default MySkills;
