import { useState } from "react";
import { Blog, Home, PagesMobile, Portfolio, Shop } from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
       <Home/>
   
      <li className="dropdown">
        <a href="#">Services</a>
        <ul style={activeLi("services")}>
          {/* <Nourriture /> */}
        </ul>
        <div
          className="dropdown-btn"
          onClick={() => activeMenuSet("nouriture")}
        >
          <span className="fas fa-chevron-down" />
        </div>
      </li>

      <li className="dropdown">
        <a href="#">Devenir partenaires</a>
        <ul style={activeLi("blog")}>
          <Blog />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("blog")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Paiement</a>
        <ul style={activeLi("shop")}>
          <Shop />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("shop")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
    </ul>
  );
};
export default MobileMenu;
