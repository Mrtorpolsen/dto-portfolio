import Intro from "./intro";
import Canva from "./canva";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Canva />
      <div className="max-w-5xl size-full mx-auto relative z-1">
        <Intro />
        <NavBar />
      </div>
    </div>
  );
}
