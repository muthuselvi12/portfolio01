import "./App.css";
import Navbar from "./Components/navbar";
import HeroSection from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skill";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
// import Achievement from "./Components/Achievements";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
