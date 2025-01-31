import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import WspButton from "../components/WspButton.jsx";
import "./index.css";

const App = () => {
  return (
    <>
      <div
        id="blur"
        onClick={() => {
          document.querySelector("#nav").classList.remove("nav-active");
          document.querySelector("#blur").classList.remove("blur-active");
          document.querySelector(".check-icon").checked = false;
        }}
      ></div>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WspButton />
    </>
  );
};

export default App;
