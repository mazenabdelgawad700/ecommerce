import { useState, useTransition } from "react";
import { useAppDispatch } from "../../Hooks/App";
import { setProducts } from "../../State/ListProductSlice/ListProductSlice";
type FiltersType = {
  name: string;
};

const Filter = ({ name }: FiltersType) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [, startTrainsition] = useTransition();
  const dispatch = useAppDispatch();

  const fetchProductsByCategory = async () => {
    startTrainsition(() => {
      setIsloading(true);
      fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then((response) => {
          if (!response.ok) return;
          setIsloading(false);
          return response.json();
        })
        .then((products) => {
          dispatch(setProducts(products));
        });
    });
  };

  const fetchProducts = async () => {
    startTrainsition(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (!response.ok) return;
          return response.json();
        })
        .then((products) => {
          dispatch(setProducts(products));
        });
    });
  };

  return (
    <button
      className="filter"
      disabled={isLoading}
      onClick={() => {
        if (name.toLocaleLowerCase() !== "all") fetchProductsByCategory();
        else fetchProducts();
      }}
    >
      {name}
    </button>
  );
};

export default Filter;
