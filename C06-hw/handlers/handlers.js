const {
    milesToKm,
    celsiusToFahrenheit,
    poundsToKg,
    feetToMetres,
} = require('./converter');

function handleMilesToKm(req, res) {
    const convertedMiles = milesToKm(req.body.miles);
  res.send(`${req.body.miles} miles are equal to ${convertedMiles} km.`);
};

function handleCelsiusToFahrenheit(req, res) {
    const convertedCelsius = celsiusToFahrenheit(req.body.celsius);
    res.send(`${req.body.celsius} degrees Celsius are equal to ${convertedCelsius} degrees Fahrenheit`);
};

function handlePoundsToKg(req, res) {
    const convertedPounds = poundsToKg(req.body.pounds);
    res.send(`${req.body.pounds} lb is an equal value to ${convertedPounds} kg`);
};

function handleFeetToMetres(req, res) {
    const convertedFeet = feetToMetres(req.body.feet);
    res.send(`${req.body.feet} feet is an equal measurement to ${convertedFeet} metres`);
};

module.exports = {
    handleMilesToKm,
    handleCelsiusToFahrenheit,
    handlePoundsToKg,
    handleFeetToMetres,
}