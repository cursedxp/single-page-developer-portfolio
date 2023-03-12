export default function ProjectImage(props) {
  const { url, alt } = props;
  return (
    <div
      className="project-img"
      style={{
        backgroundImage: `url(${url})`,
      }}
      alt={alt || "Project Image"}
    >
      {props.children}
      <div className="hoverButtons ">
        <a href="/">View Project</a>
        <a href="/">View Code</a>
      </div>
    </div>
  );
}
