// Import needed functions
import { renderCruiseCatalogue } from './render.js';
import { storeDestination } from './destination.js';
import { cruiseCatalogue } from './app.js';
import { destinationThankYou } from './render.js';
import cabinUpdate from './cabinUpdate.js';

export function applyFilters() {
    const filterByPriceMinInputElement = document.getElementById("filterByPriceMinInput");
    const filterByPriceMaxInputElement = document.getElementById("filterByPriceMaxInput");
    const durationOptionsElement = document.getElementById("durationOptions");
    const firstnameElement = document.getElementById("firstnameInput");
    const surnameElement = document.getElementById("surnameInput");
    const ageElement = document.getElementById("ageInput");

    const minPrice = Number(filterByPriceMinInputElement.value) || 0;
    const maxPrice = Number(filterByPriceMaxInputElement.value) || 0;
    const selectedDestination = storeDestination();

    const firstname = firstnameElement.value.trim();
    const surname = surnameElement.value.trim();
    
    const age = Number(ageElement.value) || 0;

    // Ternary practice
    let isSelectedDestinationTrue = (selectedDestination) ? "Yes it is true" : "No it is not true";
    console.log(isSelectedDestinationTrue);


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
        
        cabinUpdate(selectedDestination, cruiseCatalogue);

        return true;
    });

    // Combining the filtered catalogue with the name and age into a single booking object

    const bookingDetails = {
        customerFirstName: firstname,
        surname: surname,
        customerAge: age,
        bookings: filteredCatalogue
    };

    processBooking(bookingDetails);
    
    destinationThankYou(selectedDestination);

    renderCruiseCatalogue(filteredCatalogue);  // Render filtered results
}

function processBooking(bookingDetails){
    const jsonString = JSON.stringify(bookingDetails);
    console.log("JSON string" + jsonString);
}

// const destination = applyFilters();
