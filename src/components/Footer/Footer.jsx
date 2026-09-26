import Typography from "../../packages/ui/Typography/Typography";
import "./Footer.css";

function Footer() {
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

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=duttaankesh@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-email"
            >
              duttaankesh@gmail.com ↗
            </a>
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

          <Typography variant="small">Built with React Js ( Monorepo Architechture )</Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
