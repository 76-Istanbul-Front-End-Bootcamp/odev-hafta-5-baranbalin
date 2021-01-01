import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

/* "Population - bigger than 500.000"s butonuna tikladindiginda sadece bu sarti saglayan sehirler tabloda gozukmeli */
document.querySelector("#populationBigger").addEventListener("click", () => {
  const popBiggerThan = data.filter(city => city.population > 500000);
  createTableElements(biggerThan, "allcities");
});

/* "land area - less than 1000" butonuna tikladindiginda sadece bu sarti saglayan sehirler tabloda gozukmeli */
document.querySelector("#landAreaLess").addEventListener("click", () => {
  const landLessThan = data.filter(city => city.landArea < 1000);
  createTableElements(landLessThan, "allcities");
});

/*"Does any city has population less than 100.000?" butonuna tiklandiginda yes ya da no seklinde bir alert cikmali. */
document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const popLess = data.some(city => city.population < 100000);
  popLess ? alert('YES') : alert('NO');
});

/*"Does every city has land area bigger than 100?" butonuna tiklandiginda kosula gore yes ya da no seklinde bir alert cikmali. */
document.querySelector("#isLandBigger").addEventListener("click", () => {
  const landBigger = data.every(city => city.landArea > 100);
  landBigger ? alert('YES') : alert('NO');
});

/* Choose yazan selecti elimizdeki bulunan tum sehirlerin isimleriyle dolduralim. */
const cityList  = data.map(cityList => cityList.name);
const cityListSelect = document.querySelector(".custom-select");
cityList.forEach((element) => {
  const createOption = document.createElement("option");
  createOption.setAttribute("value", element);
  createOption.textContent = element;
  cityListSelect.appendChild(createOption);
});

/*Choose yazan select secim yapildiginda 2. tablo olan, found item tablosunu selectde secilen sehir ile dolduralim. */
cityListSelect.addEventListener("change", (e) => {
  const selectedCities = data.filter(cities => e.target.value === cities.name);
  createTableElements(selectedCities, "singlecity");
})