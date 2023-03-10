import "./App.scss";

//Components
import Header from "./components/header.component";
import Profile from "./components/profile.component";
import Skills from "./components/skills.component";
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <Header />
        <Profile />
        <Skills />
        <Projects />
      </main>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
