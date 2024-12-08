// Import functions for applying filters, search, and rendering
import { applyFilters } from './filters.js';
import { applySearch } from './search.js';
import { renderCruiseCatalogue, renderCruiseDestinations } from './render.js';
import { storeDestination } from './destination.js'; 

let cruiseCatalogue = [];

const applyFiltersElement = document.getElementById("applyFilters");
applyFiltersElement.addEventListener("click", applyFilters);

const searchButtonElement = document.getElementById("searchButton");
searchButtonElement.addEventListener("click", applySearch);

document.addEventListener("DOMContentLoaded", function () {
    // Fetch the cruise data
    fetch("cruiseCatalogue.json")
        .then(response => response.json())
        .then(data => {
            cruiseCatalogue = data;
            renderCruiseCatalogue(cruiseCatalogue);  // Render catalogue
            renderCruiseDestinations(cruiseCatalogue.map(item => item.destination));  // Render destination dropdown
            console.log("Cruise data loaded and DOM initialized.");
        })
        .catch(error => console.error("Error loading the cruise data:", error));
});
