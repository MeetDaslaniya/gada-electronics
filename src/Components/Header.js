import { Link } from "react-router-dom";

const Header=()=>{
    return(
      <div className="header">
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contectus">Contactus</Link></li>
            <li><Link to="/aboutus">Aboutus</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">CART</Link></li>
            {/* <li><button><Link to="/login">Login</Link></button></li> */}
            </ul>
      </div>
    )
  }
  export default Header;