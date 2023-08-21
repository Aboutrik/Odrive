import { Link } from '@inertiajs/react';
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Accueil</Link>
    </li>
  </Fragment>
);

export const PagesDasktop = () => (
  <Fragment>
    <li>
      <Link href="/categories/food">Foods</Link>
    </li>
    <li>
      {/* <Link href="/categories/pharmacie">Pharmacie</Link> */}
      <Link href="/pharmacie">Pharmacie</Link>
    </li>
    <li>
      {/* <Link href="/categories/grande-surface">Grande surface</Link> */}
      <Link href="/grandesurface">Grande surface</Link>
    </li>
  </Fragment>
);
export const PagesMobile = () => (
  <Fragment>
     <li>
      <Link href="/categories/restaurant">Foods</Link>
    </li>
    <li>
      <Link href="/categories/pharmacie">Pharmacie</Link>
    </li>
    <li>
      <Link href="/categories/categories">Grande surface</Link>
    </li>
  </Fragment>
);
export const Portfolio = () => (
  <Fragment>
    <li>
      <Link href="/portfolio-grid">Portfolio grid</Link>
    </li>
    <li>
      <Link href="/portfolio-fluid">Portfolio Fluid</Link>
    </li>
    <li>
      <Link href="/portfolio-details">Portfolio details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">blog Grid</Link>
    </li>
    <li>
      <Link href="/blog-standard">blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details">blog details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop-grid">shop Grid</Link>
    </li>
    <li>
      <Link href="/shop-left-sidebar">shop left sidebar</Link>
    </li>
    <li>
      <Link href="/shop-right-sidebar">shop right sidebar</Link>
    </li>
    <li>
      <Link href="/product-details">Product details</Link>
    </li>
    <li>
      <Link href="/cart">cart page</Link>
    </li>
    <li>
      <Link href="/checkout">checkout</Link>
    </li>
    <li>
      <Link href="/wishlist">wishlist</Link>
    </li>
  </Fragment>
);


export const GrandeSurface = () => (
  <Fragment>
    <li>
      <Link href="/categories">Grande Surface</Link>
    </li>
  </Fragment>
);

// export const Nourriture = () => (
//   <Fragment>
//      <ul>
//         <li>
//           <Link href="/restaurants">Liste des Restaurants</Link>
//         </li>
//         <li>
//           <Link href="/restaurant">Nourritures</Link>
//         </li>
//       </ul>
//   </Fragment>
// );