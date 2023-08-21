//import { Link } from '@inertiajs/react';
import { Fragment, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export const Basket = () => {
    const [isCartVisible, setCartVisible] = useState(false);
    const [paniers ,setPaniers] = useState([]);
    const [total,setTotal] = useState(0);

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
        setTotal(total);
    } 
    const deletePanier = (id) =>{
        let newPanier = paniers.filter(e=>e.id !== id);
        calculeTotal(newPanier);
        setPaniers(newPanier);
        localStorage.setItem('paniers',JSON.stringify(newPanier));
    }
    const addQuantite = (index) => {
        let quantite = Number.parseInt(paniers[index].quantitePanier);
        quantite += 1;
        paniers[index].quantitePanier = quantite;
        const newPanier = [...paniers];
        calculeTotal(newPanier);
        setPaniers(newPanier);
        localStorage.setItem('paniers',JSON.stringify(newPanier));
    };

    const minQuantite = (index) => {
        let quantite = Number.parseInt(paniers[index].quantitePanier);
        quantite -= 1;
        paniers[index].quantitePanier = quantite;
        const newPanier = [...paniers];
        calculeTotal(newPanier);
        setPaniers(newPanier);
        localStorage.setItem('paniers',JSON.stringify(newPanier));
    };

    const handleMouseCart = () => {
        _init();
        setCartVisible(true);
    };

    const handleMouseLeave = () => {
        setCartVisible(false);
    };


return(
    <Fragment>
        <div className="shopping-cart" onMouseEnter={handleMouseCart}
         onMouseLeave={handleMouseLeave} id="shopping-cart">
            <div className="d-flex align-items-center">
                <div className="d-flex" style={{marginLeft: "20px", marginRight: "20px"}}>
                    <img src="/images/img/cart.png" className="q-basket-icon" style={{width : 35, height : 35}}/>
                    <Link href="/panier" className="ml-2 mt-1">
                        <div className="cart-info d-inline-block">
                             <p>Panier    
                            </p>
                        </div>
                    </Link>
                </div>
               
            </div>

            {isCartVisible && (
                 <div className="cart-floating-box" id="cart-floating-box">
                 {/* <div className={`cart-floating-box" ${isCartVisible ? "visble" : ""}`} id="cart-floating-box"> */}
                    <div className="cart-calculation">
                        <div className="calculation-details">
                            <p className="total">Produits du panier <span id="basket_shopName"></span></p>  {/*Shop Name*/}
                        </div>
                    </div>
                    <div id="basket_products" className="cart-items">
                        {paniers.map((item,index)=>
                        <div className="d-flex p-1 border rounded-lg my-1">
                            <img src="" alt="" srcset=""  className=" rounded-md"/>
                            <div className="w-100">
                                <div className="d-flex  justify-content-between mb-2">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        <i onClick={()=>deletePanier(item.id)} className="fas fa-trash 
                                        text-danger" style={{cursor : "pointer"}}></i>
                                    </div>
                                </div>
                                <div className="d-flex  justify-content-between align-items-center">
                                    <div>
                                    {item.price} F
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="theme-btnPanier" 
                                        style={{height : 15}} onClick={()=>minQuantite(index)}>
                                            -
                                        </button>
                                        <span className="mx-1">{item.quantitePanier}</span>
                                        <button className="theme-btnPanier" 
                                        style={{height : 15}} onClick={()=>addQuantite(index)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                           
                            </div>
                        </div>)}

                    </div>
                    <div id="cart-calculation" className="cart-calculation">
                        <div className="calculation-details">
                            <p className="total">Sous total <span id="basket_subtotal">{total}</span></p>  {/*-Subtotal--
                            <p className="total">Taxe <span id="basket_tax"></span></p>  {/*--Tax--
                            <p className="total">Frais de livraison <span id="basket_fee"></span></p>  {/*--Delivery Fee--
                            <p className="total">Total <span id="basket_total"></span></p> {/*-Total-*/}
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                        <Link href="/panier" className="theme-btn style-two">
                            Voir le panier
                            <i className="fas fa-angle-double-right" />
                        </Link>
                        </div>
                    </div>
                </div>
                ) 
            }
        </div>
    </Fragment>
    )
}

//après le hover sur le panier
// document.getElementById("shopping-cart").mouseenter(function () {
//     const handleMouseCart = () => {
//         alert('test')
// //$("#shopping-cart").mouseenter(function () {
//     // $("#cart-floating-box").stop().slideDown({
//     document.getElementById("cart-floating-box").stop().slideDown({
//         duration: 1000,
//         progress: function(){ // callback
//             // console.log("floating:" + document.getElementById('cart-floating-box').clientHeight);
//             // console.log("products:" + document.getElementById('basket_products').clientHeight);
//         },
//         complete: function(){ // callback
//             var t = document.getElementById('basket_products').clientHeight +  document.getElementById('cart-calculation').clientHeight + 140;
//             document.getElementById('cart-floating-box').style.height=t+'px';
//         },
//     });
//};