/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/App";
import {
  setProducts,
  setSingleProduct,
} from "../../State/ListProductSlice/ListProductSlice";
import "./HomePageProductsList.css";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const HomePageProductsList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const products = useAppSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) return;
      const products = await response.json();
      setIsLoading(false);
      dispatch(setProducts(products));
    };
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {!isLoading ? (
        products.map((product) => (
          <div className="product" key={product?.id}>
            <NavLink to={`/products/:${product?.id}`}>
              <img
                src={product?.image}
                alt={product?.title}
                onClick={() => dispatch(setSingleProduct(product))}
              />
            </NavLink>
          </div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default HomePageProductsList;
