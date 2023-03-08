import projectsData from "../seed.json";
import { useState } from "react";
import ProjectImage from "./projectImage.component";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <section className="projects">
      <div className="section-title flex items-center justify-between">
        <h2>Projects</h2>
        <button>Contact me</button>
      </div>
      <div className="project-list">
        {projects.map((project) => {
          return (
            <div className="project">
              <ProjectImage url={project.img} alt={project.title} />
              <div className="project-name">{project.title}</div>
              <div className="project-tech flex gap-3">
                {project.tech.map((tech) => {
                  return <div className="tech">{tech}</div>;
                })}
              </div>
              <div className="project-buttons flex gap-4">
                <a href="/">View Project</a>
                <a href="/">View Code</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
