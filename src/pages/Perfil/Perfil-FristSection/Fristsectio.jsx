    import React, { useContext } from "react";
    import "./FristSection.css"
    import { useState, useEffect } from "react";
    import { SessionContext } from "../../../context";

    const FristSection = () =>{

      const { session} = useContext(SessionContext);
      // verifico la sesion   
      const nombre = session ? session.name: "";
      const apellido = session ? session.lastname: "";
      const usuario = session ? session.users: "";
      const email = session ? session.email: "";
      const imagen = session ? session.image: "";
      const direccion = session ? session.address: "";
      const rol = session ? session.rol: "";


        return <div className="frist-section-container">
            <div className="photo-info-container">
                <img src={imagen} alt="user-logo" />
                {/* <input value={} onChange={} /> */}
            </div>
            <div className="email-container">
            <p>{nombre}</p>
            <p>{apellido}</p>
            <p>{usuario}</p>
            <p>{email}</p>
            <p>{direccion}</p>
            <p>{rol}</p>
            </div>
        </div>
    };

    export default FristSection;




    // const {nombre, imagen, apellido} = props props


        // const fullName = `${nombre} ${apellido}`;
      
        // const [nameValue, setNameValue] = useState(fullName);
      
        // const handleNameChange = (event) => {
        //   // setNameValue(event.target.value);
        // };
      
        // useEffect(() => {
        //   const storedName = localStorage.getItem("name");
        //   if (storedName) {
        //     // setNameValue(storedName);
        //   }
        // }, []);
      
        // useEffect(() => {
        //   localStorage.setItem("name", nameValue);
        // }, [nameValue]);
