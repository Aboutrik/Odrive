import { Link } from '@inertiajs/react';
import PageBanner from "@/src/components/PageBanner";
import Pagination from "@/src/components/Pagination";
import Layout from "@/src/layout/Layout";

const ShopLeftSidebar = () => {
  return (
    <Layout>
      <PageBanner pageName={"Pharmacie"} />
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
                      <Link href="/shop-grid">Dermatologie</Link>{" "}
                      <span>(19)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Irritation de la peau</Link>{" "}
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
                          src="/images/widgets/medoc1.jpg"
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
                          <Link href="/product-details">Biseptique</Link>
                        </h5>
                        <span className="price">500</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="/images/widgets/medoc5.jpg"
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
                          <Link href="/product-details">Efferagant</Link>
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
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="/images/widgets/medoc4.jpg"
                        alt="Product"
                      />
                    </div>
                    <div class="product-hover-icons">
                              <a href="javascript:void(0);" data-tooltip="Ajouter au panier" onClick={()=>addToBasketById(p)}> <img src="/images/img/cartw.png" className="img-fluid" style={{padding: "10px"}}/></a> {/*Add to cart */}
                              <a href="javascript:void(0);" data-tooltip="Ajouter à la liste de souhaits" onClick={()=>addToWishList(id)}> <img src="/images/img/addwash.png" className="img-fluid" style={{padding: "10px"}} /> </a> {/*Add to wishlist*/}
                              <a href="javascript:void(0);" data-tooltip="Apercu rapide" onClick={"openModal(${id});"} data-toggle="modal" data-target="#quick-view-modal-container"><img src="/images/img/view.png" className="img-fluid" style={{padding: "10px"}}/> </a> {/*Quick view */}
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
                        <Link href="/product-details">Nivaquine</Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="/images/widgets/medoc5.jpg"
                        alt="Product"
                      />
                      <div class="product-hover-icons">
                              <a href="javascript:void(0);" data-tooltip="Ajouter au panier" onClick={()=>addToBasketById(p)}> <img src="/images/img/cartw.png" className="img-fluid" style={{padding: "10px"}}/></a> {/*Add to cart */}
                              <a href="javascript:void(0);" data-tooltip="Ajouter à la liste de souhaits" onClick={()=>addToWishList(id)}> <img src="/images/img/addwash.png" className="img-fluid" style={{padding: "10px"}} /> </a> {/*Add to wishlist*/}
                              <a href="javascript:void(0);" data-tooltip="Apercu rapide" onClick={"openModal(${id});"} data-toggle="modal" data-target="#quick-view-modal-container"><img src="/images/img/view.png" className="img-fluid" style={{padding: "10px"}}/> </a> {/*Quick view */}
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
                        <Link href="/product-details">Efferagant</Link>
                      </h5>
                      <span className="price">
                        <span>49.58</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer bg-red">sale</span>
                    <div className="image">
                      <img
                        src="/images/widgets/medoc6.jpg"
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
                        <Link href="/product-details">Paracetamol</Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="/images/widgets/medoc7.jpg"
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
                        <Link href="/product-details">Sonosole</Link>
                      </h5>
                      <span className="price">
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <span className="offer">20 Off</span>
                    <div className="image">
                      <img
                        src="/images/widgets/medoc1.jpg"
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
                        <Link href="/product-details">Biseptique</Link>
                      </h5>
                      <span className="price">
                        <del>55</del>
                        <span>36</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="/images/widgets/medoc8.jpg"
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
                        <Link href="/product-details">Manozol</Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="pagination flex-wrap justify-content-center pt-10">
                {/* <Pagination
                  paginationCls={".shop-left-sidebar-row .col-xl-4"}
                  defaultSort={6}
                /> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ShopLeftSidebar;
