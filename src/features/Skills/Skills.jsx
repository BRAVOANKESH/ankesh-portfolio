import Typography from "../../packages/ui/Typography/Typography";
import Card from "../../packages/ui/Card/Card";
import LineBreak from "../../packages/ui/LineBreak/LineBreak";

import skillsData from "./skills.data";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <Typography as="p" variant="eyebrow">
            Skills
          </Typography>

          <Typography as="h2" variant="h2">
            Technologies I work with
          </Typography>

          <Typography variant="body" className="skills-intro">
            A collection of technologies and tools I use to build modern,
            responsive web applications.
          </Typography>
        </div>

        <div className="skills-grid">
          {skillsData.map((skillGroup) => (
            <Card className="skill-card" key={skillGroup.category}>
              <Typography as="h3" variant="h3">
                {skillGroup.category}
              </Typography>

              <div className="skill-list">
                {skillGroup.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <LineBreak />
      </div>
    </section>
  );
}

export default Skills;