import Isotope from "isotope-layout";
import { router,usePage ,Link} from '@inertiajs/react'
import { useEffect, useRef, useState } from "react";


const InfoCompte = ({user}) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("compte");
  const [visibleDefault, setVisibleDefault] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
         //return () => isotope.current.destroy();
  }, []);

  const handleClickLogout = () => {
    router.post('/logout')

  }

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    setValues((values) => ({
      ...values,
      [key]: value
    }))
  }

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setVisibleDefault(true);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <section className="portfolio-fluid-area rel z-1 py-130 rpy-100">
      <div className="container-fluid">
        <div className="row align-items-end pb-40">
          <div className="col-lg-5 wow fadeInUp delay-0-2s">
            <div className="section-title mb-20">
              <span className="sub-title mb-20">Informations</span>
              <h2>Détails du compte</h2>
            </div>
          </div>
          <div className="col-lg-7 text-lg-right wow fadeInUp delay-0-4s">
            <ul className="portfolio-filter mb-20">
              <li
                data-filter=".compte"
                className={`c-pointer ${activeBtn("compte")}`}
                onClick={handleFilterKeyChange("compte")}
              >
                {/* <i class="fa fa-user"></i> */}
                Details du compte
              </li>
              <li
                data-filter=".commandes"
                className={`c-pointer ${activeBtn("commandes")}`}
                onClick={handleFilterKeyChange("commandes")}
              >
                {/* <i class="fa fa-cart-arrow-down"></i> */}
                Commandes
              </li>
              <li
                data-filter=".adresse"
                className={`c-pointer ${activeBtn("adresse")}`}
                onClick={handleFilterKeyChange("adresse")}
              >
                {/* <i class="fa fa-map-marker"></i>  */}
                Adresse
              </li>
              <li
                data-filter=".deconnexion"
                className={`c-pointer ${activeBtn("deconnexion")}`}
                onClick={handleClickLogout}
              >
                <i class="fa fa-sign-out"></i> 
                Deconnexion
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row portfolio-active">
          <div className="col-xl-12 col-lg-12 col-sm-12 item compte">
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <div class="account-details-form">
                <div class="row">
                    <div class="col-12 mb-30">
                        <input id="name" placeholder="Nom du user" type="text" value={user != null ? user.email : values.email} onChange={handleChange}/> 
                    </div>
                    <div class="col-12 mb-30">
                        <input id="email" placeholder="email du user" type="email" value={user != null ? user.name : values.email}/> 
                    </div>
                    <div class="col-12 mb-30">
                        <input id="phone" placeholder="téléphone du user" type="text" value={user != null ? user.phone : values.email}/> 
                    </div>
                    <div class="col-12">
                        <button onClick="saveAccountData();" className="theme-btn">Enregister les modifications</button>
                    </div>
                    <div class="col-12"><hr/></div>
                    <div class="col-12 mb-30"><h4>Changement de mot de passe</h4></div>
                    <div class="col-12 mb-30">
                        <input id="current-pwd" placeholder="Mot de passe actuel" type="password"/> 
                    </div>
                    <div class="col-lg-6 col-12 mb-30">
                        <input id="new-pwd" placeholder="Nouveau mot de passe" type="password"/> 
                    </div>
                    <div class="col-lg-6 col-12 mb-30">
                        <input id="confirm-pwd" placeholder="Confirmer le mot de passe" type="password"/>
                    </div>
                    <div class="col-12">
                        <button onClick="savePassword();" className="theme-btn">Enregister le mot de passe</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-xl-12 col-lg-12 col-sm-12 item commandes ${visibleDefault ? "": "d-none"} `}>
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <div class="myaccount-table table-responsive text-center">
                <table class="table table-bordered">
                    <thead class="thead-light">
                      <tr>
                          <th>Id</th> 
                          <th>Produit</th> 
                          <th>Date</th> 
                          <th>Statut</th> 
                          <th>Total</th> 
                          <th>Action</th> 
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12123</td>
                            <td>foutou sauce</td>
                            <td>
                                <div style={{color: "#029600"}}>
                                    2022-08-21
                                </div>
                                <br/>
                                2022-08-21
                            </td>
                            <td>disponible</td>
                            <td>25 000 fr</td>
                            <td><a href="{{route('/orderinfo')}}?id={{$order->id}}" class="btn">Info</a></td>  {/*View*/}
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={`col-xl-12 col-lg-12 col-sm-12 item adresse ${visibleDefault ? "": "d-none"}`}>
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <div class="myaccount-table table-responsive text-center">
                  <table class="table table-bordered">
                      <thead class="thead-light">
                      <tr>
                          <th>Adresse</th> 
                          <th>Latitude</th> 
                          <th>Longitude</th>
                          <th>Type</th> 
                          <th>Default</th> 
                          <th>Action</th> 
                      </tr>
                      </thead>
                      <tbody id="addressTable">
                      </tbody>
                  </table>
              </div>

              <div class="account-details-form">
                  <div class="row">
                      <div class="col-lg-9 col-12">
                          <input id="pac-input" placeholder="Entrer votre adresse" type="text" />
                      </div>
                      <div class="col-lg-3 col-12 mb-20">
                          <button id="buttonAdd" onclick={"addAddress()"} class="btn btn-primary save-change-btn mt-0" disabled>Ajouter</button> 
                      </div>
                      <div class="col-lg-12 col-12 ml-20">
                          <p id="latlng"></p>
                      </div>
                  </div>
              </div>
              {/* <div class="col-lg-12 col-12 ml-20 d-inline">
                  <div class="row">
                      <div class="col-lg-3 col-12 d-inline">
                          @include('elements.check', array('id' => "defaultAddress", 'text' => $lang->get(106), 'initvalue' => "true", 'callback' => "null")) {{--Default--}}
                      </div>
                      <div class="col-lg-9 col-12 d-inline">
                          @include('elements.check', array('id' => "HomeAddress", 'text' => $lang->get(110), 'initvalue' => "true", 'callback' => "onRadio")) {{--Home--}}
                          @include('elements.check', array('id' => "WorkAddress", 'text' => $lang->get(111), 'initvalue' => "false", 'callback' => "onRadio")) {{--Work--}}
                          @include('elements.check', array('id' => "OtherAddress", 'text' => $lang->get(112), 'initvalue' => "false", 'callback' => "onRadio")) {{--Other--}}
                      </div>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="portfolio-more-btn text-center pt-15">
        <Link href="/portfolio-grid" className="theme-btn style-three mt-15">
          
            View More <i className="fas fa-angle-double-right" />
          
        </Link>
      </div> */}
    </section>
  );
};
export default InfoCompte;
