import { Link } from '@inertiajs/react';
import { useEffect, useState } from "react";
import ClientLogoSlider from "@/src/components/ClientLogoSlider";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";

export default function Panier(){
  const [paniers ,setPaniers] = useState([]);
  const [total,setTotal] = useState(0);

  useEffect(()=> {
      _init();
  },[])

  const _init = () =>{
      let paniers =  localStorage.getItem('paniers') ?  JSON.parse( localStorage.getItem('paniers')) ?? [] : [];
      calculeTotal(paniers);
      setPaniers(paniers);
  }
  const calculeTotal = (data) =>{
      let total = 0;
      data.forEach(element => {
          total += (element.price * element.quantitePanier);
      });
      setTotal(total);
  } 
  const deletePanier = (id) =>{
      let newPanier = paniers.filter(e=>e.id !== id);
      calculeTotal(newPanier);
      setPaniers(newPanier);
      localStorage.setItem('paniers',JSON.stringify(newPanier));
  }
  const addQuantite = (index) => {
      let quantite = Number.parseInt(paniers[index].quantitePanier);
      quantite += 1;
      paniers[index].quantitePanier = quantite;
      const newPanier = [...paniers];
      calculeTotal(newPanier);
      setPaniers(newPanier);
      localStorage.setItem('paniers',JSON.stringify(newPanier));
  };

  const minQuantite = (index) => {
      let quantite = Number.parseInt(paniers[index].quantitePanier);
      quantite -= 1;
      paniers[index].quantitePanier = quantite;
      const newPanier = [...paniers];
      calculeTotal(newPanier);
      setPaniers(newPanier);
      localStorage.setItem('paniers',JSON.stringify(newPanier));
  };




 

  return (
    <Layout>
      <PageBanner pageName={"Panier"} />
      <div className="cart-area py-130 rpy-100">
        <div className="container">
          <div className="cart-item-wrap mb-35 wow fadeInUp delay-0-2s">
          <div class="cart-table table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th>Image</th>  
                    <th>Produit</th> 
                    <th >Prix</th> 
                    <th>Quantite</th> 
                    <th>Total</th> 
                    <th>Supprimer</th> 
                </tr>
                </thead>
                <tbody id="cart_tbody">
                  {paniers.map((cart,i)=>  <tr>
                        <td>
                          <div className="cart-img d-flex">
                            <img src={cart.image} alt="Product Image" />
                          </div>
                        </td>  
                        <td>
                          <h5 className="product-name" >{cart.name}</h5>
                        </td> 
                        <td> <span className="product-price" >{cart.price} FCFA</span></td> 
                    <td> <div className="quantity-input">
                        <button
                          className="quantity-down"
                          onClick={() => minQuantite(i)}
                        >
                          -
                        </button>
                        <input
                          className="quantity"
                          type="text"
                          defaultValue={cart.quantitePanier}
                          value={cart.quantitePanier}
                          name="quantity"
                        />
                        <button
                          className="quantity-up"
                          onClick={() => addQuantite(i)}
                        >
                          +
                        </button>
                      </div>
                </td> 
                    <td> <span className="product-total-price text-left">
                  {cart.quantitePanier * cart.price} FCFA
                </span></td> 
                    <td class="pro-remove text-right">  <button
                  type="button"
                  className="close"
                  onClick={() =>
                    deletePanier(cart.id)
                  }
                >
                  <span aria-hidden="true">×</span>
                </button></td> 
                </tr>)}
               
                </tbody>
            </table>
          </div>
          </div>
          <div className="row text-center text-lg-left align-items-center wow fadeInUp delay-0-2s">
            <div className="col-lg-6">
              <div className="discount-wrapper rmb-30">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="d-sm-flex justify-content-center justify-content-lg-start"
                >
                  <input type="text" placeholder="Coupon Code" required="" />
                  <button className="theme-btn flex-none" type="submit">
                    appliquer coupon <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </div>
            </div>
             {/*<div className="col-lg-6">
              <div className="update-shopping text-lg-right">
                <Link href="/restaurant"  className="theme-btn style-two">
                    shopping <i className="fas fa-angle-double-right" />
                  
                </Link>
                <Link href="/shop-grid"  className="theme-btn">
                    update cart <i className="fas fa-angle-double-right" />
                  
                </Link> 
              </div>
            </div>*/}
          </div>
          <div className="payment-cart-total pt-25 wow fadeInUp delay-0-2s">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="shoping-cart-total mt-45">
                  <h4 className="form-title m-25">Cart Totals</h4>
                  <table>
                    <tbody>
                    {/*<tr>
                        <td>Nom du restaurant</td>
                        <td className="">chez Tantie Salie</td>
                      </tr>*/}
                      <tr>
                        <td>Sous total</td>
                        <td className="sub-total-price">{total}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link href="/commande"  className="theme-btn style-two mt-25 w-100">
                      Commander
                  </Link>
                </div>
              </div>
            </div>
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
}

