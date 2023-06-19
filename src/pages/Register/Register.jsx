import React from "react";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./register.css"
import { Link } from "react-router-dom";

const RegisterForm = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm()

    const customSubmit =(data) =>{
        // console.log(data)
        
        const requestData ={
            name: data.name,
            lastname: data.lastname,
            user: data.user,
            email: data.email,
            password: data.password,
            imagen: data.image[0]['name'],
            address: data.address,
            id_rol: data.id_rol,
        }

        console.log(requestData);
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

        <div className="Form-Container register-container">
            <h2>Registrarse</h2>
            <form 
                onSubmit={handleSubmit(customSubmit)}
            >
                <div className="register-user">
                    <h3 className="personal-data">Datos personales</h3>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('name', {required:true, minLength: 1, maxLength:25})}/>
                        {errors.name?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.name?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.name?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Nombre</label>
                    </div>
                
                    <div className="Form-inputs Form-inputs-register">
                    
                        
                        <input  autocomplete="off" type="text"{...register('lastname', {required:true, minLength: 5, maxLength:35})} />
                        {errors.lastName?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.lastName?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.lastName?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Apellido</label>
                    </div>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('address', {required:true, minLength: 5, maxLength:50})}/>
                        {errors.address?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.address?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.address?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Dirección</label>
                    </div>
                    <h3 className="data-account">Datos de cuenta 
                  
                    </h3>
                    
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('user', {required:true, minLength: 5, maxLength:15})}/>
                        {errors.user?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.user?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.user?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Usuario</label>
                    </div>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="password" {...register('password', {required:true, minLength: 5, maxLength:15})}/>
                        {errors.password?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.password?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.password?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Contraseña</label>
                    </div>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="email" {...register('email', {required:true, minLength: 5, maxLength:70})}/>
                        {errors.email?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.email?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.email?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 70 caracteres</small>}
                        <label>Correo electronico</label>
                    </div>
                    <div className="Form-inputs">
                    
                        
                    <input  autocomplete="off" type="text"{...register('id_rol', {required:true, minLength: 5, maxLength:15})} />
                    {errors.accuntType?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                    {errors.accuntType?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                    {errors.accuntType?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                    <label>Tipo de cuenta</label>
                </div>
                <div className="Form-inputs">
                    
                        
                    <input  autocomplete="off" type="file"{...register('image', {required:true, minLength: 5, maxLength:15})} />
                    {errors.image?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                    {errors.image?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                    {errors.image?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                    <label>Imagen </label>
                </div>
                </div>
                
                <div className="register login">
                    <p>Aun ya tienes una cuenta? <Link className="link link-login" to="/login">Inicia sesion Ahora</Link> </p>
                </div>
                <Button className="submit" type="submit" variant="outlined" sx={{
                      marginTop: "2.5rem",
                      backgroundColor:"white",
                      color: "black",
                      borderColor:"white",  
                      transition:"all .5s",
                      marginLeft:"40%",
                      marginBottom:"2.5rem",
                      "&:hover":{
                        backgroundColor:"transparent",
                        borderColor:" white",  
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                      }   
                    }}>
                    Registrarse
                </Button>
            </form>
        </div>
        
       

    </Box>
}

export default RegisterForm;