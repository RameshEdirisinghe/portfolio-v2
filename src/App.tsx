import About from './components/About';
import AboutSection from './components/AboutSection';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      <div className="site-shell">
        <div className="ambient-blur ambient-blur-left" />
        <div className="ambient-blur ambient-blur-right" />
        <div className="page-noise" />
        <Header />
        <main className="relative z-10">
          <About />
          <AboutSection />
          <TechStack />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
