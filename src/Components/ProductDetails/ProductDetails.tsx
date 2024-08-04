import { useAppSelector } from "../../Hooks/App";
import "./ProductDetails.css";
const ProductDetails = () => {
  const product = useAppSelector((state) => state.products.product);
  console.log(product);

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

      <button className="product-details-add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
