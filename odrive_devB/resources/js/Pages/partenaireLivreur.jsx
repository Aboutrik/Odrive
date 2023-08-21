import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { Link } from "@inertiajs/react";

export default function partenaireLivreur(){

  return (
    <Layout>
      <div className="checkout-form-area py-130 rpy-100">
        <div className="container">
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
                <select name="country" id="country">
                <option value="value1">Quel moyen de transport</option>
                <option value="value2">Velo</option>
                <option value="value2">Moto</option>
                <option value="value2">Voiture</option>
                </select>
              </div>
            </div>

                <button type="button" className="theme-btn mt-15">
                    s'inscrire
                </button>

          </form>        
        </div>
      </div>
    </Layout>
  );
}

