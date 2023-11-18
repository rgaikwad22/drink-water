// variables declarations for selectors 
var glasses = document.querySelectorAll(".glass-list li"),
    percentage = document.querySelector(".intake-percentage"),
    remained = document.querySelector(".water-intake"),
    waterContainer = document.querySelector(".water-container"),
    waterIntake = document.querySelector(".water-intac-remain");

// event declarations
glasses.forEach((element, i) => {
    element.addEventListener("click", () => highlightGlass(i),)
});

// global function call 
updateBigGlass();

// function declarations
function highlightGlass(i) {
    if (i === 7 && glasses[i].classList.contains("active")) {
        i--;
    } else if (glasses[i].classList.contains("active") && !glasses[i].nextElementSibling.classList.contains("active")) {
        i--;
    }

    glasses.forEach((el, idx) => {
        if (idx <= i) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    })

    updateBigGlass();
}

function updateBigGlass() {
    var totalGlasses = glasses.length,
        fullGlasses = document.querySelectorAll(".glass-list .active"),
        percentHeight = `${fullGlasses.length / totalGlasses * 250}px`,
        percentageValue = `${fullGlasses.length / totalGlasses * 100}%`;
    
    if (fullGlasses.length === 0) {
        percentage.style.height = 0;
        percentage.classList.add("percent-container");
    } else {
        percentage.style.height = percentHeight;
        percentage.innerHTML = percentageValue;
        percentage.classList.remove("percent-container");
        if(percentageValue === "100%"){
            waterIntake.classList.add("water-intake-full");
        }
    }
    remained.innerHTML = `${2 - (250 * fullGlasses.length / 1000)}L`;
}