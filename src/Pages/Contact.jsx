import ContactImg from "../assets/svg-icons/Contact-us.svg";
function Contact() {
  return (
    <div className="tablet:w-full grow laptop:px-0 px-[1rem]  laptop:flex-row flex flex-col py-2 laptop:h-full  min-h-full laptop:items-center ">
      <article className="     flex laptop:w-1/2 max-w-full flex-col justify-center h-full   ">
        <span className="  grow  element-tags laptop:tab ">
          &lt; section &gt;
        </span>
        <article className="    grow     flex flex-col justify-center  ">
          <span className="    element-tags laptop:tab-2 tab">
            &lt; h2 &gt;
          </span>
          <h2 className="  shrink   text-[#08fdd8] laptop:text-6xl text-2xl font-bold   lg:text-left  laptop:tab-3 tab-2">
            Contact Me
          </h2>
          <span className="    element-tags laptop:tab-2 tab">
            &lt; /h2 &gt;
          </span>
          <span className="    element-tags laptop:tab-2 tab">&lt; p &gt;</span>
          <div className="    grow py-4 laptop:tab-3 tab-2 flex flex-col gap-6">
            <p className="mobile  ">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
          </div>
          <span className="    element-tags grow tab-2">&lt; p/ &gt;</span>
          <span className="    element-tags grow tab-2">&lt; form &gt;</span>
          <form className="form laptop:tab-3 tab-2 ">
            <div className="flex">
              <label className=" w-full grow">
                <input
                  required
                  placeholder="First Name"
                  type="text"
                  className="input"
                />
              </label>

              <label className=" w-full grow">
                <input
                  required
                  placeholder="Last Name"
                  type="text"
                  className="input"
                />
              </label>
            </div>

            <label className=" w-full grow">
              <input
                required
                placeholder="Email"
                type="email"
                className="input"
              />
            </label>

            <label className=" w-full grow">
              <input
                required
                type="tel"
                pattern="[0-9]{3} [0-9]{4} [0-9]{4}"
                placeholder="Contact number: 123 4567 8910"
                className="input"
              />
            </label>
            <label className=" w-full grow ">
              <textarea
                required
                rows="3"
                placeholder=" Message"
                className="input01 message"
              ></textarea>
            </label>

            <button
              className="custom-button my-4 w-fit  tablet:text-[1rem] text-[0.65rem] "
              href="#"
            >
              Send message !
            </button>
          </form>
          <span className="    element-tags grow laptop:tab-2 tab">
            &lt; form/ &gt;
          </span>
        </article>
        <span className="    element-tags grow  flex justify-end  ">
          &lt; section/ &gt;
        </span>
      </article>
      <section className="   w-full  tablet:w-full  laptop:h-full h-max  laptop:w-1/2 laptop:p-0   relative   flex  flex-wrap  grow items-center ">
        <img className="w-full h-full" src={ContactImg} alt="contact img" />
      </section>
    </div>
  );
}

export default Contact;
