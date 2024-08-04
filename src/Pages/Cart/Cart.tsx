import CartItem from "../../Components/CartItem/CartItem";
import { useAppSelector } from "../../Hooks/App";
import "./Cart.css";
const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cartProducts.products);

  //localStorage.clear();

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button>Delete all items</button>
      </div>

      {cartProducts
        ? cartProducts.map((product) => <CartItem key={+product?.id + 1} />)
        : null}

      <div className="total-price">
        <h3>Total Price: $200</h3>
      </div>
    </div>
  );
};

export default Cart;
