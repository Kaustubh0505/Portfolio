import './App.css'
import Home from './components/Home/home.jsx';
import Skills from "./components/skills/skills.jsx"
import Projects from './components/Projects/Projects.jsx';
import Contact from "./components/Contact/Contact.jsx"
import AboutMe from './components/About_me/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

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
