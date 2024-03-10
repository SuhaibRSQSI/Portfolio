import "./GlobalStyles.js";
import { linkedInIcon } from "./Constants";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import About from "./pages/About";
import Hero from "./pages/Hero.js";
import Header from "./pages/Header.js";
import GlobalStyles from "./GlobalStyles.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
