import Typography from "../../packages/ui/Typography/Typography";
import Card from "../../packages/ui/Card/Card";
import LineBreak from "../../packages/ui/LineBreak/LineBreak";
import experienceData from "./experience.data";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <Typography as="p" variant="eyebrow">
            Experience
          </Typography>

          <Typography as="h2" variant="h2">
            Where I've worked
          </Typography>

          <Typography variant="body" className="experience-intro">
            My professional journey and the technologies I've worked with.
          </Typography>
        </div>

        <div className="experience-list">
          {experienceData.map((experience) => (
            <div className="experience-item" key={experience.company}>
              <div className="experience-marker">
                <span></span>
              </div>

              <Card className="experience-card">
                <div className="experience-top">
                  <Typography variant="small" className="experience-period">
                    {experience.period}
                  </Typography>

                  <Typography as="h3" variant="h3">
                    {experience.role}
                  </Typography>

                  <Typography
                    variant="body"
                    className="experience-company"
                  >
                    {experience.company}
                  </Typography>
                </div>

                <Typography
                  variant="body"
                  className="experience-description"
                >
                  {experience.description}
                </Typography>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <LineBreak />
      </div>
    </section>
  );
}

export default Experience;