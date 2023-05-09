import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import GeneralPageLayout from "./Components/SharedComponets/GeneralPageLayout";
import About from "./Pages/about";
import MySkills from "./Pages/MySkills";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import HomePage from "./Components/SharedComponets/HomePage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<GeneralPageLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="my-skills" element={<MySkills />}></Route>
          <Route path="work" element={<Work />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
