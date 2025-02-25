function milesToKm(miles) {
    return miles * 1.6
};

function celsiusToFahrenheit(celsius) {
    return (celsius* 9/5)+32
};

function poundsToKg(pounds) {
    return pounds * 0.454
};

function feetToMetres(feet) {
    return feet * 0.305
};

module.exports = {
    milesToKm,
    celsiusToFahrenheit,
    poundsToKg,
    feetToMetres,
}