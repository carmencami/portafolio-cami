import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Testimonials from './components/testimonials';
import Skills from './components/skills';

function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default App;
