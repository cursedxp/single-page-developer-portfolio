import "./App.scss";

//Components
import Header from "./components/header.component";

function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <Header />
        <section className="profile">
          <div className="profile-picture">
            <div className="ovals"></div>
            <img className="user-image" src="" alt="" />
            <div className="circle"></div>
          </div>
          <div className="personal-information">
            <h2>Nice to meet you! I'm Adam Keyes.</h2>
            <p>
              Based in the UK, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button>Contact me</button>
          </div>
        </section>

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
        </section>

        <section className="projects">
          <div>
            <h2>Projects</h2>
            <button>Contact me</button>
          </div>
          <div className="project-list">
            <div className="project">
              <img className="project-img" src="" alt="" />
              <div className="project-name">Design portfolio</div>
              <div className="project-tech">
                <div className="tech">HTML</div>
                <div className="tech">Css</div>
              </div>
              <div className="project-buttons">
                <button>View Project</button>
                <button>View Code</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3>Contact</h3>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form action="">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button>Send Messa</button>
          </form>
        </section>
      </main>
      <footer>
        <div className="owner-name">adamkeyes</div>
        <div className="social-media-links"></div>
      </footer>
    </div>
  );
}

export default App;
