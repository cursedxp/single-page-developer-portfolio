import cirle from "../images/pattern-circle.svg";
import oval from "../images/pattern-rings.svg";

export default function Profile() {
  return (
    <section className="profile">
      <img className="oval" src={oval} alt="" />
      <div className="profile-image">
        <img className="circle" src={cirle} alt="" />
      </div>
      <div className="personal-information">
        <h2>Nice to meet you! I'm Adam Keyes.</h2>
        <p>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <button>Contact me</button>
      </div>
    </section>
  );
}
