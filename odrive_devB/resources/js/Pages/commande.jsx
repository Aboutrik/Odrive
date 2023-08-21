import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { Link } from "@inertiajs/react";

export default function Checkout(){
  const [paniers ,setPaniers] = useState([]);
  const [total,setTotal] = useState(0);
  const [subTotal,setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

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
  setSubTotal(total);
} 

  return (
    <Layout>
      <PageBanner pageName={"Commande"} />
      <div className="checkout-form-area py-130 rpy-100">
        <div className="container">
          <Accordion
            className="checkout-faqs wow fadeInUp delay-0-2s"
            id="checkout-faqs"
          >
            <div className="alert bg-lighter">
              <h6>
                
                Vous voulez utiliser votre compte?{" "}
                <Link href="/connexion" className="card-header c-cursor">
                Cliquez ici
                </Link>
              </h6>
            </div>
            <div className="alert bg-lighter">
              <h6>
                Avez-vous un coupon?{" "}
                <Accordion.Toggle
                  as={"a"}
                  className="collapsed card-header c-cursor"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="false"
                  eventKey="collapse3"
                >
                  Cliquez ici pour entrer le code
                </Accordion.Toggle>
              </h6>
              <Accordion.Collapse eventKey="collapse3" className="content">
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <p>Si vous avez un coupon entrer le ici.</p>
                  <div className="form-group">
                    <input
                      type="text"
                      id="coupon-code"
                      name="coupon-code"
                      className="form-control"
                      defaultValue=""
                      placeholder="Coupon Code"
                      required=""
                    />
                  </div>
                  <button type="submit" className="theme-btn style-two">
                    Appliquer le coupon <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </Accordion.Collapse>
            </div>
          </Accordion>
          <h4 className="form-title mt-50 mb-25">Veuillez remplir les champs</h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            id="checkout-form"
            className="checkout-form wow fadeInUp delay-0-2s"
            name="checkout-form"
            action="#"
            method="post"
          >
            <div className="row">
              <div className="col-lg-12">
                <h6>Informations Personnelles</h6>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Entrez votre nom et prénom"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    defaultValue=""
                    placeholder="Entrez votre contact"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Entrez votre email"
                    required=""
                  />
                </div>
              </div>

              <div className="col-md-6 mb-30">
                <div className="form-group">
                  <select name="country" id="country">
                    <option value="value1">Selectionnez le lieu de livraison</option>
                    <option value="value2">Australia</option>
                    <option value="value3">Canada</option>
                    <option value="value4">China</option>
                    <option value="value5">Morocco</option>
                    <option value="value6">Saudi Arabia</option>
                    <option value="value7">United Kingdom (UK)</option>
                    <option value="value8">United States (US)</option>
                  </select>
                </div>
              </div>
           
          
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="apartment-name"
                    name="apartment-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <h6>Ajouter une note</h6>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <textarea
                    name="order-note"
                    id="order-note"
                    className="form-control"
                    rows={5}
                    placeholder="Ajouter une note"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="payment-cart-total pt-25">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="payment-method mt-45 wow fadeInUp delay-0-2s">
                  <h4 className="form-title my-25">Methode de payement</h4>
                  <Accordion
                    defaultActiveKey="collapseOne"
                    as="ul"
                    id="paymentMethod"
                    className="mb-30"
                  >
                    {/* Default unchecked */}
                    <li className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="methodone"
                        name="defaultExampleRadios"
                        defaultChecked
                      />
                      <Accordion.Toggle
                        as="label"
                        className="custom-control-label"
                        htmlFor="methodone"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        eventKey="collapseOne"
                      >
                        VISA{" "}
                        <i className="fas fa-money-check" />
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        eventKey="collapseOne"
                        data-parent="#paymentMethod"
                        style={{}}
                      >
                        <p>
                        Effectuez votre paiement avec votre carte VISA.
                        </p>
                      </Accordion.Collapse>
                    </li>
                    {/* Default unchecked */}
                    <li className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="methodtwo"
                        name="defaultExampleRadios"
                      />
                      <Accordion.Toggle
                        as="label"
                        className="custom-control-label collapsed"
                        htmlFor="methodtwo"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        eventKey="collapseTwo"
                      >
                        Paiement à la Livraison<i className="fas fa-truck" />
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        eventKey="collapseTwo"
                        data-parent="#paymentMethod"
                        style={{}}
                      >
                        <p>Payer à la livraison.</p>
                      </Accordion.Collapse>
                    </li>
                    {/* Default unchecked */}
                    <li className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="methodthree"
                        name="defaultExampleRadios"
                      />
                      <Accordion.Toggle
                        as="label"
                        className="custom-control-label collapsed"
                        htmlFor="methodthree"
                        data-toggle="collapse"
                        data-target="#collapsethree"
                        eventKey="collapsethree"
                      >
                        Paypal <i className="fab fa-cc-paypal" />
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        eventKey="collapsethree"
                        data-parent="#paymentMethod"
                        style={{}}
                      >
                        <p>
                        Payez via PayPal; vous pouvez payer avec votre carte de crédit si vous n'avez pas de compte PayPal..
                        </p>
                      </Accordion.Collapse>
                    </li>
                  </Accordion>
                  <p>
                  Vos données personnelles seront utilisées pour traiter votre commande, soutenir votre expérience sur l'ensemble de ce site web, et à d'autres fins décrites dans notre politique de confidentialité.
                  </p>
                  <button type="button" className="theme-btn mt-15">
                    payer en ligne
                  </button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="shoping-cart-total mt-45 wow fadeInUp delay-0-4s">
                  <h4 className="form-title m-25">Cart Totals</h4>
                  <table>
                    <tbody>
                     {paniers.map((card,index)=><tr key={card.id}>
                          <td>
                            {card.name} <strong>× {card.quantitePanier}</strong>
                          </td>
                          <td>{(card.quantitePanier * card.price).toFixed(2)}FCFA</td>
                        </tr>)}
                   
                        <tr>
                        <td>Sous total</td>
                        <td>{Number(subTotal).toFixed(2)} FCFA</td>
                      </tr>
                      <tr>
                        <td>Frais de livraison</td>
                        <td>{shipping.toFixed(2)}FCFA</td>
                      </tr>
                    
                      <tr>
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td>
                          <strong>{Number(total).toFixed(2)} FCFA</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

