import { useAppDispatch, useAppSelector } from "../../Hooks/App";
import { addToCart } from "../../State/CartSlice/CartSlice";
import "./ProductDetails.css";
const ProductDetails = () => {
  const product = useAppSelector((state) => state.products.product);
  const cartProducts = useAppSelector((state) => state.cartProducts.products);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (cartProducts.includes(product)) {
      // count++
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="product-details" style={{ paddingTop: "52px" }}>
      <img
        className="product-details-image"
        src={product?.image}
        alt={product?.title}
      />
      <h1 className="product-details-title">{product?.title}</h1>
      <p className="product-details-description">{product?.description}</p>

      <p className="product-details-price">Price: ${product?.price}</p>
      <div className="product-details-rating">
        <p className="product-details-rating-rate">
          Rating: {product?.rating?.rate}
        </p>
        <p className="product-details-rating-count">
          Rating Count: {product?.rating?.count}
        </p>
      </div>

      <button className="product-details-add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
