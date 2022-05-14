// function App() {
//   return <h1>
//     Hey World.
//   </h1>
// }

///Week 11 01



// ! Destructuring import syntax!
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import SingleProduct from "./components/Product"
import Navbar from "./components/Navbar"

function App() {
  // ! 1) You need a router. You'll pretty always use BrowserRouter
  // ! 2) You make a Routes component inside.
  // ! 3) You create all the actual Route components.
  // ! Those need 2 things: URL path, and the actual component to render.

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productName" element={<SingleProduct />} />
      </Routes>
    </Router>
  )
}

export default App
