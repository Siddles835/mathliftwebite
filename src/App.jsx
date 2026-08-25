import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="app">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Team selectedId={selectedId} onSelect={setSelectedId} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
