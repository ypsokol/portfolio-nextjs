import type { NextPage } from "next";
import { lazy, Suspense } from "react";

import Nav from "../components/Layout/Nav";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import Work from "../components/Sections/Work";
import Testimonials from "../components/Sections/Testimonials";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Layout/Footer";
import Head from "../components/Layout/Head";
import Loading from "../components/UI/Loading";

const HeroWithLaminaComponent = lazy(
  () => import("../components/Threejs/HeroWithLamina")
);

const App: NextPage = () => {
  return (
    <>
      <Head />
      <Nav />

      <main className="main">
        <Suspense fallback={<Loading />}>
          <div className="canvas__hero">
            <HeroWithLaminaComponent
              title={`GO\nAHEAD, MAKE\nMY DAY\nBETTER.`}
            />
          </div>
        </Suspense>
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
