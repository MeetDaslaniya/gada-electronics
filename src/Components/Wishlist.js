import { Productlist } from "./Data";
import { useState, useEffect } from "react";
const Wishlist = () => {
  const [rerender, setRerender] = useState(0);

  let wishlistdata = localStorage.getItem("Wishlist-item");
  wishlistdata = JSON.parse(wishlistdata);

  const RemoveFromWishlist = (id) => {
    let newarray = [];
    for (let i = 0; i < wishlistdata.length; i++) {
      if (wishlistdata[i] != id) {
        newarray.push(wishlistdata[i]);
      }
    }
    localStorage.setItem("Wishlist-item", JSON.stringify(newarray));
    setRerender(rerender + 1);
  };

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
  const [cart, setCart] = useState(initialcart);
  useEffect(() => {
    localStorage.setItem("Cart-Item", JSON.stringify(cart));
  }, [cart]);
  const AddtoCart = (id) => {
    if (cart.includes(id) === true) {
    } else {
      setCart([...cart, id]);
    }
    RemoveFromWishlist(id);
  };

  if (wishlistdata.length === 0) {
    return (
      <>
        <h1>Oops!</h1>
        <b>Wishlist is Empty</b>
      </>
    );
  } else {
    
    return (
      
      <div className="card-outer">
        {wishlistdata.map((item) => {
          return (
            <div className="card">
              <img
                className="img-product"
                src={Productlist[item - 1].img}
                alt="Avatar"
              />
              <div className="card-text">
                <h4>
                  <b>{Productlist[item - 1].name}</b>
                </h4>
                <p>{Productlist[item - 1].name}'s Discription</p>
                <p>Price: {Productlist[item - 1].price}RS</p>
                <p>Reating: {Productlist[item - 1].Reating}Star</p>
                <button
                  className="button1"
                  onClick={() => AddtoCart(Productlist[item - 1].id)}
                >
                  Add to cart
                </button>
                <button
                  className="button2"
                  onClick={() => RemoveFromWishlist(Productlist[item - 1].id)}
                >
                  Remove From Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Wishlist;
