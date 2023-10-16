import Link from "next/link" 
import Image from "next/image"
import styles from "../styles/FormUserInfo.module.css"
import { Space_Mono } from "next/font/google"

import React, { useState } from 'react';

const FormUserServiceEquipment= () =>{

    const [userServiceEquipment, setUserServiceEquipment] = useState({
        userServiceEquipmentNumber: '',
        userServiceEquipmentIMEI: '',

      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserServiceEquipment({ ...userServiceEquipment, [name]: value });
      };
    
      return (
        <div>
            <fieldset>
            <legend>Comprobacion Operador</legend>
                <div>
                    <label>Numero telefonico o del servicio telefonico: </label>
                    <input
                    type="text"
                    name="userServiceEquimentNumber"
                    value={userServiceEquipment.userServiceEquipmentNumber}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>IMEI: </label>
                    <input
                    type="text"
                    name="userServiceEquimentIMEI"
                    value={userServiceEquipment.userServiceEquipmentNumber}
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
        </div>
      );
    };

export default FormUserServiceEquipment