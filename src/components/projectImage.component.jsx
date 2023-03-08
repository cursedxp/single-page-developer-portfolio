export default function ProjectImage(props) {
  const { url, alt } = props;
  return (
    <div
      className="project-img"
      style={{
        backgroundImage: `url(${url})`,
      }}
      alt={alt || "Project Image"}
    ></div>
  );
}
