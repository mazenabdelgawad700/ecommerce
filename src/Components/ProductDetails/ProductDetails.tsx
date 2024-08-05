import { useAppDispatch, useAppSelector } from "../../Hooks/App";
import { addToCart } from "../../State/CartSlice/CartSlice";
import { FaStar } from "react-icons/fa6";
import { ReactNode } from "react";
import "./ProductDetails.css";
const ProductDetails = () => {
  const product = useAppSelector((state) => state.products.product);
  const dispatch = useAppDispatch();

  const ratingStars = (): ReactNode => {
    const stars = Math.ceil(product?.rating?.rate);
    return (
      <div>
        {[...Array(stars)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    );
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
        <div className="product-details-rating-rate">
          <span>Rate: </span>
          <div className="icons">{ratingStars()}</div>
        </div>
        <p className="product-details-rating-count">
          Rating Count: {product?.rating?.count}
        </p>
      </div>

      <button
        className="product-details-add-to-cart"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
