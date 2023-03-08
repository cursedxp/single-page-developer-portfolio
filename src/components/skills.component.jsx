import oval from "../images/pattern-rings.svg";
export default function Skills() {
  return (
    <section className="skills">
      <div>
        <h3>HTML</h3>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h3>CSS</h3>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h3>JavaScript</h3>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h3>Accessibility</h3>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h3>React</h3>
        <p>3 Years Experience</p>
      </div>
      <div>
        <h3>Sass</h3>
        <p>3 Years Experience</p>
      </div>
      <div>
        <img className="oval" src={oval} alt="" />
      </div>
    </section>
  );
}
