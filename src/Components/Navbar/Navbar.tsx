import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [count] = useState<number>(0);
  return (
    <nav>
      <NavLink to=""> Shop.</NavLink>
      <NavLink to="/cart">
        cart - <span>{count}</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
