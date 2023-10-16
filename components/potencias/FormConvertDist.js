import React, { useState } from 'react';
import { convertPower20dBmRef } from './funciones_conversion';

const FormConvertDist = ({ legendText, inputUnit, outputUnit, conversionFunction }) => {
    const [convert, setConvert] = useState({
        valorEntrada1: 0,
        valorEntrada2: 300,
        valorEntrada3: 3
    });

    const handleInputChange = (event) => {
        let inputValue = event.target.value;
        let inputName = event.target.name;

        if (inputValue === "") {
            inputValue = 0;
        }

        setConvert({
            ...convert,
            [inputName]: parseFloat(inputValue)
        });
    };

    return (
        <>
            <div>
                <fieldset>
                    <legend>{legendText}</legend>
                    <span>
                        <label>{inputUnit} </label>
                        <input
                            type="number"
                            name="valorEntrada1"
                            step="0.0000000001"
                            value={convert.valorEntrada1}
                            onChange={handleInputChange}
                        />
                        <label>{outputUnit} </label>
                        <input
                            type="number"
                            name="number4"
                            step="0.0000000001"
                            value={conversionFunction(
                                Number(convert.valorEntrada1),
                                Number(convert.valorEntrada2),
                                Number(convert.valorEntrada3)
                            )}
                            readOnly
                        />

                    </span>
                    <span>
                        <div>
                            <label>Distancia Inicial [m]</label>
                            <input
                                type="number"
                                name="valorEntrada2"
                                step="0.0000000001"
                                value={convert.valorEntrada2}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        <div>
                            <label>Distancia Final [m]</label>
                            <input
                                type="number"
                                name="valorEntrada3"
                                step="0.0000000001"
                                value={convert.valorEntrada3}
                                onChange={handleInputChange}
                            />
                        </div>

                    </span>
                </fieldset>
            </div>
        </>
    );
};

export default FormConvertDist;
