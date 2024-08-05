import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
        <p>Created by Mazen Abdelgowad</p>
      </div>
      <div className="icons">
        <NavLink to="https://mazenabdelgowad.github.com" target="_blank">
          <FaGithub />
        </NavLink>
        <NavLink to="https://mazenabdelgowad.github.com" target="_blank">
          <FaLinkedin />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
