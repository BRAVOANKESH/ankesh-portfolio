import "./App.css";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Experience from "./features/Experience/Experience";
import Hero from "./features/Hero/Hero";
import Projects from "./features/Projects/Projects";
import Skills from "./features/Skills/Skills";
// import Hero from "./features/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <div>
        <Hero/>
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default App;