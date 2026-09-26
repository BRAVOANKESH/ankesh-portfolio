import { useEffect } from "react";
import Typography from "../../packages/ui/Typography/Typography";
import "./ArchitectureModal.css";

function ArchitectureModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="architecture-overlay" onClick={onClose}>
      <div
        className="architecture-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="architecture-close"
          onClick={onClose}
          aria-label="Close architecture information"
        >
          ×
        </button>

        <Typography as="p" variant="eyebrow">
          Architecture
        </Typography>

        <Typography as="h2" variant="h2">
          Monorepo-style Architecture
        </Typography>

        <Typography variant="body" className="architecture-description">
          This portfolio uses a monorepo-style architecture where reusable UI
          components, application features, and shared code are organized
          inside a single repository.
        </Typography>

        <div className="architecture-tree">
          <pre>{`#This is the Current Structure
for now will be adding 
icons , colors ,ThemeToggle
and Backend Logic     

src/
├── components/
│   ├── Header/
│   ├── Footer/
│   └── ThemeToggle/ <- still in development
│
├── features/
│   ├── Hero/
│   ├── Skills/
│   ├── Experience/
│   └── Projects/
│
└── packages/
    └── ui/ <- Does not contain icons
        ├── Button/
        ├── Card/
        ├── LineBreak/
        └── Typography/`}</pre>
        </div>

        <div className="architecture-points">
          <div>
            <strong>Reusable</strong>
            <span>
              Shared UI components can be reused across different features.
            </span>
          </div>

          <div>
            <strong>Organized</strong>
            <span>
              Features and shared components have clear boundaries.
            </span>
          </div>

          <div>
            <strong>Scalable</strong>
            <span>
              The structure can grow as the application becomes larger.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureModal;