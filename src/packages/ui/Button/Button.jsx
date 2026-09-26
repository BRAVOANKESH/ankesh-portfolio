import "./Button.css";

function Button({
  children,
  href,
  download,
  variant = "primary",
  className = "",
  ...props
}) {
  const buttonClass = `ui-button ui-button-${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;