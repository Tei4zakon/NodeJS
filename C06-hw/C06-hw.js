const express = require("express");
const http = require("http");

const {
    handleMilesToKm,
    handleCelsiusToFahrenheit,
    handlePoundsToKg,
    handleFeetToMetres, 
} = require("./handlers/handlers");

const app = express();

app.use(express.json());

app.post('/miles', handleMilesToKm);

app.post('/celsius', handleCelsiusToFahrenheit);

app.post('/pounds', handlePoundsToKg);

app.post('/feet', handleFeetToMetres);

app.use((req, res) => {
    res.status(400).send("Enter a valid URL address");
  });

app.listen(6060, () => console.log('Server is listening on port 6060...'));
