//import dynamic from "next/dynamic";
import { Link } from '@inertiajs/react';
//import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "@/src/components/ClientLogoSlider";
import { HomeSlider1 } from "@/src/components/HomeSlider";
//import CustomerReviews from "@/src/components/slider/CustomerReviews";
//import PhotoGallery from "@/src/components/slider/PhotoGallery";
import Layout from "@/src/layout/Layout";
import { productActive } from "@/src/sliderProps";
import MunfimCountdown from "@/src/components/MunfimCountdown";
/*const MunfimCountdown = dynamic(
  () => import("@/src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);*/
const Index = () => {
  return (
    <Layout header={1}> 
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* About Section End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-area mt-4">
        <div className="container-fluid">
        <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">
              Tous nos services
            </span> */}
            <h2>Ce que vous pouvez faire</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="sub-title"></span>
                  <h4>O'DRIVE FOOD</h4>
                  <p>Trouver les meilleurs nourritures</p>
                  <Link href="/categories/food" className="theme-btn style-two">
                      Commencer <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
                <div className="image">
                  <img
                    // src="/images/offers/offer-banner4.jpg"
                    src="/images/offers/repas.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="sub-title"></span>
                  <h4>O'DRIVE PHARMACIE</h4>
                  <p>Trouvez une pharmacie près de chez vous.</p>
                  <Link href="/categories/pharmacie" className="theme-btn style-two">
                      Commencer <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
                <div className="image">
                  <img
                    // src="/images/offers/offer-banner2.png"
                    src="/images/offers/images2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="sub-title"></span>
                  <h4>GRANDE SURFACE</h4>
                  <p>Des produits de qualité rien que pour vous</p>
                  <Link href="/categories/grande-surface" className="theme-btn style-two">
                      Commencer <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="/images/offers/imageA.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}
      {/* Product Section Start */}
      <section className="product-section pt-80 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">
              Produits recent
            </span> */}
            <h2>Decouvrez nos produit recents</h2>
          </div>
          <Slider {...productActive} className="product-active">
            <div className="product-item wow fadeInUp delay-0-2s">
              <span className="offer">53%</span>
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
                  <Link href="/product-details">Choux</Link>
                </h5>
                <span className="price">
                  <del>100</del>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-3s">
              <div className="image">
                <img src="/images/products/product2.png" alt="Product" />
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
                  <Link href="/product-details">Carrotte Frais</Link>
                </h5>
                <span className="price">
                  <span>400</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="/images/products/product3.png" alt="Product" />
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
                  <Link href="/product-details">Haricot vert</Link>
                </h5>
                <span className="price">
                  <del>300</del>
                  <span>230</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <span className="offer">20 %</span>
              <div className="image">
                <img src="/images/products/product4.png" alt="Product" />
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
                  <Link href="/product-details">Œuf</Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-7s">
              <span className="offer">53 Off</span>
              <div className="image">
                <img src="/images/products/product6.png" alt="Product" />
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
                  <Link href="/product-details">Croissants</Link>
                </h5>
                <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span>
              </div>
            </div>

          </Slider>
        </div>
      </section>
      {/* Product Section End */}
      {/* Video Area Start */}
      <div className="video-area">
        <div className="container">
          <div
            className="video-inner wow fadeInUp delay-0-2s"
            style={{ backgroundImage: "url(/images/video/video-bg.jpg)" }}
          >
            <i className="flaticon-leaf-1" />
            <span className="video-text">Pourquoi nous rejoindre ? </span>
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area End */}
      {/* Special Offer Start */}
      <section className="special-offer bg-lighter pt-200">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="mb-20">35% de reduction sur tout nos produit</span>
            <h2>Offre special</h2>
          </div>
          <p>
            
          </p>
          <MunfimCountdown />
          {/*<div className="count-down-btns mt-10">
            <Link href="/shop-grid"  className="theme-btn">
                Shop Now <i className="fas fa-angle-double-right" />
              
            </Link>
            <Link href="/about" className="theme-btn style-two">
                use code <i className="fas fa-angle-double-right" />
              
            </Link>
          </div>*/}
        </div>
        {/* <img
          className="offer-bg"
          src="/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="/images/shapes/litchi.png"
          alt="Litchi"
        /> */}
        {/* <img
          className="special-offer-left"
          src="/images/offers/offer-left.png"
          alt="Offer"
        />
        <img
          className="special-offer-right"
          src="/images/offers/offer-right.png"
          alt="Offer"
        /> */}
      </section>
      {/* Special Offer End */}
      {/* Call To Action Area Start
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Supports</span>
                  <h3>Get Our Quality Foods</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact" className="theme-btn btn-white my-15">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
     
      {/* Gallery Area End */}
      {/* Feedback Section Start
      <section className="feedback-section pt-50 rpt-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="/images/reviews/feedback-right.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Section End */}
      {/* News Section Start */}
      <section className="news-section pt-80 rpt-100 pb-70 rpb-40" id="partenaires">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Devenez notre partenaire</span>
            <h2>Vous voulez faire plus de vente ?</h2>
          </div>
          <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="/images/news/news34.webp" alt="News" />
                
                </div>
                <div className="content">
                <span className="sub-title">Vous êtes un livreur ?</span>
                  <h4>
                    <Link href="/partenaireLivreur">
                     Vous voulez accompagner O'drive dans la livraison
                    </Link>
                  </h4>
                  <Link href="/partenaireLivreur" className="read-more">
                     Réjoignez-nous <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="/images/news/news26.webp" alt="News" />
                
                </div>
                <div className="content">
                  <span className="sub-title">Vous êtes une pharmacie ?</span>
                  <h4>
                    <Link href="/partenaireLivreur">
                      Rendez vos médicaments disponibles partout.
                    </Link>
                  </h4>
                  <Link href="/partenaireLivreur" className="read-more">
                    Réjoignez-nous<i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/images/news/news13.jpg" alt="News" />
                </div>
                <div className="content">
                  <span className="sub-title">Vous etes un restaurant ?</span>
                  <h4>
                    <Link href="/partenaireLivreur">
                      Donnez la possibilité à tous de consommer ce que vous cuisinez.
                    </Link>
                  </h4>
                  <Link href="/partenaireLivreur" className="read-more">
                      Réjoignez-nous <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="news-shapes">
          <img
            className="onion"
            src="/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="/images/shapes/leaf-four.png"
            alt="Leaf"
          />
        </div> */}
      </section>
      {/* News Section End */}
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
export default Index;
