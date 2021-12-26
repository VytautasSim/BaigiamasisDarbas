// About section tab navigation
const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");

//console.log(tabNavigationElements)
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
        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active"); //uzdedame class "active" ant elemento kuri paspaudziame
   });
}