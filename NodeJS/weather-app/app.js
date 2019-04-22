const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const place = process.argv[2];
if (!place) {
    console.log("Please provide an address");
} else {
    geocode(place, (err, data) => {
        if (err) {
            return console.log(err);
        }
        const { long, lat, location } = data;
        forecast(long, lat, (err, forecast) => {
            if (err) {
                return console.log(err);
            }
            const { temperature, precipProbability } = forecast;
            console.log(
                `The current temperature in ${location} is ${temperature} Celsius degrees. The rain chance is ${precipProbability}%`
            );
        });
    });
}
