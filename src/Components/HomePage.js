import { DiscountTemplate } from "./Data";
import { DiscountHead } from "./Data";
import { Discount } from "./Data";
import { Productlist } from "./Data";
const HomePage = () => {
  
  return (
    <div>
      <div className="welcome">
        <h1>Welcome to Gada Electronics</h1>
        <p>Best price on Best Brands</p>
      </div>
      <img className="imgcontainer-1" src={DiscountTemplate} />
      <img className="imgcontainer" src={DiscountHead} />
      {Discount.map((index) => {
        return <img className="discount-img" src={index.img} />;
      })}
      {/* <div className="card-outer"> */}
        {Productlist.map((item) => {
          return(<div className="card">
            <img className="img-product" src={item.img} alt="Avatar" />
            <div>
              <h4>
                <b>{item.name}</b>
              </h4>
              <p>{item.name}'s Discription</p>
              <p>Price: {item.price}RS</p>
              <p>Reating: {item.Reating}Star</p>
              <button className="button1">Add to cart</button>
            </div>
          </div>)
        })}
      </div>
    // </div>
  );
};
export default HomePage;
