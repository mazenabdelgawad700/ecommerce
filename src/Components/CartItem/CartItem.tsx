import { useAppDispatch } from "../../Hooks/App";
import { addToCart, removeFromCart } from "../../State/CartSlice/CartSlice";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-item">
      <div className="image">
        <img src={product?.image} alt={product?.title} />
      </div>

      <div className="cart-item-info">
        <div className="cart-item-info-title-and-price">
          <h3 className="cart-item-info-title">{product?.title || 1}</h3>
          <p className="cart-item-info-price">
            Price per one: ${product?.price}
          </p>
          <p className="cart-item-info-price">
            Total Price: ${product?.price * product.quantity}
          </p>
        </div>

        <div className="cart-item-info-quantity">
          <label htmlFor={`quantity-${product?.id}`}>Quantity: </label>
          <input
            type="number"
            id={`quantity-${product?.id}`}
            min="1"
            max="10"
            defaultValue={product?.quantity}
            readOnly
          />
          <div className="cart-item-info-quantity-buttons">
            <button
              className="cart-item-info-quantity-add-button"
              onClick={() => dispatch(addToCart(product))}
            >
              Add
            </button>
            <button
              className="cart-item-info-quantity-remove-button"
              onClick={() => dispatch(removeFromCart(product))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
