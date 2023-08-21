import { Link } from '@inertiajs/react';
import { Fragment, useState } from "react";
import { sidebarToggle } from "../utils";
import { Blog, GrandeSurface, Home, PagesDasktop, Portfolio, Shop } from "./Menus";
import { Basket } from "../components/Basket";
import MobileMenu from "./MobileMenu";

const Header = ({ header }) => {
 return  <Header1 />;
};
export default Header;

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};
const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <Home/>

    <li className="dropdown">
      <a href="#">services</a>
      <ul>
        <PagesDasktop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>

    <li>
      <Link href="/#partenaires">Devenir partenaires</Link>
    </li>

    <li>
      <Link href="/commande">Paiement</Link>
    </li>

     {/* <li>
      <Link href="/souhait">Vos souhaits <çi class="fa fa-heart fa-beat" style={{color: "red", "faAnimationDuration": "2s"}}></i></Link>
    </li> */}

    {/* <li>
      <Link href="/contact">Contact</Link>
    </li> */}
    {/* <Contact /> */}

  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link href="/">
            
              <img src="/images/logos/logo.png" alt="Logo" title="Logo" />
              <img
                src="/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

 const Header1 = () => (
  <header className="main-header menu-absolute">
    {/* <div className="header-top-wrap bg-light-green text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Contactez-nous :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <b>Nous somme disponible :</b> Lundi
                    - Dimanche, 07h - 23h
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b></b>{" "}
                    <a href="callto:+012(345)67899">+225 0757580033</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                  <img
                    src="/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
               
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            <Nav />
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button> */}
            <Basket />
            <Link href="/login" className='theme-btn'>
                Compte <i className="fas fa-angle-double-right" />
            </Link>
          
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);

