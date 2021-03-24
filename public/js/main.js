const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer')

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "please write the name before search";
    datahide.classList.add('data_hidden')
  } else {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2a441b1f743fddc59adcb479be64da70`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp.innerText = arrData[0].main.temp;
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      const tempMood = arrData[0].weather[0].main;

      if ((tempMood == "Clear")) {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if ((tempMood == "Clouds")) {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if ((tempMood == "Rain")) {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0bc;'></i>";
      } else {
        temp_status.innerHTML ==
          "<i class='fas fa-sun' style='color:#f1f2f6;'></i>";
      }
      datahide.classList.remove('data_hidden')

    } catch {
      city_name.innerText = "please enter the city name properly";
      datahide.classList.add('data_hidden')
    }
  }
};

submitBtn.addEventListener("click", getInfo);
