import { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../Hooks/App";
import { clearCart } from "../../State/CartSlice/CartSlice";
import "./Cart.css";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartProducts = useAppSelector((state) => state.cartProducts.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTotalPrice(
      cartProducts.reduce(
        (acc, product) => (acc += product.price * product.quantity),
        0
      )
    );
  }, [cartProducts]);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={() => dispatch(clearCart())}>Delete all items</button>
      </div>

      {cartProducts
        ? cartProducts.map((product) => (
            <CartItem key={+product?.id + Math.random()} product={product} />
          ))
        : null}

      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
