const Joke = require("daddyjoke");
const weather = require("weather-js");

Joke.getJoke((joke) => {
  console.log(joke);
});

console.log(weather);

weather.find(
  { search: "Isfahan, IR", degreeType: "C" },
  function (err, result) {
    if (err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
  }
);
