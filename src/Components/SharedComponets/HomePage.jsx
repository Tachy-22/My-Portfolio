import Introduction from "./Introduction";
import Work from "../../Pages/Work";
import Contact from "../../Pages/Contact";

import About_ from "../../Pages/About_";

function HomePage() {
  return (
    <div className="tablet:w-full w-screen p-2 flex flex-col   ">
      <span className="element-tags">&lt; html &gt;</span>
      <span className="element-tags tab">&lt; body &gt;</span>
      <Introduction />
      <Work />
      <About_ />
      <Contact />
      <span className="element-tags tab">&lt; body/ &gt;</span>
      <span className="element-tags">&lt; html/ &gt;</span>
    </div>
  );
}

export default HomePage;
