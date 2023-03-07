//Assets
import githubIcon from "../images/icon-github.svg";
import femIcon from "../images/icon-frontend-mentor.svg";
import linkedInIcon from "../images/icon-linkedin.svg";
import twitter from "../images/icon-twitter.svg";

export default function Header() {
  return (
    <header className="flex column justify-center items-center">
      <div className="owner-name">adamkeyes</div>
      <ul className="social-media-links flex items-center gap-4">
        <li>
          <a href="" target="_blank">
            <img src={githubIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={femIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={linkedInIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </header>
  );
}
