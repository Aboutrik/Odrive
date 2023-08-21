import { Link } from '@inertiajs/react';
import { Fragment, useState } from "react";
import munfirmSlider from "../munfirmSlider";

  
export function HomeSlider1(){ 
  const { active, setActive } = munfirmSlider();
  const [resultats , setResultats]  = useState([]);
  const [data , setData]  = useState(["Chili Cheese Chicken Menu","Menu Tendergrill","Apple","Samsung", "Nido"]);
  const [searchValue, setSearchValue] = useState('')

  const search=(value)=>{
    console.log(value);
    let res = data.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    console.log(res.length)
    if(value.length > 0){
      setResultats(res);
    }else {
      setResultats([]);
    }
   
  }
  return (
    <Fragment>
      <div
         //className={`slider-single-item slide-one slick-active`}
         style={{
          zIndex: "1",
          minHeight: "700px",
          alignItems: "center",
          position: "relative",
          backgroundSize: "cover",
          backgroundColor: "RGB(136,210,197)",
          //backgroundColor: "#008080",
          //backgroundImage: url('/images/slider/odriveslide.jpg'),
          paddingTop: "60px",
          //paddingBottom: "10px",
         }}
      >
        <div className="container">
          <div className="row align-items-center mt-90">
            <div className="col-lg-6 ">
              <div className="slider-content">
                {/* <div className="sub-title mb-20">Bienvenue sur O'DRIVE</div> */}
                <h1 style={{fontSize:"50px"}}>Bésoin de quelque chose ?</h1>
                <div className='position-relative'>
                  <input type="search" placeholder='Entrer son nom' onChange={(e)=>search(e.currentTarget.value)}/>
                 <div id="results" className="list-group position-absolute bg-white mt-1 w-100">
                      {resultats.map(e=><div style={{cursor : "pointer"}} className='p-2'>{e}</div>)}
                  </div>
                 
                </div>
                {/*
                  <h1>Besoin de nouritures , d'un produit ou d'un medicament ? </h1>
                  <h6>25 Years of experience in agriculture farming</h6>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid" className="theme-btn style-two">
                    
                      Shop Now <i className="fas fa-angle-double-right" />
                    
                  </Link>
                  <Link href="/about"  className="theme-btn style-two">
                    
                      Learn More <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>*/}
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="slider-images ">
                <img 
                   style={{height: "20.2em"}}
                  //style={{height: "30.2em", width: "300.2em"}}
                  className='image'
                   src="/images/slider/slider.png" 
                   //src="/images/slider/odriveslide.jpg"
                  alt="Slider" 
                  />
                {/* <img
                  className="image"
                  src="/images/slider/slider-image1.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="/images/shapes/organic.png"
                  alt="Organic"
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="slide-shapes">
          <img
            className="pumpkin-shape"
            src="/images/slider/pumpkin.png"
            alt="Pumpkin"
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
            className="leaf-one"
            src="/images/slider/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="/images/slider/leaf-2.png"
            alt="Leaf"
          />
        </div> */}
      </div>
    </Fragment>
  );
};
export const HomeSlider2 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-two ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to Munfirm</div>
                <h1>Organic Foods &amp; Vegetables</h1>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid"  className="theme-btn style-two">
                    
                      Shop Now <i className="fas fa-angle-double-right" />
                    
                  </Link>
                  <Link href="/about" className="theme-btn style-two">
                    
                      Learn More <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="/images/slider/slider-two1.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to Munfirm</div>
                <h1>Organic Foods &amp; Vegetables</h1>
                <div className="slider-btns mt-30">
                  <Link href="/about" className="theme-btn style-two">
                    
                      Learn More <i className="fas fa-angle-double-right" />
                    
                  </Link>
                  <Link href="/shop-grid" className="theme-btn style-two">
                    
                      Shop Now <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="/images/slider/slider-two3.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider3 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-three slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to Munfirm</div>
                <h1>Organic Food &amp; Vegetables</h1>
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized
                </p>
                <div className="slider-btns mt-20">
                  <Link href="/shop-grid" className="theme-btn style-two">
                    
                      Shop Now <i className="fas fa-angle-double-right" />
                    
                  </Link>
                  <Link href="/about" className="theme-btn style-three">
                    
                      Learn More <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="slider-images">
                <img
                  className="image"
                  src="/images/slider/slider-three-1.png"
                  alt="Slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-three slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-images">
                <img
                  className="image"
                  src="/images/slider/slider-three-1.png"
                  alt="Slider"
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to Munfirm</div>
                <h1>Organic Food &amp; Vegetables</h1>
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized
                </p>
                <div className="slider-btns mt-20">
                  <Link href="/shop-grid" className="theme-btn style-two">
                    
                      Shop Now <i className="fas fa-angle-double-right" />
                    
                  </Link>
                  <Link href="/about" className="theme-btn style-three">
                    
                      Learn More <i className="fas fa-angle-double-right" />
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
