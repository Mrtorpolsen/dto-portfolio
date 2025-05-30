import Home from "../components/home";
import Canva from "../components/canva";
import NavBar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Canva />
      <div className="max-w-5xl">
        <Home />
        <NavBar />
        <About />
        <Projects />
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
