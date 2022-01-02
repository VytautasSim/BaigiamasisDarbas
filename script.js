// About section tab navigation
const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");

//about tage tab-navigation containeryje pasirenkame visus li
//

//Susikuriam pagalbine funkcija, class'ems nuo elementu nuimti

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElements of tabNavigationElements) {
    tabElements.addEventListener("click", function() {
        const target = this.dataset.target;
        
        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active"); //uzdedame class "active" ant elemento kuri paspaudziame

        removeActiveClassesFromElements(tabContentElements)
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active'); 
        //kiekviena karta selectins vis kita tab-content elementa pagal jo data-tab reiksme.
        //t.y. ant kurio li tago mes paspaudziame
        
    });
}

// Reviews section swiper gallery //

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 800,
    slidesPerView: 3,
    slidesPerGroup: 3,
    autoHeight: true,
    spaceBetween: 120,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 800px
        700: {
        slidesPerView: 2,
        spaceBetween: 10
        },

        780: {
        slidesPerView: 3,
        spaceBetween: 60
        }
    }

  });

// Get weather data from openweather API

// MY APIkey - f9f0d8ab8d0ddecdaafa120863acd0e3

const url = "http://api.openweathermap.org/data/2.5/weather?q=Bergamo&units=metric&appid=f9f0d8ab8d0ddecdaafa120863acd0e3";
const weatherElement = document.getElementById("weather-in-celsius");

function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = response.main.temp;

        if (temperature > 0) {
            weatherElement.innerText = "+" + temperature.toFixed(0);
        } else {
            weatherElement.innerText = temperature.toFixed(0);
        }

    })
    http.send();
}

window.addEventListener('load',getCurrentWeatherInCelsius);
