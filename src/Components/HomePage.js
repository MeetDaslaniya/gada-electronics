import { useState, useEffect } from "react";
import { DiscountTemplate } from "./Data";
import { Productlist } from "./Data";

const HomePage = () => {
  const [sortBy, setSortBy] = useState("Most Viewed");

  let newdata = [];
  if (sortBy === "low to high") {
    newdata = Productlist.sort((p1, p2) =>
      p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
    );
  }
  if (sortBy === "high to low") {
    newdata = Productlist.sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
  }
  if (sortBy === "A to Z") {
    newdata = Productlist.sort((p1, p2) =>
      p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0
    );
  }
  if (sortBy === "most reating") {
    newdata = Productlist.sort((p1, p2) =>
      p1.Reating < p2.Reating ? 1 : p1.Reating > p2.Reating ? -1 : 0
    );
  }
  if (sortBy === "most viewed") {
    newdata = Productlist.sort((p1, p2) =>
      p1.index > p2.id ? 1 : p1.id < p2.id ? -1 : 0
    );
  }
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

  const [input, setInput] = useState("");
  const [cart, setCart] = useState(initialcart);
  const [wishlist, setWishlist] = useState(initialWislist);

  useEffect(() => {
    localStorage.setItem("Cart-Item", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("Wishlist-item", JSON.stringify(wishlist));
  }, [wishlist]);

  const AddtoCart = (id) => {
    if (cart.includes(id) === true) {
    } else {
      setCart([...cart, id]);
    }
  };
  const AddtoWishlist = (id) => {
    if (wishlist.includes(id) === true) {
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div>
      <div className="welcome">
        <h1>Welcome to Gada Electronics</h1>
        <p>Best price on Best Brands</p>
      </div>

      <img className="imgcontainer-1" src={DiscountTemplate} />
      <div className="main-div-homepage">
        <div>
          <input
            className="input-homepage"
            placeholder="Search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>

        <div className="first-div-homepage">
          <label id="sort" className="Sort-By-Homepage">
            Sort By
          </label>
          <select
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            name="sort"
            id="sort"
            className="filtered-box"
          >
            <option value="most viewed">Most Viewed</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
            <option value="A to Z">A to Z</option>
            <option value="most reating">Most Reating</option>
          </select>
        </div>
        <div className="second-div-homepage">
          <label>
            <b>Filter:</b>
          </label>
          <input type="radio" name="Filter" onClick={() => setInput("TV")} />
          TV
          <input type="radio" name="Filter" onClick={() => setInput("Watch")} />
          Watch
          <input type="radio" name="Filter" onClick={() => setInput(" ")} />
          TV&&Watch
        </div>
      </div>
      <div className="card-o-outer">
        <div className="card-outer">
          {Productlist.filter((item) => {
            return input.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(input.toLowerCase());
          }).map((item) => {
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

                  {cart.includes(item.id) ? (
                    <button className="button1 ">Already added</button>
                  ) : (
                    <button
                      className="button1 "
                      onClick={() => AddtoCart(item.id)}
                    >
                      Add to cart
                    </button>
                  )}
                  {wishlist.includes(item.id) ? (
                    <button className="button1">Already added</button>
                  ) : (
                    <button
                      className="button1"
                      onClick={() => AddtoWishlist(item.id)}
                    >
                      Add to Wishlist
                    </button>
                  )}
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
