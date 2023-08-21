import { Link } from '@inertiajs/react';
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Layout from "@/src/layout/Layout";
import { productActiveTwo } from "@/src/sliderProps";
// import { useCookies } from 'react-cookie';
import { useState } from 'react';

export default function Product({product, path, related}){
  // const [cookies, setCookie, removeCookie] = useCookies(['paniers']);
  const [quantiteAdd, setQuantiteAdd] = useState(1);
 
  const addToPanier=event=>{
    
    let paniers = localStorage.getItem('paniers') ?  JSON.parse(localStorage.getItem('paniers')) ?? [] : [];
    if(paniers.length > 0){
      let filtreResultat = paniers.filter(e=>e.name == product.name);
      if(filtreResultat.length > 0){
        let productPanier = filtreResultat.length > 0 ? filtreResultat[0] : null;
        let quantite = productPanier.quantitePanier;
        quantite += quantiteAdd;
        let index = paniers.findIndex(e=>e.name == product.name)
        paniers[index].quantitePanier = quantite;
      }else {
        paniers.push({
          ...product,
          "quantitePanier" : quantiteAdd
        });
      }
   
    }else {
      paniers.push({
        ...product,
        "quantitePanier" : quantiteAdd
      });
    }
    localStorage.setItem('paniers',JSON.stringify(paniers));
    event.preventDefault();
  }


  
  return (
        <Layout>
          {/*<PageBanner pageName={"Product Details"} />*/}
          <section className="product-details-area pt-130 rpt-100">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                  <div className="product-preview-images rmb-55 wow fadeInLeft delay-0-2s">
                    <a href={path}>
                      <img 
                         src={path}
                        alt="Preview"
                      />
                    </a>
                    
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                    <div className="off-ratting mb-15">
                      {/*<span className="off">20 Off</span>*/}
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="section-title mb-20">
                      <h2>{product.name}</h2>
                    </div>
                    <p>
                      {product.short_description}
                    </p>
                    <span className="price mb-20">{product.price}</span>
                    <hr />
                    <form
                      onSubmit={addToPanier}
                      action="#"
                      className="add-to-cart mt-40 mb-40"
                    >
                      <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        max={20}
                        value={quantiteAdd}
                        onChange={e=>setQuantiteAdd(e.target.value)}
                        required
                      />
                      <button type="submit" className="theme-btn">
                        Ajouter au panier <i className="fas fa-angle-double-right" />
                      </button>
                    </form>
                    <hr />
                    {product.type =="pharmacie" && <ul className="category-tags pt-10">
                       
                      <li>
                        <b>Requiere une prescription</b>
                        <span>:</span>
                        <a href="#">Green</a>
                        <a href="#">Vegetables</a>
                      </li>
                      <li>
                        <b>Interdit au femme eceinte</b>
                        <span>:</span>
                        <a href="#">Green</a>
                        <a href="#">Vegetables</a>
                      </li>
                      <li>
                        <b>Interdit aux mères nourricières</b>
                        <span>:</span>
                        <a href="#">Organic</a>
                      </li>
                      <li>
                        <b>Pour qui</b>
                        <span>:</span>
                        <a href="#">Organic</a>
                      </li>
                    </ul>}
                    
                  </div>
                </div>
              </div>
              <Tab.Container defaultActiveKey={"details"}>
                <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
                  <li>
                    <Nav.Link
                      eventKey={"details"}
                      href="#details"
                      data-toggle="tab"
                    >
                      Description
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link eventKey={"review"} href="#review" data-toggle="tab">
                        Commentaires
                    </Nav.Link>
                  </li>
                </Nav>
                <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
                  <Tab.Pane className="tab-pane" eventKey="details">
                    <p>
                     {product.description}
                    </p>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane" eventKey="review">
                    <ul className="comment-list">
                      <li>
                        <div className="comment-body">
                          <div className="author-thumb">
                            <img
                              src="/images/products/review-author1.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="name-date">
                              <h6>John F. Medina</h6>
                              <span className="comment-date">25 Feb 2022</span>
                              <div className="ratting">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p>
                              Quis autem vel eum iure reprehenderit quin voluptate
                              velit esseeso quam nihile molestiae consequatur
                              veillum quolore
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </div>
                        </div>
                        <ul className="children">
                          <li>
                            <div className="comment-body">
                              <div className="author-thumb">
                                <img
                                  src="/images/products/review-author2.jpg"
                                  alt="Author"
                                />
                              </div>
                              <div className="comment-content">
                                <div className="name-date">
                                  <h6>Somalia D. Silva</h6>
                                  <span className="comment-date">25 Feb 2022</span>
                                  <div className="ratting">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </div>
                                </div>
                                <p>
                                  Quis autem vel eum iure reprehenderit quin
                                  voluptate velit esseeso quam nihile molestiae
                                  consequatur veillum quolore
                                </p>
                                <a href="#" className="reply-link">
                                  Reply{" "}
                                  <i className="fas fa-long-arrow-alt-right" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment-body">
                          <div className="author-thumb">
                            <img
                              src="/images/products/review-author3.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="name-date">
                              <h6>Roger A. Torrence</h6>
                              <span className="comment-date">25 Feb 2022</span>
                              <div className="ratting">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p>
                              Quis autem vel eum iure reprehenderit quin voluptate
                              velit esseeso quam nihile molestiae consequatur
                              veillum quolore
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </section>
          {/* Product Details End */}
          {/* Revidew Form Area Start */}
          <div className="review-form-area pt-65">
            <div className="container">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="review-form"
                className="review-form wow fadeInUp delay-0-2s"
                name="comment-form"
                action="#"
                method="post"
              >
                <div className="section-title mb-15">
                  <h3>Laissez un commentaire</h3>
                </div>
                <div className="ratting mb-40">
                  <span>Votre note</span>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Entrez votre nom"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder="Entrez votre numéro de telephone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Entrez votre address email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Entrez votre message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Envoyer
                        <i className="fas fa-angle-double-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Revidew Form Area End */}
          {/* Related Products Start */}
          <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
            <div className="container">
              <div className="section-title text-center mb-60">
                <h3>Produits similaire</h3>
              </div>
              <Slider {...productActiveTwo} className="product-active-two">
                {related.map((item)=><div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="/images/products/product8.png" alt="Product" />
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
                      <Link href={"/product/view/" + item.id}>{item.name}</Link>
                    </h5>
                    <span className="price">
                      <span>{item.price}</span>
                    </span>
                  </div>
                </div>)}
                {/*
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="/images/products/product8.png" alt="Product" />
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
                      <Link href="/product-details">Oragic Orange</Link>
                    </h5>
                    <span className="price">
                      <span>85</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-4s">
                  <span className="offer">20 Off</span>
                  <div className="image">
                    <img src="/images/products/product10.png" alt="Product" />
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
                      <Link href="/product-details">Organic Brocolli</Link>
                    </h5>
                    <span className="price">
                      <del>25</del>
                      <span>18</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img src="/images/products/product11.png" alt="Product" />
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
                      <Link href="/product-details">Fresh Carrots</Link>
                    </h5>
                    <span className="price">
                      <del>55</del>
                      <span>36</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-8s">
                  <span className="offer bg-red">sale</span>
                  <div className="image">
                    <img src="/images/products/product1.png" alt="Product" />
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
                      <Link href="/product-details">Organic Brocolli</Link>
                    </h5>
                    <span className="price">
                      <span>205</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="/images/products/product9.png" alt="Product" />
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
                      <Link href="/product-details">Fresh Carrots</Link>
                    </h5>
                    <span className="price">
                      <del>55</del>
                      <span>36</span>
                    </span>
                  </div>
                </div>
                */}
              </Slider>
            </div>
          </section>
        </Layout>
      );
    
}