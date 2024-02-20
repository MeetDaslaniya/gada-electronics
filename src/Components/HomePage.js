import { useState , useEffect} from "react";
import { DiscountTemplate } from "./Data";
import { Productlist } from "./Data";

const HomePage = () => {
  const initialcart = () => {
    let cartdata = localStorage.getItem("Cart-Item");
    cartdata = JSON.parse(cartdata);
    const myArray = [];
    if (cartdata === myArray) {
      return [];
    } else {
      return cartdata;
    }
  };

  const initialWislist=()=>{
    let wishlistdata = localStorage.getItem("Wishlist-item");
    wishlistdata = JSON.parse(wishlistdata);
    const myArray = [];
    if (wishlistdata === myArray) {
      return [];
    } else {
      return wishlistdata;
    }
  }
  const [cart,setCart]=useState(initialcart)
  const [wishlist,setWishlist]=useState(initialWislist)

  useEffect(() => {
    localStorage.setItem("Cart-Item", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("Wishlist-item", JSON.stringify(wishlist));
  }, [wishlist]);
  
    const AddtoCart=(id)=>{
      if(cart.includes(id)===true){
        console.log("Already added")
      }
      else{
        setCart([...cart,id])
        console.log(cart)
      }
  }
  const AddtoWishlist=(id)=>{
    if(wishlist.includes(id)===true){
      console.log("Already added")
    }
    else{
      setWishlist([...wishlist,id])
      console.log(wishlist)
    }
  }

  return (
    <div>
      <div className="welcome">
        <h1>Welcome to Gada Electronics</h1>
        <p>Best price on Best Brands</p>
      </div>

      <img className="imgcontainer-1" src={DiscountTemplate} />

      <div className="card-o-outer">
        <div className="card-outer">
          {Productlist.map((item) => {
            return (
              <div className="card">
                <img className="img-product" src={item.img} alt="Avatar" />
                <div className="card-text">
                  <h4>
                    <b>{item.name}</b>
                  </h4>
                  <p>{item.name}'s Discription</p>
                  <p>Price: {item.price}RS</p>
                  <p>Reating: {item.Reating}Star</p>
                  <button className="button1" onClick={()=>AddtoCart(item.id)}>Add to cart</button>
                  <button className="button1" onClick={()=>AddtoWishlist(item.id)}>Add to Wishlist</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
