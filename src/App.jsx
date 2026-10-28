
import './App.css'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import logo from './assets/react.svg'

function App() {

  return (
    <>
    <img src={logo} alt='react' />
    <Home/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
