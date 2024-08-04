import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAppSelector } from "../../Hooks/App";
const Navbar = () => {
  const cartItemsCount = useAppSelector(
    (state) => state.cartProducts.products.length
  );
  return (
    <nav>
      <NavLink to=""> Shop.</NavLink>
      <NavLink to="/cart">
        cart - <span>{cartItemsCount}</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
