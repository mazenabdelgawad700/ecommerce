import CartItem from "../../Components/CartItem/CartItem";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button>Delete all items</button>
      </div>

      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />

      <div className="total-price">
        <h3>Total Price: $200</h3>
      </div>
    </div>
  );
};

export default Cart;
