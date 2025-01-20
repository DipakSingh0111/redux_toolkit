
import './App.css'
import CartApi from './component/CartApi'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Cart from './component/Cart';


function App() {

  return (
    <>
      
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CartApi/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
