import { useState } from "react";
import { useAppDispatch } from "../../Hooks/App";
import { setProducts } from "../../State/ListProductSlice/ListProductSlice";
type FiltersType = {
  name: string;
};

const Filter = ({ name }: FiltersType) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchProductsByCategory = async () => {
    setIsloading(true);
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${name}`
    );
    if (!response.ok) return;
    setIsloading(false);
    const products = await response.json();
    dispatch(setProducts(products));
  };

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (!response.ok) return;
    const products = await response.json();
    dispatch(setProducts(products));
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
