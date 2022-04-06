// declaramos una funcion con el mismo nombre "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 123.80;
    // retornamos el valor
    valueInYen = Number(valueInYen.toFixed(2))
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a libras
    let valueInPound = valueInYen * 0.0061;
    // retornamos el valor
    valueInPound = Number(valueInPound.toFixed(3))
    return valueInPound;
}


// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}