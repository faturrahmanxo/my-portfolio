import ProjectCard, { projects } from "../projects/ProjectCard";

export default function ProjectPage() {
  return (
    <section id="projects" className="relative py-24 font-primary">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <h2 className="text-5xl font-bold font-title bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent ">
            Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl">
            A showcase of my latest work, featuring web applications, designs,
            and creative experiments.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
