import { Link } from '@inertiajs/react';
import { Fragment } from "react";
import Slider from "react-slick";
import { clientLogo } from "../sliderProps";
const ClientLogoSlider = () => {
  return (
    <Fragment>
      <Slider {...clientLogo} className="client-logo-wrap">
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo1.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo2.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo3.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo4.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo5.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo6.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo1.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo2.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo3.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo4.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo5.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            
              <img
                src="/images/client-logo/client-logo6.png"
                alt="Client Logo"
              />
            
          </Link>
        </div>
      </Slider>
    </Fragment>
  );
};
export default ClientLogoSlider;
