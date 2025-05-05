import Home from "./home";
import Canva from "./canva";
import NavBar from "./navbar";
import About from "./about";

export default function App() {
  return (
    <div className="">
      <Canva />
      <Home />
      <NavBar />
      <About />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
