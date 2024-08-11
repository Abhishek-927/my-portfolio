import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./App.css";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="banner-bg">
        <Banner />
        <Skill />
      </div>
      <div className="project-bg">
        <Project />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
