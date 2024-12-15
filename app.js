/*
TODO:
Sort duration filtering.

*/


// Import functions for applying filters, search, and rendering
import { applyFilters } from './filters.js';
import { applySearch } from './search.js';
import { renderCabinOptions, renderCruiseCatalogue, renderCruiseDestinations, renderDurationOptions } from './render.js';
import { storeDestination } from './destination.js'; 

export let cruiseCatalogue = [];

const applyFiltersElement = document.getElementById("applyFilters");
applyFiltersElement.addEventListener("click", applyFilters);

const searchButtonElement = document.getElementById("searchButton");
searchButtonElement.addEventListener("click", applySearch);

const destination = storeDestination();

document.addEventListener("DOMContentLoaded", function () {
    // Fetch the cruise data. This makes the network request to fetch the file from cruiseCatalogue.json.
    fetch("cruiseCatalogue.json")
        .then(response => response.json()) // Once the fetch request is complete, the response is recieved. The response is an object that represents the HTTP response and calling .json parse the response body as JSON. This returns a promise that resolves to the parsed data.
        .then(data => { // The data here is the parsed content from cruiseCatalogue.json.
            cruiseCatalogue = data; 
            console.log(cruiseCatalogue);
            renderCruiseCatalogue(cruiseCatalogue);  // Render catalogue
            renderCruiseDestinations(cruiseCatalogue.map(item => item.destination));  // Render destination dropdown
            renderDurationOptions(cruiseCatalogue.map(item => item.duration));
            renderCabinOptions(cruiseCatalogue.map(item => {
                console.log(item.cabins);
                return item.cabins;
            }));
            console.log("Cruise data loaded and DOM initialized.");
        })
        .catch(error => console.error("Error loading the cruise data:", error));
});
