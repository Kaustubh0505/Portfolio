import './App.css'
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import Skills from "./components/skills/skills.jsx"
import Projects from './components/Projects/projects.jsx';
import Contact from "./components/Contact/Contact.jsx"
import AboutMe from './components/About_me/About.jsx';

function App() {

  return (
    <div className="main">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />

    </div>
  )
}

export default App
