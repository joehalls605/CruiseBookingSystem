const darkModeToggleElement = document.getElementById("darkModeToggle");

if(darkModeToggleElement) {
    darkModeToggleElement.addEventListener("click", toggleDarkMode);
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