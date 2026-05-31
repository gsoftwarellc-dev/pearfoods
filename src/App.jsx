import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Stats from './components/Stats'
import Science from './components/Science'
import Ingredient from './components/Ingredient'
import Comparison from './components/Comparison'
import Applications from './components/Applications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlobalImpact from './pages/GlobalImpact'
import ThankYou from './pages/ThankYou'

function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <Stats />
      <Science />
      <Ingredient />
      <Comparison />
      <Applications />
      <About />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
      <Routes>
        <Route path="/" element={<main><HomePage /></main>} />
        <Route path="/global-impact" element={<GlobalImpact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
