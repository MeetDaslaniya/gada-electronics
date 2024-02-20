import {Productlist} from './Data'

const Cart=()=>{
  let index=0
  let totalPrice=0
  let cartdata = localStorage.getItem("Cart-Item");
  cartdata = JSON.parse(cartdata);
  // const emptyArray=[]
  if(cartdata.length===0){
    return(<><h1>Opps!</h1>
    <b>Card is Empty</b></>)
  }
  else{
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>Item ID</td>
              <td>Item Name</td>
              <td>Item Price</td>
            </tr>
            {
              cartdata.map((item)=>{
                totalPrice = totalPrice + Productlist[item - 1].price;
                return(<tr>
                  {/* <td>{Productlist[item-1].id}</td> */}
                  <td>{index=index+1}</td>
                  <td>{Productlist[item-1].name}</td>
                  <td>{Productlist[item-1].price}RS</td>
                </tr>)
              }
              )
            }
            <tr>
              <td colSpan={2}>Total Amount</td>
              <td>{totalPrice}RS</td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
    
  }
  export default Cart;