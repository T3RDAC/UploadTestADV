

import React, { useState } from 'react';

const FormConvert = ({ legendText, inputUnit, outputUnit, conversionFunction }) => {
    const [inputValue, setInputValue] = useState('0'); // Representa el valor en la interfaz
    const [convertedValue, setConvertedValue] = useState(0); // Representa el valor numérico

    const isValidNumber = (value) => {
        // Permite solo números positivos, punto o coma
        const regex = /^[0-9]*(\.|,)?[0-9]*$/;
        return regex.test(value);
    };

    const setValorEntrada = (event) => {
        const value = event.target.value;

        // Si el valor es válido o es una cadena vacía
        if (isValidNumber(value) || value === "") {
            setInputValue(value); // Guarda el valor ingresado

            // Convertimos el valor a un número
            const numericValue = parseFloat(value.replace(',', '.'));

            if (isNaN(numericValue)) {
                setConvertedValue(NaN);
            } else {
                setConvertedValue(numericValue);
            }
        }
    };

    return (
        <>
            <div>
                <fieldset>
                    <legend>{legendText}</legend>
                    <span>
                        <label>{inputUnit} </label>
                        <input
                            type="text"
                            name="number1"
                            value={inputValue}
                            onChange={setValorEntrada}
                        />
                    </span>
                    <span>
                        <label>{outputUnit} </label>
                        <input
                            type="text"
                            name="number2"
                            value={
                                isNaN(convertedValue)
                                    ? "NaN"
                                    : conversionFunction(convertedValue)
                            }
                            readOnly
                        />
                    </span>
                </fieldset>
            </div>
        </>
    );
};

export default FormConvert;