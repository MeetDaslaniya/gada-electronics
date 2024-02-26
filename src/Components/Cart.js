import { Productlist } from "./Data";
import { useState, useEffect } from "react";
const Cart = () => {
  const [rerender, setRerender] = useState(0);
  let cartdata = localStorage.getItem("Cart-Item");
  cartdata = JSON.parse(cartdata);

  const RemovefromCart = (id) => {
    let newarray = [];
    for (let i = 0; i < cartdata.length; i++) {
      if (cartdata[i] != id) {
        newarray.push(cartdata[i]);
      }
    }
    localStorage.setItem("Cart-Item", JSON.stringify(newarray));
    setRerender(rerender + 1);
  };

  const initialWislist = () => {
    let wishlistdata = localStorage.getItem("Wishlist-item");
    wishlistdata = JSON.parse(wishlistdata);
    const myArray = [];
    if (wishlistdata === myArray) {
      return [];
    } else {
      return wishlistdata;
    }
  };
  const [wishlist, setWishlist] = useState(initialWislist);
  useEffect(() => {
    localStorage.setItem("Wishlist-item", JSON.stringify(wishlist));
  }, [wishlist]);

  const MovetoWishlist = (id) => {
    if (wishlist.includes(id) === true) {
    } else {
      setWishlist([...wishlist, id]);
    }
    RemovefromCart(id);
  };
  let index = 0;
  let totalPrice = 0;

  if (cartdata.length === 0) {
    return (
      <>
        <h1>Oops!</h1>
        <b>Card is Empty</b>
      </>
    );
  } else {
    return (
      <div>
        <table className="cart-table">
          <thead>
            <tr>
              <td>Item ID</td>
              <td>Item Name</td>
              <td>Item Price</td>
              <td>Remove Item</td>
              <td>Move to Wishlist</td>
            </tr>
            {cartdata.map((item) => {
              totalPrice = totalPrice + Productlist[item - 1].price;
              return (
                <tr>
                  {/* <td>{Productlist[item-1].id}</td> */}
                  <td>{(index = index + 1)}</td>
                  <td>{Productlist[item - 1].name}</td>
                  <td>{Productlist[item - 1].price}RS</td>
                  <td>
                    <button
                      className="button2"
                      onClick={() => {
                        RemovefromCart(Productlist[item - 1].id);
                      }}
                    >
                      Remove Item
                    </button>
                  </td>
                  <td>
                    <button
                      className="button1"
                      onClick={() => {
                        MovetoWishlist(Productlist[item - 1].id);
                      }}
                    >
                      Move to Wishlist
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={2}>Total Amount</td>
              <td>{totalPrice}RS</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
};
export default Cart;
