import './App.css'
import Home from './components/Home/home1.jsx';
import Skills from "./components/skills/skills.jsx"
import Projects from './components/Projects/projects.jsx';
import Contact from "./components/Contact/Contact.jsx"
import AboutMe from './components/About_me/About.jsx';
import Navbar from './components/Navbar/navbar.jsx';

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
