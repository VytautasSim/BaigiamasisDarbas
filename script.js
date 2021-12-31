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
    slidesPerView: 3,
    slidesPerGroup: 3,
    autoHeight: true,
    spaceBetween: 120,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });

