import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Context/AutContext";

const DataUser= () =>{
    const {register, formState:{errors}} = useForm();
    const {updateFormData} = useAuth();
    return(
        <div>  
            <div className="Form-inputs Form-inputs-register">
                <input  autocomplete="off" type="text" {...register('user', {required:true, minLength: 5, maxLength:15})}
                onChange={ e => {  updateFormData({user: e.target.value})}}
                
                />
                {errors.user?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                {errors.user?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                {errors.user?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                <label>Usuario</label>
            </div>
                      
            <div className="Form-inputs Form-inputs-register">
                
                <input  autocomplete="off"     type="password" {...register('password', {required:true, minLength: 5, maxLength:15})}
                onChange={ e => {  updateFormData({password: e.target.value})}} />
                {errors.password?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                {errors.password?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                {errors.password?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                <label>Contraseña</label>
                
            </div>
                      
            <div className="Form-inputs Form-inputs-register">
                <input  autocomplete="off" type="email" {...register('email', {required:true, minLength: 5, maxLength:70})}
                onChange={ e => {  updateFormData({email: e.target.value})}}/>
                {errors.email?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                {errors.email?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                {errors.email?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 70 caracteres</small>}
                <label>Correo electronico</label>
            </div>
        </div>
    )
}

export default DataUser