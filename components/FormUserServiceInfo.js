import Link from "next/link" 
import Image from "next/image"
import styles from "../styles/FormUserInfo.module.css"
import { Space_Mono } from "next/font/google"

import React, { useState } from 'react';

const FormUserServiceInfo = () =>{

    const [userServiceInfo, setUserServiceInfo] = useState({
        userOperadorName: '',
        userServiceID: '',
        userServiceMobile: false,
        userServiceFix: false,
        userServiceInternet: false,
        userDetailInfo: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserServiceInfo({ ...userServiceInfo, [name]: value });
      };
      const handleServiceChange = (event) => {
        const { name, checked } = event.target;
        setUserServiceInfo({ ...userServiceInfo, [name]: checked });
      };
      return (
        <div>
            <fieldset>
            <legend>Infomacion del Servicio</legend>
            <div>
                <label>Service ID: </label>
                <input
                type="text"
                name="userServiceID"
                value={userServiceInfo.serviceID}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>
                    <input
                    type="checkbox"
                    name="userServiceMobile"
                    checked={userServiceInfo.userServiceMobile}
                    onChange={handleServiceChange}
                    />
                    Mobile
                </label>
            </div>
            </fieldset>
        </div>
      );
    };

export default FormUserServiceInfo