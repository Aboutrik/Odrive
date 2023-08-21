//import dynamic from "next/dynamic";
import { Link } from '@inertiajs/react';
import Counter from "../components/Counter";
/*const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});*/

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 3:
      return <Footer3 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = () => (
  <footer className="main-footer  text-white" style={{backgroundColor: '#808080ba'}}>
    <div className="container">
      <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Souscrire à notre Newsletter</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Adresse email" required="" />
          <button className="theme-btn">
            souscrire <i className="fas fa-angle-double-right" />
          </button>
        </form>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                
                  <img src="/images/logos/logo.png" alt="Logo" />
                
              </Link>
            </div>
            <p>
            </p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                
                  <i className="fab fa-facebook-f" />
                
              </Link>
              <Link href="/contact">
                
                  <i className="fab fa-twitter" />
                
              </Link>
              <Link href="/contact">
                
                  <i className="fab fa-linkedin-in" />
                
              </Link>
              <Link href="/contact">
                
                  <i className="fab fa-youtube" />
                
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title"></h4>
            <ul>
              <li>
                <Link href="/contact">
                  Apropos de nous
                </Link>
              </li>
              <li>
                <Link href="/contact">Contactez nous</Link>
              </li>
              <li>
                <Link href="/categories/food">
                  O'DRIVE FOOD
                </Link>
              </li>
              <li>
                <Link href="/categories/pharmacie">O'DRIVE PHARMACIE</Link>
              </li>
              <li>
                <Link href="/categories/grande-surface">
                  GRANDE SURFACE
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contactez-nous</h4>
            <p>
              {" "}
            </p>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                Cote d'ivoire , Abidjan ,Cocody 
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="calto:+012(345)67899">+225 0757580022</a>
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="mailto:support@gmail.com">support@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © 2022 O'DRIVE. Tout droit reservé.</p>
        <ul className="footer-menu">
          <li>
            <Link href="/contact">Politique de retour</Link>
          </li>
          <li>
            <Link href="/faqs">
              Conditions d'utilisation
            </Link>
          </li>
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
const Footer3 = () => (
  <footer className="main-footer footer-black text-white">
    <div className="container-fluid">
      <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
        <div className="happy-clients counter-item">
          <i className="flaticon-quote" />
          <b className="count-text" data-speed={3000} data-stop={56384}>
            <Counter end={56384} />
          </b>
          <span>Happy Clients</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-xl-5">
          <div className="row justify-content-between">
            <div className="col-sm-7">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
                  <Link href="/">
                    
                      <img
                        src="/images/logos/logo-two-white.png"
                        alt="Logo"
                      />
                  
                  </Link>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  epsa quae abillo inventore veritatis quasi architecto
                </p>
                <div className="social-style-two pt-10">
                  <Link href="/contact">
                    
                      <i className="fab fa-facebook-f" />
                    
                  </Link>
                  <Link href="/contact">
                    
                      <i className="fab fa-twitter" />
                    
                  </Link>
                  <Link href="/contact">
                    
                      <i className="fab fa-linkedin-in" />
                    
                  </Link>
                  <Link href="/contact">
                    
                      <i className="fab fa-youtube" />
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-grid">
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/farmers">
                      Meet Farmers
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      Vegetables
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget news-widget">
                <h4 className="footer-title">Recent News</h4>
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src="/images/news/news-widget1.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Universal Principles User Experience
                        </Link>
                      </h6>
                      <span className="name">By Westfield</span>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="/images/news/news-widget2.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Roll Out New Featuc Without Hurting
                        </Link>
                      </h6>
                      <span className="name">By Mendonca</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget contact-widget">
                <h4 className="footer-title">Contact Us</h4>
                <p>
                  Quis autem vel eum reprehenderit voluptate velit esse quamnue{" "}
                </p>
                <ul>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    53 Main Street, 2nd Mountain 3rd Floor, New York
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="calto:+012(345)67899">+012 (345) 678 99</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget gallery-widget">
                <h4 className="footer-title">Gallery</h4>
                <ul>
                  <li>
                    <a href="/images/widgets/gallery1.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="/images/widgets/gallery1.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="/images/widgets/gallery2.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="/images/widgets/gallery2.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="/images/widgets/gallery3.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="/images/widgets/gallery3.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="/images/widgets/gallery4.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="/images/widgets/gallery4.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="/images/widgets/gallery5.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="/images/widgets/gallery5.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="/images/widgets/gallery6.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="/images/widgets/gallery6.jpg"
                      alt="Gallery"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area-wrap">
      <div className="container-fluid">
        <div className="copyright-area pt-25 pb-10">
          <p>Copyright © 2022 MunFirm. All Rights Reserved.</p>
          <ul className="footer-menu">
            <li>
              <Link href="/contact">
                Setting &amp; Privacy
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                Faqs
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Payments
              </Link>
            </li>
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fas fa-angle-double-up" />
          </button>
        </div>
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
