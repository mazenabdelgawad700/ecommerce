import { useEffect, useState, useTransition } from "react";
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
  const [, startTrainsition] = useTransition();
  const products = useAppSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      startTrainsition(() => {
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            if (!response.ok) return;
            return response.json();
          })
          .then((products) => {
            setIsLoading(false);
            dispatch(setProducts(products));
          });
      });
    };
    getData();
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
