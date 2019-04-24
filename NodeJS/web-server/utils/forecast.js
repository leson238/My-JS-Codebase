const request = require("request");

const forecast = (long, lat, callback) => {
    const url = `https://api.darksky.net/forecast/be0baacf971de0c42c210da755c6b031/${long},${lat}?units=si`;
    request(
        {
            url,
            json: true
        },
        (err, { body }) => {
            if (err) {
                callback("There are some errors happened.");
            } else if (body.error) {
                callback(body.error);
            } else {
                const {
                    temperature,
                    precipProbability,
                    dewPoint
                } = body.currently;
                callback(undefined, {
                    temperature,
                    precipProbability,
                    dewPoint
                });
            }
        }
    );
};

module.exports = forecast;
