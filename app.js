const city = prompt("Writte your city. For example:", "KYIV");
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let valueOfTemp = data.main.temp;
    let valueVisibleTemp = document.querySelector(".temp");
    valueVisibleTemp.innerHTML = valueOfTemp;

    let valueOfDescription = data.weather[0].description;
    let valueVisibleDescription = document.querySelector(".description");
    valueVisibleDescription.innerHTML = valueOfDescription;

    let valueOfPressure = data.main.pressure;
    let valueVisiblePressure = document.querySelector(".pressure");
    valueVisiblePressure.innerHTML = valueOfPressure;

    let valueOfHumidity = data.main.humidity;
    let valueVisibleHumidity = document.querySelector(".humidity");
    valueVisibleHumidity.innerHTML = valueOfHumidity;

    let valueOfSpeed = data.wind.speed;
    let valueVisibleSpeed = document.querySelector(".speed");
    valueVisibleSpeed.innerHTML = valueOfSpeed;

    let valueOfDegree = data.wind.deg;
    let valueVisibleDegree = document.querySelector(".deg");
    valueVisibleDegree.innerHTML = valueOfDegree;

    let codeOfIcon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/w/${codeOfIcon}.png`;
    let iconInHtml = document.querySelector(".icon>img");
    iconInHtml.setAttribute("src", `${iconUrl}`);
  });

let showCity = document.querySelector(".city");
showCity.innerHTML = city;

//https://openweathermap.org/img/w/10d.png
//   temp - температура
// pressure - тиск
// description - опис
// humidity - вологість
// speed - швидкість вітру
// deg - напрям в градусах
// icon - іконка, де 10d код іконки
