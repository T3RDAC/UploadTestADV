 /* import Link from "next/Link"  */

import {convertPower40dBmRef, convertPower20dBmRef, dbMicroAmpMetroToDbm, dbMicroVoltMetroToDbm, dbmToWatt, microAmpMetroToDbMicroAmp, microVoltMetroToDbMicroVolt, wattToDbm } from "@/components/potencias/funciones_conversion"; // Asegúrate de que la ruta sea correcta
import FormConvert from "@/components/potencias/FormConvert"
import FormConvertDist from "@/components/potencias/FormConvertDist"
import FormConvertNeg from "@/components/potencias/FormConvertNeg";


const Potencias = () => {
    return (

        <span>
            <h1>Calculo y conversion de Potencias - v0.02</h1>
            
            <h2>Lineal  {"<=>"}  Logaritmico</h2>
            <FormConvert
                legendText="Watt a dBm" 
                inputUnit="Valor Watts:"
                outputUnit=" Conversión a dBm:"
                conversionFunction={wattToDbm}
            />
              <FormConvertNeg
                legendText="dBm a Watts" 
                inputUnit="Valor dBm:"
                outputUnit=" Conversión a Watts:"
                conversionFunction={dbmToWatt}
            />
              <FormConvert
                legendText="[uA/m] a dBuA/m" 
                inputUnit="Valor [uA/m]:"
                outputUnit=" Conversión a dBuA/m:"
                conversionFunction={microAmpMetroToDbMicroAmp}
            />
              <FormConvert
                legendText="[uV/m] a dBuV/m" 
                inputUnit="Valor [uV/m]:"
                outputUnit=" Conversión a dBuV/m:"
                conversionFunction={microVoltMetroToDbMicroVolt}
            />
            <h2>dbX/m a dBm</h2>
              <FormConvertNeg
                legendText="[dBuA/m] a dBm" 
                inputUnit="Valor [dBuA/m]:"
                outputUnit=" Conversión a dBm:"
                conversionFunction={dbMicroAmpMetroToDbm}
            />
              <FormConvertNeg
                legendText="[dBuV/m] a dBm" 
                inputUnit="Valor [dBuV/m]:"
                outputUnit=" Conversión a dBm:"
                conversionFunction={dbMicroVoltMetroToDbm}
            />
            <h2>Conversion de Potencias por distancia</h2>
            <FormConvertDist
                legendText="Conversión de potencia - Ref 20 dBm" 
                inputUnit="Valor Distancia Inicial [dBm]:"
                outputUnit="Conversión a [dBm] distancia final"
                conversionFunction={convertPower20dBmRef}
            />
            <FormConvertDist
                legendText="Conversión de potencia - Ref 40 dBm" 
                inputUnit="Valor Distancia Inicial [dBm]:"
                outputUnit="Conversión a [dBm] distancia final"
                conversionFunction={convertPower40dBmRef}
            />
        </span>
    )
  }
  
  
export default Potencias