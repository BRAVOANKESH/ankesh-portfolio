import Typography from "../../packages/ui/Typography/Typography";
import heroData from "./hero.data";
import Button from "../../packages/ui/Button/Button";
import "./Hero.css";
import cv from "../../assets/docs/resume.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-status">
          <span className="hero-status-dot"></span>

          <span>{heroData.status}</span>
        </div>

        <Typography as="p" variant="eyebrow" className="hero-greeting">
          {heroData.greeting}
        </Typography>

        <Typography as="h1" variant="h1" className="hero-title">
          {heroData.title}
        </Typography>

        <Typography as="p" variant="body" className="hero-description">
          {heroData.description}
        </Typography>

        <div className="hero-actions">
          <Button variant="primary" href="#projects">
            {heroData.primaryButton}
          </Button>
          <Button variant="secondary" href={cv} download="Ankesh-Dutta-CV.pdf">
            {heroData.secondaryButton}
          </Button>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>

        <span className="hero-scroll-arrow">↓</span>
      </div>
    </section>
  );
}

export default Hero;
