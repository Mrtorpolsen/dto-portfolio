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
    <li key={project.src}>
      <div
        className={`sm:grid ${
          index % 2 === 0 ? "sm:grid-cols-[60%_40%]" : "sm:grid-cols-[40%_60%]"
        }`}
      >
        <img
          className={`max-h-[280px] self-center justify-self-center ${
            index % 2 === 0
              ? "col-start-1 row-start-1"
              : "col-start-2 row-start-1"
          }`}
          src={project.src}
          alt={project.alt}
        />
        <div
          className={`mx-8 bg-white/80 p-3 relative -mt-6 md:self-center sm:mt-0 sm:p-0 sm:bg-white/0${
            index % 2 === 0
              ? "col-start-1 row-start-1"
              : "col-start-2 row-start-1"
          }`}
        >
          <h2 className="text-xl font-bold text-center mb-2">
            {project.heading}
          </h2>
          <p>{project.text}</p>
        </div>
      </div>
    </li>
  ));
  return (
    <section className="relative mt-24 mb-40 z-1" id="projects">
      <div className="flex w-full justify-center">
        <h2 className="text-3xl my-10 font-bold">Projects</h2>
      </div>
      <ul className="flex flex-col gap-12">{listImages}</ul>
    </section>
  );
}
