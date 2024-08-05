import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAppSelector } from "../../Hooks/App";
const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cartProducts.products);

  const cartItemsCount = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
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
