import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

import StackSlider from "./components/StackSlider";
import ProjectsSection from "./components/ProjectsSection";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StackSlider />
      <ProjectsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
