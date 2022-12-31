/**
 * It takes an API URI as an argument, makes a GET request to that URI, and then displays the data in
 * the HTML
 * @param apiURI - the API request URL
 */
const APIrequest = (apiURI) => {
  axios
    .get(apiURI)
    .then((resp) => {
      console.log(resp.data);

      document.querySelector(".degre").innerText =
        resp.data.main.temp.toFixed(0) + "°";

      // VILLE
      document.querySelector(".ville").innerText = resp.data.name;

      // ICONE
      const img = document.querySelector(".icone");
      img.src =
        "http://openweathermap.org/img/wn/" +
        resp.data.weather[0].icon +
        "@2x.png";

      // BACKGROUND IMAGE
      let weatherIcon = resp.data.weather[0].icon;
      let backgroundImage = "";
      if (
        weatherIcon == "01d" ||
        weatherIcon == "02d" ||
        weatherIcon == "03d"
      ) {
        backgroundImage =
          "https://images.hdqwalls.com/download/blue-sky-summer-dv-1920x1080.jpg";
      } else if (
        weatherIcon == "01n" ||
        weatherIcon == "02n" ||
        weatherIcon == "03n"
      ) {
        backgroundImage =
          "https://3.bp.blogspot.com/-CBkeyJkASJY/XFUltC8eOEI/AAAAAAAABz0/Dlf9jd3RMPQKSz_G63SgYDiC53NmYNdywCKgBGAs/w1920-h1080-c/night-sky-stars-scenery-landscape-21-4K.jpg";
      } else if (
        weatherIcon == "04d" ||
        weatherIcon == "09d" ||
        weatherIcon == "10d"
      ) {
        backgroundImage = "https://wallpaperaccess.com/full/3524424.jpg";
      } else if (
        weatherIcon == "04n" ||
        weatherIcon == "09n" ||
        weatherIcon == "10n"
      ) {
        backgroundImage = "https://wallpapercave.com/wp/wp4534141.jpg";
      } else if (
        weatherIcon == "11d" ||
        weatherIcon == "13d" ||
        weatherIcon == "50d"
      ) {
        backgroundImage = "https://images6.alphacoders.com/587/587573.jpg";
      } else if (
        weatherIcon == "11n" ||
        weatherIcon == "13n" ||
        weatherIcon == "50n"
      ) {
        backgroundImage = "https://wallpaper.dog/large/20536290.jpg";
      } else {
        backgroundImage =
          "https://img.freepik.com/free-vector/glitch-error-screen-background-vhs-video-problem-with-pixel-noise_8071-4987.jpg?w=2000";
      }

      document
        .querySelector("body")
        .setAttribute(
          "style",
          "background-image: url('" + backgroundImage + "');"
        );

      // DESCRIPTION
      document.querySelector(".desc").innerText =
        resp.data.weather[0].description;

      // TEMPERATURE
      document.querySelector(".temp").innerText =
        resp.data.main.temp.toFixed(1) + " °C";
      document.querySelector(".ressenti").innerText =
        resp.data.main.feels_like.toFixed(1) + " °C";
      document.querySelector(".maximum").innerText =
        resp.data.main.temp_max.toFixed(1) + " °C";
      document.querySelector(".minimum").innerText =
        resp.data.main.temp_min.toFixed(1) + " °C";

      // VENT
      let ventMS = resp.data.wind.speed;
      let vitesseConversion = 3.6;
      let ventKMH = ventMS * vitesseConversion;
      document.querySelector(".v-vitesse").innerText =
        ventKMH.toFixed(0) + " km/h";
      document.querySelector(".v-degre").innerText = resp.data.wind.deg + "°";

      // AUTRES
      document.querySelector(".humidite").innerText =
        resp.data.main.humidity + "%";

      if (resp.data.visibility == 10000) {
        document.querySelector(".visibilite").innerText = "Max.";
      } else {
        document.querySelector(".visibilite").innerText =
          resp.data.visibility + " m";
      }

      document.querySelector(".pression-mer").innerText =
        resp.data.main.pressure + " hPa";

      // COORDONNEES
      document.querySelector(".latitude").innerText = resp.data.coord.lat;
      document.querySelector(".longitude").innerText = resp.data.coord.lon;

      //TEMPS
      document.querySelector(".pays").innerText = resp.data.sys.country;
      document.querySelector(".utc").innerText = testtime(resp.data.dt);

      let timezone = resp.data.timezone;
      let decalageUTC = timezone / 3600;
      document.querySelector(".decalage-utc").innerText = decalageUTC + " H";

      document.querySelector(".lever-soleil").innerText = testtime(
        resp.data.sys.sunrise
      );
      document.querySelector(".coucher-soleil").innerText = testtime(
        resp.data.sys.sunset
      );
    })
    .catch((err) => {
      console.log(err);

      document
        .querySelector(".b")
        .setAttribute("style", "background-color:black;");
      let hTwo = document.querySelectorAll("h2");
      hTwo[0].innerText = "3rR0R 4o4";
      hTwo[1].innerText = "3rR0R 4o4";
      hTwo[2].innerText = "3rR0R 4o4";
      hTwo[3].innerText = "3rR0R 4o4";
      hTwo[4].innerText = "3rR0R 4o4";
      document.querySelector(".degre").innerText = "404";

      // VILLE
      document.querySelector(".ville").innerText = "ERROR";

      // ICONE
      const img = document.querySelector(".iconeDesc");
      img.setAttribute("style", "display:none;");

      // BACKGROUND IMAGE
      backgroundImage =
        "https://img.freepik.com/free-vector/glitch-error-screen-background-vhs-video-problem-with-pixel-noise_8071-4987.jpg?w=2000";
      document
        .querySelector("body")
        .setAttribute(
          "style",
          "background-image: url('" + backgroundImage + "');"
        );

      // DESCRIPTION
      document.querySelector(".desc").innerText = "ERROR";

      // TEMPERATURE
      document.querySelector(".temp").innerText = "ERROR °C";
      document.querySelector(".ressenti").innerText = "404 °C";
      document.querySelector(".maximum").innerText = "ERROR °C";
      document.querySelector(".minimum").innerText = "404 °C";

      // VENT
      document.querySelector(".v-vitesse").innerText = "ERROR km/h";
      document.querySelector(".v-degre").innerText = "404 °";

      // AUTRES
      document.querySelector(".humidite").innerText = "ERROR %";

      document.querySelector(".visibilite").innerText = "404";

      document.querySelector(".pression-mer").innerText = "ERROR hPa";

      // COORDONNEES
      document.querySelector(".latitude").innerText = "404";
      document.querySelector(".longitude").innerText = "ERROR";

      //TEMPS
      document.querySelector(".pays").innerText = "404";
      document.querySelector(".utc").innerText = "ERROR";

      document.querySelector(".decalage-utc").innerText = "404 H";

      document.querySelector(".lever-soleil").innerText = "ERROR";
      document.querySelector(".coucher-soleil").innerText = "404";
    });
};

