import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ArchitecturePillars from './components/ArchitecturePillars'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-green/20 selection:text-green">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ArchitecturePillars />
        <Skills />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
