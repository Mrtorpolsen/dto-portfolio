import Home from "../components/home";
import Canva from "../components/canva";
import NavBar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Canva />
      <div className="max-w-5xl">
        <Home />
      </div>
      <NavBar />
      <div className="max-w-5xl">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
