import "./App.css";
import HomePage from "./Components/HomePage";
import Wishlist from "./Components/Wishlist";
import Aboutus from "./Components/About-us";
import Contactus from "./Components/Contact-us";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/contectus" element={<Contactus />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path='/paynow' element={<Paynow/>}/> */}
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
