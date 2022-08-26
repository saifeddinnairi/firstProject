import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import ProductsByCat from "./pages/ProductsByCat"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/products/:cat' element={<ProductsByCat/>}/>
         
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
