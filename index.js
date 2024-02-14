const express = require('express');
const sensor = require('node-dht-sensor');

//npm install express spi-device mcp3008
// const spi = require('spi-device');
// const Mcp3008 = require('mcp3008.js');

const app = express();
const port = 3000;
// Create an instance of MCP3008
// const mcp3008 = new Mcp3008();


// Route to fetch sensor data for DHT11 for humidity and temperature
app.get('/sensor', (req, res) => {
    // Read data from DHT11 sensor connected to GPIO pin 4
    sensor.read(11, 4, (err, temperature, humidity) => {
        if (err) {
            console.error('Failed to read sensor data:', err);
            return res.status(500).json({ error: 'Failed to read sensor data' });
        }

        // Return sensor data as JSON
        res.json({ temperature, humidity });
    });
});

// Route to fetch sensor data
// app.get('/sensor', (req, res) => {
// Read analog data from channel 0 (adjust according to your setup)
//     const sensorValue = mcp3008.readRawValue(0);

// Convert sensor value to ammonia concentration (adjust based on your sensor calibration)
//     const ammoniaConcentration = convertToAmmoniaConcentration(sensorValue);

// Return sensor data as JSON
//     res.json({ ammoniaConcentration });
// });

// Function to convert raw sensor value to ammonia concentration (adjust as per sensor calibration)

// function convertToAmmoniaConcentration(rawValue) {
// Perform calibration and conversion here
// This is a simplified example, actual conversion will depend on sensor specifications
//     return rawValue * 0.01; // Adjust this based on your calibration
// }

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
