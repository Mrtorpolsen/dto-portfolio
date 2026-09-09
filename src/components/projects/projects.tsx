import SideBySideProject from "./side-by-side-project-item";
import Emberfall from "./emberfall";

export default function Projects() {
  const projects = [
    {
      src: "/images/scraper.PNG",
      alt: "Swing-Scraper image",
      heading: "Swing-Scraper",
      text: "A webscraper built with crawlees cheerio crawler, TS, using ExcelJS to write results to excel. So far it scrapes 3 playground companies for all of their products, formats, verifies and categories the results, before it saves it to excel. Current plan is to couple it up with Microsoft Fabric Warehouse and later on automate it and serve it through AWS' Lambda.",
    },
    {
      src: "/images/portfolio.PNG",
      alt: "Portfolio image",
      heading: "My Portfolio",
      text: "This portfolio, is built from the ground using Next.js, React, TS and Tailwind. At the moment formspree is handling the contact form, but I have plans to implement it using next server actions down the line.",
    },
  ];

  const listImages = projects.map((project, index) => (
    <SideBySideProject data={project} index={index} key={project.src} />
  ));
  return (
    <section className="relative mt-24 mb-40 z-1" id="projects">
      <div className="flex w-full justify-center">
        <h2 className="text-3xl my-10 font-bold">Projects</h2>
      </div>
      <div className="flex w-full justify-center">
        <h2 className="text-3xl my-10 font-bold underline">Emberfall</h2>
      </div>
      <Emberfall />
      <ul className="flex flex-col gap-12">{listImages}</ul>
    </section>
  );
}