/**
 * It takes a date/time value in the form of a Unix timestamp, subtracts 7200 seconds from it, then
 * converts it to a human-readable date/time value.
 *
 * The reason I subtract 7200 seconds is because the API I'm using returns a date/time value that is 2
 * hours ahead of the actual time.
 *
 * I'm using the above function in a React app.
 *
 * Here's the code I'm using to call the function:
 * @param apiDateTime - the date and time from the API
 * @returns the formattedTime variable.
 */
const testtime = (apiDateTime) => {
  let unixUTC = apiDateTime - 7200;
  let dateTimeUTC = new Date(unixUTC * 1000);

  let heures = dateTimeUTC.getHours();
  let minutes = "0" + dateTimeUTC.getMinutes();
  let secondes = "0" + dateTimeUTC.getSeconds();

  let formattedTime =
    heures + ":" + minutes.substr(-2) + ":" + secondes.substr(-2);

  return formattedTime;
};

/* Making an API request to the OpenWeatherMap API for Paris city */
APIrequest(
  "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=818f3d9d5049717137716f60a60b5ae3&lang=fr&units=metric"
);

/* Getting the current position of the user and then using the latitude and longitude to make an API
request. */
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  APIrequest(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      long +
      "&appid=818f3d9d5049717137716f60a60b5ae3&lang=fr&units=metric"
  );
});

// SEARCH BAR VALUE
const searchBar = document.querySelector("#searchBar");

/**
 * It takes the value of the search bar and uses it to make a request to the API
 */
function searchBarValue() {
  let searchBarValue = searchBar.value;

  APIrequest(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchBarValue +
      "&appid=818f3d9d5049717137716f60a60b5ae3&lang=fr&units=metric"
  );
}

/* An event listener that listens for the keypress event. If the key pressed is the enter key, it
 makes an API request to the OpenWeatherMap API. */
searchBar.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    let searchBarValue = searchBar.value;

    APIrequest(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchBarValue +
        "&appid=818f3d9d5049717137716f60a60b5ae3&lang=fr&units=metric"
    );
  }
});

const menu = document.querySelector(".menu");

/* Hiding the first div and showing the second div. */
menu.addEventListener("click", () => {
  document.querySelector(".a").setAttribute("style", "display:none;");
  document
    .querySelector(".b")
    .setAttribute("style", "display:block;width:100%;height:100%;");
});

const closed = document.querySelector(".close");

/* Hiding the first div and showing the second div. */
closed.addEventListener("click", () => {
  document.querySelector(".a").setAttribute("style", "display:inherit;");
  document.querySelector(".b").setAttribute("style", "display:none;");
});

/* Reloading the page when the window is resized. */
window.addEventListener("resize", () => {
  if (window.innerWidth < 770 && window.innerWidth > 730) {
    location.reload();
  }
});
