const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

//Define path for express config
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup static directory to serve
app.use(express.static(path.join(__dirname, "../public")));

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Son Le"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Son Le"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        message: "Ask a question",
        name: "Son Le"
    });
});

app.get("/weather", (req, res) => {
    const { address } = req.query;
    if (!address) {
        return res.send({
            error: "You must provide an address"
        });
    }
    geocode(address, (err, data) => {
        if (err) {
            return res.send({ err });
        }
        const { long, lat, location } = data;
        forecast(long, lat, (err, forecast) => {
            if (err) {
                return res.send({ err });
            }
            const { temperature, precipProbability, dewPoint } = forecast;
            res.send({
                location,
                forecast: `The current temperature is ${temperature} Celsius degrees. The rain chance is ${precipProbability}%. The dew point is ${dewPoint}`,
                address
            });
        });
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        message: "Help article not found!",
        name: "Son Le"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        message: "Page not found!",
        name: "Son Le"
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
