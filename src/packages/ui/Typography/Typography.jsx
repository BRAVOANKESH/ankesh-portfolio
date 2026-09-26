import "./Typography.css";

function Typography({
  as: Tag = "p",
  variant = "body",
  children,
  className = "",
}) {
  return (
    <Tag className={`typography typography-${variant} ${className}`}>
      {children}
    </Tag>
  );
}

export default Typography;