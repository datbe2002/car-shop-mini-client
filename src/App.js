import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CarsPage from "./components/Cars/CarsPage";
import Cart from "./components/Cart/Cart";
import NavBar from "./Navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./Context/CartContext";

function App() {
  const [allCars, setAllCars] = useState([]);
  const [myCart, addToCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/api/cars");
      return res;
    }
    getData().then((res) => setAllCars(res.data));
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<CarsPage allCars={allCars} />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
