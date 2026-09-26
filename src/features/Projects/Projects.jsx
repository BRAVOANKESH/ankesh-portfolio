import Typography from "../../packages/ui/Typography/Typography";
import Card from "../../packages/ui/Card/Card";
import LineBreak from "../../packages/ui/LineBreak/LineBreak";
import Button from "../../packages/ui/Button/Button";

import projectsData from "./projects.data";

import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <Typography as="p" variant="eyebrow">
            Selected Work
          </Typography>

          <Typography as="h2" variant="h2">
            Projects I've built
          </Typography>

          <Typography variant="body" className="projects-intro">
            A selection of projects I've worked on using modern frontend
            technologies.
          </Typography>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <Card className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <span>{project.category}</span>
              </div>

              <div className="project-content">
                <Typography as="h3" variant="h3">
                  {project.title}
                </Typography>

                <Typography variant="body" className="project-description">
                  {project.description}
                </Typography>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.link && (
                  <Button
                    href={project.link}
                    variant="secondary"
                    className="project-button"
                  >
                    View Project
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <LineBreak />
      </div>
    </section>
  );
}

export default Projects;
