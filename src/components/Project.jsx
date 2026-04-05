import background from "../assets/background.jpeg";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

function Projects() {
  const projects = [
    {
      img: project1,
      title: "Residential Installation",
      desc: "5kW rooftop solar system in Lucknow.",
    },
    {
      img: project2,
      title: "Commercial Project",
      desc: "20kW solar setup for factory.",
    },
    {
      img: project3,
      title: "Hybrid System",
      desc: "Battery + solar integration project.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-4xl
           font-semibold text-transparent md:text-5xl">
            Our Projects
          </h1>

          <p className="mt-4 text-gray-300">
            Real installations that deliver real results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/70" />

              <div className="absolute bottom-0 p-5">
                <h3 className="text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;