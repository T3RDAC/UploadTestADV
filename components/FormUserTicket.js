import Link from "next/link" 
import Image from "next/image"
import styles from "../styles/FormUserInfo.module.css"
import { Space_Mono } from "next/font/google"

import React, { useState } from 'react';

const FormUserTicket = () =>{

    const [userTicket, setUserTicket] = useState({
        userTicketCode: '',
        userTicketDate: '',
        userTicketAnswerYN: '',
        userTicketOneOrMore:'',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserTicket({ ...userTicket, [name]: value });
      };
    
      return (
        <div>
            <fieldset>
            <legend>Comprobacion Operador</legend>
                <div>
                    <label>Codigo de seguimiento de Reclamacion: </label>
                    <input
                    type="text"
                    name="userTicketCode"
                    value={userTicket.userTicketCode}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Fecha de Codigo: </label>
                    <input
                    type="text"
                    name="userTicketDate"
                    value={userTicket.userTicketDate}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Ha recibido Respuesta: </label>
                    <input
                    type="text"
                    name="userTicketAnswersYN"
                    value={userTicket.userTicketAnswerYN}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Reclamacion Cuantas Veces: </label>
                    <input
                    type="text"
                    name="userTicketOneOrMore"
                    value={userTicket.userTicketOneOrMore}
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
        </div>
      );
    };

export default FormUserTicket