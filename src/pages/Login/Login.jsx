import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Login.css"
import { SessionContext } from "../../context";


const LoginForm = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm()//registro
    const [serverMessage, setServerMessage] = useState("")//mostrar un mensaje al usuario
    const { updateSession } = useContext(SessionContext); // Use useContext instead of useState
    
    const navigate = useNavigate();
    const customSubmit =(data) =>{
        const {user,password} = data;

        
        fetch('http://localhost:8000/api/login',{
            method:'POST',
            body: JSON.stringify({user,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data =>{
            // aqui manejo la logica respuesta del servidor
            // console.log(data);
            setServerMessage(data.messages)
            if (data.status === 1) {
                // Inicio sesion Exitoso
                const userSession = {
                    id:data.data.user.id,
                    name:data.data.user.name,
                    lastname:data.data.user.lastname,
                    users:data.data.user.user,
                    email:data.data.user.email,
                    image:data.data.user.image,
                    address:data.data.user.address,
                    rol:data.data.user.rol.nombre
                };
                console.log(userSession);
                updateSession(userSession);
                setServerMessage(data.messages);
               navigate("/Perfil/"+userSession.id)
            //    navigate("/Perfil", { state: { id: userSession.id } });

                
           }else{
               setServerMessage(data.messages)
            }

          

        })
        .catch(e=>console.error(e));

       
    }
   
    return <Box sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        flexWrap:"wrap",
        position:"absolute",
        background:"#eea837",
        alignItems:"center",
                  
    }}
    component="section"
    
    >   
        <div className="img-container"></div>
        <div className="Form-Container">
            <form 
                onSubmit={handleSubmit(customSubmit)}
            >
                <h2>Iniciar Sesion</h2>
                <div className="Form-inputs">
                    
                    
                    <input  autocomplete="off" type="text" {...register('user', {required:true, minLength: 5, maxLength:15})}/>
                    {errors.name?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                    {errors.name?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                    {errors.name?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                    <label>Usuario</label>
                </div>
            
                <div className="Form-inputs">
                   
                    
                    <input  autocomplete="off" type="password"{...register('password', {required:true, minLength: 5, maxLength:15})} />
                    {errors.password?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                    {/* {errors.password?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                    {errors.password?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>} */}
                    <label>contraseña</label>
                </div>
                
                <div className="register">
                    <p>Aun no tienes cuenta? <Link className="link" to="/register">Registrate Ahora</Link> </p>
                </div>
                <Button className="submit" type="submit" variant="outlined" sx={{
                      marginTop: "2.5rem",
                      backgroundColor:"white",
                      color: "black",
                      borderColor:"white",  
                      transition:"all .5s",
                      "&:hover":{
                        backgroundColor:"transparent",
                        borderColor:" white",  
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                      }   
                    }}>
                    Iniciar Sesion
                </Button>
            </form>

            <small className="error-messaje">{serverMessage}</small>
        </div>
        
       

    </Box>
}

export default LoginForm