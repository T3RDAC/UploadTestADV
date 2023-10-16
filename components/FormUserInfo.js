import Link from "next/link" 
import Image from "next/image"
import styles from "../styles/FormUserInfo.module.css"
import { Space_Mono } from "next/font/google"

import React, { useState } from 'react';

const FormUserInfo = () =>{

    const [userInfo, setUserInfo] = useState({
        userName: '',
        userLastName: '',
        userSecondLastName: '',
        userCountry:'',
        userID: '',
        userEmail: '',        
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
      };
    
    
    

      return (
        <div>
            <fieldset>
            <legend>Datos personales del usuario del servicio</legend>
                <div>
                    <label>Nombre: </label>
                    <input
                    type="text"
                    name="userName"
                    value={userInfo.userName}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Primer apellido: </label>
                    <input
                    type="text"
                    name="userLastName"
                    value={userInfo.userLastName}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Segundo apellido: </label>
                    <input
                    type="text"
                    name="userSecondLastName"
                    value={userInfo.userSecondLastName}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                    type="email"
                    name="userEmail"
                    value={userInfo.userEmail}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>User ID: </label>
                    <input
                    type="text"
                    name="userID"
                    value={userInfo.userID}
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
        </div>
      );
    };

export default FormUserInfo