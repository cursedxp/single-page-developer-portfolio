import projectsData from "../seed.json";
import { useState } from "react";
import ProjectImage from "./projectImage.component";
import { v4 as uuidv4 } from "uuid";

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
          const id = uuidv4();
          return (
            <div className="project" key={id}>
              {console.log(id)}
              <ProjectImage url={project.img} alt={project.title} />
              <div className="project-name">{project.title}</div>
              <div className="project-tech flex gap-3">
                {project.tech.map((tech) => {
                  const id = uuidv4();
                  return (
                    <div className="tech" key={id}>
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="project-buttons flex column gap-4">
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
