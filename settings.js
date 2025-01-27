const darkModeToggleElement = document.getElementById("darkModeToggle");
const fontSizeElement = document.getElementById("fontSizeRange");


document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("darkMode") === "enabled"){
        document.documentElement.classList.add("darkMode");
        darkModeToggleElement.checked = true;
    }
    else{
        document.documentElement.classList.remove("darkMode");
        darkModeToggleElement.checked = false;
    }
});

// Check font size setting from localStorage

const savedFontSize = localStorage.getItem("smallFont") || localStorage.getItem("mediumFont") || localStorage.getItem("largeFont");
fontSizeElement.value = savedFontSize;

document.documentElement.classList.add(`${savedFontSize}Font`);

if(savedFontSize === "enabled"){
    if(localStorage.getItem("smallFont") === "enabled"){
        fontSizeElement.value = "small";
        document.documentElement.classList.add("smallFont");
    }
    else if(localStorage.getItem("mediumFont") === "enabled"){
        fontSizeElement.value = "medium";
        document.documentElement.classList.add("mediumFont");
    }
    else if(localStorage.getItem("largeFont") === "enabled"){
        fontSizeElement.value = "large";
        document.documentElement.classList.add("largeFont");
    }
    else{
        // Default font size (if no value is found in localStorage)
        fontSizeElement.value = "medium";
        document.documentElement.classList.add("mediumFont");
    }
}


if(darkModeToggleElement) {
    darkModeToggleElement.addEventListener("click", toggleDarkMode);
}

if(fontSizeElement){
    fontSizeElement.addEventListener("change", toggleFontSize);
}

function toggleDarkMode() {
    if(darkModeToggleElement.checked){
        document.documentElement.classList.add("darkMode");
        localStorage.setItem("darkMode", "enabled");
    }
    else{
        document.documentElement.classList.remove("darkMode");
        localStorage.setItem("darkMode", "disabled");
    }
}

function toggleFontSize(){
    const currentFontSize = fontSizeElement.value;

    // Clearing any existing font styles.
    document.documentElement.classList.remove("smallFont", "mediumFont", "largeFont");

    switch(currentFontSize){
        case "small":
            document.documentElement.classList.add("smallFont");
            localStorage.setItem("fontSize", "small");
            break;
        case "medium":
            document.documentElement.classList.add("mediumFont");
            localStorage.setItem("fontSize", "medium");
            break;
        case "large":
            document.documentElement.classList.add("largeFont");
            localStorage.setItem("fontSize", "large");
            break;
        default:
            document.documentElement.classList.add("mediumFont");
            localStorage.setItem("fontSize", "medium");
    }
}