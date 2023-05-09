import Introduction from "./Introduction";
import Work from "../../Pages/Work";
import Contact from "../../Pages/Contact";
import About from "../../Pages/About";

function HomePage() {
  return (
    <div className="  flex flex-col   ">
      <span className="element-tags">&lt; html &gt;</span>
      <span className="element-tags tab">&lt; body &gt;</span>
      <Introduction />
      <Work />
      <About />
      <Contact />
      <span className="element-tags tab">&lt; body/ &gt;</span>
      <span className="element-tags">&lt; html/ &gt;</span>
    </div>
  );
}

export default HomePage;
