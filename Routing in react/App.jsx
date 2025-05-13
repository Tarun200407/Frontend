import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home1'
import About from './About1'
import NavigationBar from './Navigation'
import Contact from './Contact1'

function App() {

  return (
    <>
     
      <BrowserRouter>
    
        {/* <Navbar /> */}
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
