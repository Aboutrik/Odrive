import { Link } from '@inertiajs/react';
import { useEffect, useState } from "react";
import ClientLogoSlider from "@/src/components/ClientLogoSlider";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";

const CartPage = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      title: "Foutou avec sauce", // "Cart Item 1",
      description: "Cart Item 1", // "Cart Item 1",
      quantity: 1,
      image: "/images/products/product6.jpg",
      price: 250,
    },
    {
      id: 2,
      title: "Attiéké poisson", // "Cart Item  2",
      description: "Cart Item 2", // "Cart Item 2",
      quantity: 1,
      image: "/images/products/product7.jpg",
      price: 250,
    },
    {
      id: 3,
      title: "Orange mûre", // "Cart Item 3",
      description: "Orange mûre", // "Cart Item 3",
      quantity: 1,
      image: "/images/products/product8.png",
      price: 250,
    },
  ]);

  // total price
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [vat, setVat] = useState(15);
  let shipping = 10;
  useEffect(() => {
    setSubTotal(subTotal_());
    setVat(Number((subTotal_() * 15) / 100).toFixed(2));
    setTotalPrice(
      (Number(subTotal_()) + Number(vat) + Number(shipping)).toFixed(2)
    );
    localStorage.setItem(
      "munfirm",
      JSON.stringify({ subTotal, totalPrice, shipping, vat, cartData })
    );
  });

  const subTotal_ = () => {
    return cartData
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => prev + next, 0)
      .toFixed(2);
  };

  const updateQuantity = (item, type) => {
    let findCartItem = cartData.find((cart, i) => i === item);
    findCartItem.quantity =
      type == "-"
        ? findCartItem.quantity === 1
          ? 1
          : findCartItem.quantity - 1
        : findCartItem.quantity + 1;
    setCartData([...cartData]);
  };

  return (
    <Layout>
      <PageBanner pageName={"Vos souhaits"} />
      <div className="cart-area py-130 rpy-100">
        <div className="container">
          <div className="cart-item-wrap mb-35 wow fadeInUp delay-0-2s">
          <div class="cart-table table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th class="pro-thumbnail">Image</th>  
                    <th class="pro-title text-center">Product</th> 
                    <th class="pro-price text-right">Price</th> 
                    <th class="pro-remove text-right">Remove</th> 
                </tr>
                </thead>
                <tbody id="cart_tbody">

                </tbody>
            </table>
          </div>
            {cartData.map((cart, i) => (
              <div className="cart-single-item" key={i}>
                <div className="cart-img d-flex">
                  <img src={cart.image} alt="Product Image" />
                </div>
                <h5 className="product-name" >{cart.title}</h5>
                <span className="product-price" >{cart.price}</span>
                <button
                  type="button"
                  className="close"
                  onClick={() =>
                    setCartData(cartData.filter((c) => c.id !== cart.id))
                  }
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cart Area End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default CartPage;
