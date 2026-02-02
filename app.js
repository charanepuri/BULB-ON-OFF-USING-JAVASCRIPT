let body = document.body
let bulb = document.getElementById("bulb");
let toggleBtn = document.getElementById("toggleBtn");
let sizeBtn = document.getElementById("sizeBtn");

// Bulb ON / OFF toggle
toggleBtn.addEventListener("click", () => {
    bulb.classList.toggle("on");

    if (bulb.classList.contains("on")) {
        toggleBtn.textContent = "BULB OFF";
        bulb.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
    } else {
        toggleBtn.textContent = "BULB ON";
        bulb.style.backgroundColor = "#00000022"
        body.style.backgroundColor = "white";
    }
});

// Change Dimensions
sizeBtn.addEventListener("click", () => {
    let currentWidth = getComputedStyle(bulb).width;

    if (currentWidth === "120px") {
        bulb.style.width = "180px";
        bulb.style.height = "180px";
    } else {
        bulb.style.width = "120px";
        bulb.style.height = "120px";
    }
});
