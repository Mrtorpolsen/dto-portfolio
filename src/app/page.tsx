import Intro from "./intro";
import Canva from "./canva";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div className="">
      <Canva />
      <Intro />
      <NavBar />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
