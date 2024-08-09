import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Hooks/App";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cartProducts.products);

  const cartItemsCount = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  return (
    <nav>
      <NavLink to="/ecommerce/">
        <img className="logo" src={Logo} alt="Logo" />
      </NavLink>
      <NavLink to="/cart" className="nav-cart">
        <FaCartShopping /> <span> {cartItemsCount}</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
