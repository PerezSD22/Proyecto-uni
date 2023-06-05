import React from "react";
import Background from "../../Components/Content/fondos-bg/Background";
import AboutHome from "./FristSection/About-Home";
import ServicesHome from "./SecundSection/Services-home";
import PaymentInfo from "./ThreeSection/Paymen";


import "./Home.css"
const Inicio = () =>{
    return(
        <section className="home-container"> 
            <div className="background">
             <Background/>
            </div>
            <div className="sobre">
                <AboutHome/>
            </div>
            <div className="servicios">
                <ServicesHome/>
            </div>
            <div className="wallet">
                <PaymentInfo/>
            </div>
           
        </section>
       
    )
}

export default Inicio
