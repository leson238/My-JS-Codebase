const request = require("request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?limit=1&access_token=pk.eyJ1IjoibGVzb24yMzgiLCJhIjoiY2p1czk2cWU0MWt6OTQzcGlvNHduNnRmZSJ9.JcnfbTOm_3tL_jlqBYx0Qg`;
    request(
        {
            url,
            json: true
        },
        (err, { body }) => {
            if (err) {
                callback("Unable to connect to location service.");
            } else if (body.features.length === 0) {
                callback("Unable to find locations.");
            } else {
                callback(undefined, {
                    long: body.features[0].center[1],
                    lat: body.features[0].center[0],
                    location: body.features[0].place_name
                });
            }
        }
    );
};

module.exports = geocode;
