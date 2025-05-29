export default function Projects() {
  const projects = [
    {
      src: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Project image",
      heading: "Swing-Cralwer",
      text: "A webscraper built with TS, crawlees cheerio crawler, using ExcelJS to write results to excel.",
    },
    {
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Project image",
      heading: "Swing-Cralwer",
      text: "A webscraper built with TS, crawlees cheerio crawler, using ExcelJS to write results to excel.",
    },
  ];

  const listImages = projects.map((project) => (
    <li key={project.src}>
      <div className="">
        <img src={project.src} alt={project.alt} />
        <div className="mx-8 bg-white/80 p-3 relative -mt-6">
          <h2 className="text-xl font-bold text-center mb-2">
            {project.heading}
          </h2>
          <p>{project.text}</p>
        </div>
      </div>
    </li>
  ));
  return (
    <section className="h-screen relative z-1" id="projects">
      <div className="flex w-full justify-center">
        <h2 className="text-3xl my-10 font-bold">Projects</h2>
      </div>
      <ul className="flex flex-col gap-8">{listImages}</ul>
    </section>
  );
}
