import SideBySide from "./side-by-side-item";
import Emberfall from "./emberfall";
import { ContentData } from "./type";

export default function Projects() {
  const projects : ContentData[] = [
    {
      src: "/images/scraper.PNG",
      alt: "Swing-Scraper image",
      heading: "Swing-Scraper",
      text: "A webscraper built with crawlees cheerio crawler, TS, using ExcelJS to write results to excel. So far it scrapes 3 playground companies for all of their products, formats, verifies and categories the results, before it saves it to excel. Current plan is to couple it up with Microsoft Fabric Warehouse and later on automate it and serve it through AWS' Lambda.",
      imageSize: "standard"
    },
    {
      src: "/images/portfolio.PNG",
      alt: "Portfolio image",
      heading: "My Portfolio",
      text: "This portfolio, is built from the ground using Next.js, React, TS and Tailwind. At the moment formspree is handling the contact form, but I have plans to implement it using next server actions down the line.",
      imageSize: "standard"
    },
  ];

  const emberfall : ContentData[] = [
    {
      src: "/images/emberfall-title.png",
      alt: "Emberfall title image",
      heading: "What is Emberfall",
      text: "Emberfall is a 2D tower-defense-inspired game that I started working on together with a friend. We agreed that he would handle the graphics while I focused on the programming. \n\nThe original idea was inspired by some custom games in Warcraft III that we played as kids. The original idea was simple: each player would have a base and send units against each other in a multiplayer battle. As the project evolved, we decided to take it in a different direction. Instead of multiplayer, we made it into a tower-defense-inspired game where you defend against increasingly difficult waves of enemies by building units and towers. \n\nWe chose Unity for a few reasons. I had worked with C# during my studies and enjoyed it, so I wanted an opportunity to refresh and expand those skills. We also wanted to use an established game engine, and after looking at the available options, Unity seemed like the most well-rounded choice for what we wanted to build.\n\nThe goal was to actually finish and ship an app and have something published on an app store. As it turned out, the project would go on to teach me much more about what goes into building a larger project — from architecture and data-driven UI to save-file migrations, data normalization, and much more.",
      imageSize: "tall"
    },
    {
      src: "/images/embesarfall-title.png",
      alt: "Emberfall title image",
      heading: "The beginning",
      text: "When I started development, we had envisioned Emberfall as a multiplayer game where two players would send units against each other, with the first player to destroy the enemy castle winning. As I developed the prototype and we discussed the ideas further, however, the concept started to evolve, and we eventually decided to take it in a different direction: a single-player, tower-defense-inspired game.\n\nThe idea for the first prototype was simple: spawn some units, have them fight each other, and set a win condition based on destroying the enemy castle. The execution was another story.\n\nEven this simple prototype required quite a few different components. Each unit was a Unity prefab made up of different scripts responsible for things like movement, targeting and combat. I want to highlight three of those components: the target, movement and combat components.\n\nAll three have changed quite a bit since the early prototype, and I expect them to keep evolving as the complexity of the game grows. One of the things I have been paying more attention to throughout development is keeping the runtime cost of these systems low, so that there is still room for the game to grow without performance becoming a problem.\n\nMore importantly, I have been trying to keep the different systems loosely coupled. As the project has grown, this has become increasingly important. It makes it easier to change or replace individual systems without having to rewrite large parts of the game, and it gives me more flexibility as new mechanics are introduced.",
      imageSize: "tall"
    },
  ];

  const listImages = projects.map((project, index) => (
    <SideBySide data={project} index={index} key={project.src} />
  ));
  return (
    <section className="relative mt-24 mb-40 z-1 px-8" id="projects">
      <div className="flex w-full justify-center">
        <h2 className="text-3xl my-10 font-bold">Projects</h2>
      </div>
      <div className="flex w-full justify-center">
        <h2 className="text-2xl my-10 font-bold">Emberfall</h2>
      </div>
      <Emberfall />
      <div className="flex w-full justify-center">
        <h2 className="text-2xl my-10 font-bold">Other</h2>
      </div>
      <ul className="flex flex-col gap-12">{listImages}</ul>
    </section>
  );
}
