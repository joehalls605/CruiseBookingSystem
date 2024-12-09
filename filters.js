// Import needed functions
import { renderCruiseCatalogue } from './render.js';
import { storeDestination } from './destination.js';
import { cruiseCatalogue } from './app.js';

export function applyFilters() {
    const filterByPriceMinInputElement = document.getElementById("filterByPriceMinInput");
    const filterByPriceMaxInputElement = document.getElementById("filterByPriceMaxInput");
    const durationOptionsElement = document.getElementById("durationOptions");

    const minPrice = Number(filterByPriceMinInputElement.value) || 0;
    const maxPrice = Number(filterByPriceMaxInputElement.value) || 0;
    const selectedDestination = storeDestination();

    const duration = Number(durationOptionsElement.value) || 0;

    console.log("Current cruiseCatalogue:", cruiseCatalogue);

    let filteredCatalogue = cruiseCatalogue.filter(function (element) {
        // Checking the price range
        if (maxPrice > 0 && element.pricePerPerson > maxPrice) return false;
        if (element.pricePerPerson < minPrice) return false;

        // Checking the destination
        if (selectedDestination && element.destination !== selectedDestination) return false;

        // Checking the duration
        if(duration && duration !== element.duration) return false; 

        return true;
    });

    renderCruiseCatalogue(filteredCatalogue);  // Render filtered results
}
