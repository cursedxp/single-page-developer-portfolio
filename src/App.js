import "./App.scss";

//Components
import Header from "./components/header.component";
import Profile from "./components/profile.component";
import Skills from "./components/skills.component";
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";

function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <Header />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="owner-name">adamkeyes</div>
        <div className="social-media-links"></div>
      </footer>
    </div>
  );
}

export default App;
