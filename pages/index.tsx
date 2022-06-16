import type { NextPage } from "next";

import Nav from "../components/Layout/Nav";
import Home from "../components/Sections/Home";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import Work from "../components/Sections/Work";
import Testimonials from "../components/Sections/Testimonials";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Layout/Footer";
import Skills from "../components/Sections/Skills";
import Head from "../components/Layout/Head";

const App: NextPage = () => {
  return (
    <>
      <Head />
      <Nav />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async ({
//   locale,
//   defaultLocale,
// }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale || (defaultLocale as string), [
//         "about",
//       ])),
//     },
//   };
// };

export default App;
