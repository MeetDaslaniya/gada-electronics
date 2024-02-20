import { Productlist } from "./Data";

const Wishlist = () => {
  let wishlistdata = localStorage.getItem("Wishlist-item");
  wishlistdata = JSON.parse(wishlistdata);
  if (wishlistdata.length === 0) {
    return (
      <>
        <h1>Opps!</h1>
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
                src={Productlist[item-1].img}
                alt="Avatar"
              />
              <div className="card-text">
                <h4>
                  <b>{Productlist[item-1].name}</b>
                </h4>
                <p>{Productlist[item-1].name}'s Discription</p>
                <p>Price: {Productlist[item-1].price}RS</p>
                <p>Reating: {Productlist[item-1].Reating}Star</p>
                {/* <button className="button1" onClick={()=>AddtoCart(item.id)}>Add to cart</button>
                  <button className="button1" onClick={()=>AddtoWishlist(item.id)}>Add to Wishlist</button> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Wishlist;
