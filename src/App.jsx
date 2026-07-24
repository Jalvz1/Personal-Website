import Navbar from "./components/Navbar.jsx";
import Reveal from "./components/Reveal.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-100">
      <Navbar />
      <main>
        {/* Each section fades + slides in as it scrolls into view */}
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </div>
  );
}
