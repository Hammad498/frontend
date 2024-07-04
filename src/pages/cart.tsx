import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId:'qwee',
    name: "Mac",
    photo: "https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg",
    price: 12345,
    stock: 2,
    quantity:4,
  }
];


//dummy values
const subTotal = 4000;
const tax = Math.floor(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;



///states from coupen & validation
const Cart = () => {
  const [coupenCode, setCoupenCode] = useState<string>("");
  const [isValidCoupenCode, setIsValidCoupenCode] = useState<boolean>(false);

////////////////////


  //generate coupencode and render when made 
  useEffect(() => {

    const timeOutId=setTimeout(()=>{
      if(Math.random()>0.5) {setIsValidCoupenCode(true) } else setIsValidCoupenCode(false);
    }, 1000)
    
    return()=>{
      clearTimeout(timeOutId);
      setIsValidCoupenCode(false);
    }
  }, [coupenCode]);
  ///////////////////////////////////////

  return (
    <div className="cart">
      <main>
        {cartItems.length>0?  cartItems.map((i,index) => (
          <CartItem key={index}   cartItem={i}/>
        )): <h1>Cart is empty</h1>}
      </main>

      {/*aside satrts from here*/}

      <aside>
        <p>Subtotal: PKR {subTotal}</p>
        <p>Tax: PKR {tax}</p>
        <p>Shipping : PKR {shippingCharges}</p>
        <p>
          Discount : <em> - PKR {discount}</em>
        </p>
        <p>
          <b>Total : PKR {total}</b>
        </p>

        <input
          type="text"
          placeholder="Enter coupen code"
          value={coupenCode}
          onChange={(e) => setCoupenCode(e.target.value)}
        />

        {coupenCode &&
          (isValidCoupenCode ? (
            <span className="green">
              PKR {discount} off using the <code>{coupenCode}</code>
            </span>
          ) : (
            <span className="red">
              {" "}
              Invalid CoupenCode <VscError />
            </span>
          ))}


          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  );
};

export default Cart;
