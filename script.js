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
    autoplay: {
        delay: 2000,
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

// Section Hero javascript

const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const phone_number = document.getElementById('phone_number');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //reikia gauti is inputu vertes
    const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
    const phone_numberValue = phone_number.value.trim();

    if(first_nameValue === '') {
        //show error
        //add error class
        setErrorFor(first_name, "This field can not be blank");

    } else {
        //add success class
        setSuccessFor(first_name);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');

    // add error message inside span
    span.innerText = message;

    //add error class
    form.Control.className = 'form-control error';
}

// Secition header javascript
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
    