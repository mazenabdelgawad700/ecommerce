import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";

const Filters = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) return;
      const categories = await response.json();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="filters">
      <Filter name="All" />
      {categories.map((category) => (
        <Filter name={category} key={category} />
      ))}
    </div>
  );
};

export default Filters;
