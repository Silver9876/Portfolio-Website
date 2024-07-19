
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/home/Home'
import Features from './components/features/Features'
import Aboutme from './components/about/Aboutme'
import ScrollAnimation from './components/SrcollAnimation'
import Portfolio from './components/projects/Projects'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'

function App() {

  return (

      <div className='bg-[#212428]'>
    <NavBar />
    <Home />
    <Aboutme />
    <Features />
    <br />
    <br />
    <br />

    <ScrollAnimation />
    <br />
    <br />
    <br />
    <Education />
    <Portfolio /> 
    <Contact />

    </div>
  )
}

export default App
