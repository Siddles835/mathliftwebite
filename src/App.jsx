import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="page">
      <div className="page__glow" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
