import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
