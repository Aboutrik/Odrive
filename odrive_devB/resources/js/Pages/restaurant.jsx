import { Link } from '@inertiajs/react';
import PageBanner from "@/src/components/PageBanner";
import Pagination from "@/src/components/Pagination";
import Layout from "@/src/layout/Layout";
import { useState } from 'react';
import dataProduct from '@/src/components/DATAproduct';


const ShopLeftSidebar = () => {
  const [data, setData] = useState(dataProduct);
  const [basketItems, setBasketItems] = useState(JSON.parse(localStorage.getItem("items")) || []);


  const addToBasketById = async (id) => {
    try{
      for (var i = basketItems.length; i--;)
        if (basketItems[i].id == id)
            return showNotification("pastel-danger", "Ce produit est dejà dans le panier", "bottom", "center", "", "");  // This product already on cart

    const response = await fetch('/foodsInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            //'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        },
        body: JSON.stringify({ id: id })
      })

      if (!response.ok) {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête', response);
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data.food == null){
        return;
      }
      for (var i = basketItems.length; i--;)
          if (basketItems[i].restId != data.food.restId)
              return showMessageDifferentShopsInBasket(id);

      var _price = data.food.price;
      var _dprice = data.food.discountprice;
      var _name = data.food.name;
      if (temp_variant_id != "")
          data.food.variants.forEach(function(data){
              if (data.id == temp_variant_id){
                  _price = data.price;
                  _dprice = data.dprice;
                  _name = _name + " " + data.name;
              }
          });
      // save to local basket
      var item = {
          id: data.food.id,
          title: _name,
          price: _price,
          discountprice: _dprice,
          image: data.food.image,
          count: countToBasket,
          restId: data.food.restId,
          restName: data.food.restName,
          tax: data.food.tax,
          //
          fee: data.food.fee,
          percent: data.food.percent,
          perkm: data.food.perkm,
          minAmount: data.food.minAmount,
          //
          extras: temp_extras_ids,
      };
      temp_variant_id = "";
      countToBasket = 1;
      basketItems.push(item);
      console.log("basketItems", basketItems);
      localStorage.setItem('items', JSON.stringify(basketItems));
      initBasket();
      saveOrder();
      showNotification("pastel-info", "Produit ajouter dans le panier", "bottom", "center", "", "");  // Product added to cart
        
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier', error);
    }
  }

  return (
    <Layout>
      <PageBanner pageName={"Restaurant"} />
      <section className="shop-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-8">
              <div className="shop-sidebar mt-65">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Chercher un produit"
                      required
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Categories
                  </h4>
                  <ul>
                    <li>
                      <Link href="/shop-grid">Fast food</Link>{" "}
                      <span>(19)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Plats ivoirien</Link>{" "}
                      <span>(56)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Filtrer par prix
                  </h4>
                  <ul>
                    <li>
                      <Link href="/shop-grid">1500F - 2000F</Link>{" "}
                      <span>(159)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">2500F - 3500F</Link>{" "}
                      <span>(240)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">5000F - 10000F</Link>{" "}
                      <span>(183)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">15000F - 20000F</Link>{" "}
                      <span>(324)</span>
                    </li>
                   
                  </ul>
                </div>
                <div className="widget widget-products wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Meilleur vente
                  </h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="/images/widgets/product1.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="/product-details">Juis d'orange</Link>
                        </h5>
                        <span className="price">290</span>
                      </div>
                    </li>
                   
                    <li>
                      <div className="image">
                        <img
                          src="/images/widgets/product3.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="/product-details">Salade</Link>
                        </h5>
                        <span className="price">500</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="/images/widgets/product4.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="/product-details">Croissant</Link>
                        </h5>
                        <span className="price">200</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 mt-55">
              <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s">
                <div className="products-dropdown">
                  <select>
                    <option value="default" selected="">
                     Meilleur vente
                    </option>
                    <option value="new">Recents</option>
                    <option value="old">Anciens</option>
                    <option value="hight-to-low">Prix bas</option>
                    <option value="low-to-high">Prix élevés</option>
                  </select>
                </div>
                <ul className="grid-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-border-all" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row shop-left-sidebar-row">
                {data.map((product, p) => (
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6" key={p}>
                    <div className="product-item gf-product wow fadeInUp delay-0-2s">
                      <span className="offer">{product.etat}</span>
                      <div className="image">
                        <img
                          src={product.image}
                          alt="Product"
                        />
                          <div class="product-hover-icons">
                              <a href="javascript:void(0);" data-tooltip="Ajouter au panier" onClick={()=>addToBasketById(p)}> <img src="/images/img/cartw.png" className="img-fluid" style={{padding: "10px"}}/></a> {/*Add to cart */}
                              <a href="javascript:void(0);" data-tooltip="Ajouter à la liste de souhaits" onClick={"addToWishList(${id})"}> <img src="images/img/addwash.png" className="img-fluid" style={{padding: "10px"}} /> </a> {/*Add to wishlist*/}
                              <a href="javascript:void(0);" data-tooltip="Apercu rapide" onClick={"openModal(${id});"} data-toggle="modal" data-target="#quick-view-modal-container"><img src="images/img/view.png" className="img-fluid" style={{padding: "10px"}}/> </a> {/*Quick view */}
                          </div>
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="/product-details">{product.title}</Link>
                        </h5>
                        <span className="price">
                          <del>25</del>
                          <span>{product.price}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}   
              </div>
              <ul className="pagination flex-wrap justify-content-center pt-10">
                <Pagination
                  paginationCls={".shop-left-sidebar-row .col-xl-4"}
                  defaultSort={6}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};



// localStorage.setItem('items', JSON.stringify([]));
//let basketItems = JSON.parse(localStorage.getItem("items")) || [];
export default ShopLeftSidebar;
