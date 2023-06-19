import React, { useContext } from 'react';
import "./Perfil.css"
import { SessionContext } from '../../context';


const Perfil = ( ) =>{
    const {session} = useContext(SessionContext);
  
    const nombre = session ? session.name:"";
    const apellido = session ? session.lastname:"";
    const usuario = session ? session.users:"";
    const email = session ? session.email:"";
    const direccion = session ? session.address:"";
    const rol = session ? session.rol:"";
    const imagen = session ? session.image:"";

    return  <div className="perfil-container">
        <h3 className="Titulo">ggggggg</h3>
        <h3 className="Titulo"> Nombre:  {nombre}</h3>
        <h3 className="Titulo">Apellidos: {apellido}</h3>
        <h3 className="Titulo">Usuario: {usuario}</h3>
        <h3 className="Titulo">Email: {email}</h3>
        <h3 className="Titulo">Direccion: {direccion}</h3>
        <h3 className="Titulo">Tipo de Cuenta: {rol}</h3>
        <br /><br />
        <img src={imagen} alt="imagen"  width={280} height={280}  />
  
    </div>

}

export default Perfil



// import { getUserProfile } from '../../services/Users/user-api';
// import { useParams } from 'react-router-dom'; useState, useEffect

  // const { userId } = useParams(); // Obtén el ID del usuario de la URL
    // const [user, setUser] = useState(null);
      
    // useEffect(() => {
    //   const fetchUser = async () => {
    //     try {
    //       const userData = await getUserProfile(userId); // Pasa el ID del usuario a la función getUserProfile()
    //       setUser(userData);
  
    //       console.log(userData); // Muestra los datos en la consola
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
  
    //   fetchUser();
    // }, [userId]);
  
    // if (!user) {
    //   return <div>Cargando perfil de usuario...</div>;
    // }