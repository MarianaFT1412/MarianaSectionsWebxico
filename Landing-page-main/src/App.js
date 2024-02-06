import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import ValuesMission from "./components/ValuesMission/ValuesMission";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ValuesMission />
      <BenefitsSection />
    </>
  );
}

export default App;
