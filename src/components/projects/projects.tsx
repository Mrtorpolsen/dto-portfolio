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
  ];

  const listImages = projects.map((project, index) => (
    <SideBySide data={project} index={index} key={project.src} />
  ));
  return (
    <section className="relative mt-24 mb-40 z-1" id="projects">
      <div className="flex w-full justify-center">
        <h2 className="text-3xl my-10 font-bold">Projects</h2>
      </div>
      <div className="flex w-full justify-center">
        <h2 className="text-2xl my-10 font-bold">Emberfall</h2>
      </div>
      <Emberfall data={emberfall}/>
      <div className="flex w-full justify-center">
        <h2 className="text-2xl my-10 font-bold">Other</h2>
      </div>
      <ul className="flex flex-col gap-12">{listImages}</ul>
    </section>
  );
}
