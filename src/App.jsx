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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Stats />
        <Science />
        <Ingredient />
        <Comparison />
        <Applications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
