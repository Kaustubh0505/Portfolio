import './App.css'
import Home from './components/Home/home.jsx';
import Skills from "./components/skills/skills.jsx"
import Projects from './components/Projects/Projects.jsx';
import Contact from "./components/Contact/Contact.jsx"
import AboutMe from './components/About_me/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Experience from './components/Experience/Experience.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <div className="main">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
