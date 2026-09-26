import Typography from "../../packages/ui/Typography/Typography";
import "./Footer.css";
import { useState } from "react";
import ArchitectureModal from "../ArchitectureModal/ArchitectureModal";

function Footer() {
  const [architectureOpen, setArchitectureOpen] = useState(false);
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-intro">
            <Typography as="p" variant="eyebrow">
              Get in touch
            </Typography>

            <Typography as="h2" variant="h2">
              Let's build something great together.
            </Typography>

            <Typography variant="body">
              I'm open to frontend development opportunities, collaborations,
              and interesting projects.
            </Typography>

            <div className="footer-contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=duttaankesh@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-link"
              >
                duttaankesh@gmail.com ↗
              </a>

              <a
                href="https://wa.me/916291797947?text=Hi%20Ankesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20frontend%20development%20opportunity."
                target="_blank"
                rel="noreferrer"
                className="footer-contact-link"
              >
                WhatsApp me ↗
              </a>
            </div>
          </div>

          <div className="footer-links">
            <Typography as="p" variant="eyebrow">
              Connect
            </Typography>

            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <Typography variant="small">
            © {new Date().getFullYear()} Handcrafted by Ankesh Dutta.
          </Typography>

          <button
            type="button"
            className="architecture-trigger"
            onClick={() => setArchitectureOpen(true)}
          >
            Built with React Js (Monorepo Architecture)
          </button>
        </div>
      </div>
      <ArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />
    </footer>
  );
}

export default Footer;
