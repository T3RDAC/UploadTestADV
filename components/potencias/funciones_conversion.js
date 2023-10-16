// Conversión de Watt a dBm
export const wattToDbm = (watt) => {
    return 10 * Math.log10(watt / 0.001);
};

// Conversión de dBm a Watt
export const dbmToWatt = (dbm) => {
    return 0.001 * Math.pow(10, dbm / 10);
};

// Conversión de microAmperios por metro a dBmicroAmperios por metro
export const microAmpMetroToDbMicroAmp = (microAmp) => {
    return 20 * Math.log10(microAmp);
};

// Conversión de microVoltios por metro a dBmicroVoltios por metro
export const microVoltMetroToDbMicroVolt = (microVolt) => {
    return 20 * Math.log10(microVolt);
};

// Conversión de dBmicroAmperios por metro a dBm
export const dbMicroAmpMetroToDbm = (dbMicroAmp) => {
    return dbMicroAmp - 43.73;
};

// Conversión de dBmicroVoltios por metro a dBm
export const dbMicroVoltMetroToDbm = (dbMicroVolt) => {
    return dbMicroVolt - 95.23;
};

//Conversion de Potencia acorde a la Distancia 300 a 3 metros con referencia a 20 dBm, por experiencia, el recomendado y el que mas usan los solicitantes
export function convertPower20dBmRef(inputdBm, distanceInitial, distanceFinal) {
    const result = parseFloat(inputdBm) + 20 * Math.log10(parseFloat(distanceInitial) / parseFloat(distanceFinal));
    return result;
}

//Conversion de Potencia acorde a la Distancia 300 a 3 metros con referencia a 40 dBm
export function convertPower40dBmRef(inputdBm, distanceInitial, distanceFinal) {
    const result = parseFloat(inputdBm) + 40 * Math.log10(parseFloat(distanceInitial) / parseFloat(distanceFinal));
    return result;
}