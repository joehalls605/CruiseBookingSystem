// Import needed functions
import { renderCruiseCatalogue } from './render.js';
import { storeDestination } from './destination.js';
import { cruiseCatalogue } from './app.js';
import { destinationThankYou } from './render.js';
import cabinUpdate from './cabinUpdate.js';

const randomDiscountElement = document.getElementById("randomDiscount");
randomDiscountElement.addEventListener("click", randomDiscount);

const filterByLowPrice = document.getElementById("filterByLowPrice");
filterByLowPrice.addEventListener("click", sortByLowPrice);

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
    console.log("THE AGE", age);

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
    displayBookings(jsonString);
}

function displayBookings(json){

    const booking = JSON.parse(json);
    console.log("Displaying booking:", booking);

    // Checking if the firstname property exists
    if(!booking.customerFirstName){
        console.log("Booking object does not contain firstname");
        return;
    }

    const bookingElement = document.createElement("div");
    bookingElement.textContent = `
    First name: ${booking.customerFirstName} 
    Surname: ${booking.surname}
    age: ${booking.customerAge}

    `;

    const displayBookingsElement = document.getElementById("displayBookings");

    if(!displayBookingsElement){
        console.error("Element with ID 'displayBookings' not found in the DOM");
        return;
    }

    displayBookingsElement.appendChild(bookingElement);
    
}

function randomDiscount(){
    let min = 5;
    let max = 20;
    let randomNumInRange = Math.floor(Math.floor(Math.random() * (max - min + 1)) + min);
    randomDiscountElement.textContent = `Your random discount ${randomNumInRange}%`;

    const discountedCatalogue = [...cruiseCatalogue].map(item => {

        // converting random number into a decimal, then gives the remaining percentage customer has to pay, multiply this and calculates new price.
        const discountedPrice = item.pricePerPerson * (1 - randomNumInRange / 100);

        return {
            ...item, // this takes a whole copy of the object properties and values
            pricePerPerson: discountedPrice // and updates the price with discounted price
        }
    })

    renderCruiseCatalogue(discountedCatalogue);

}

function sortByLowPrice(){
    
    // This just extracts out the prices
    // const cruisePrices = cruiseCatalogue.map(item => item.pricePerPerson).sort((a,b) => b - a);

    // But this creates a shallow copy of the array using the spread operator
    const sortedCatalogue = [...cruiseCatalogue].sort((a, b) => b.pricePerPerson - a.pricePerPerson);
    renderCruiseCatalogue(sortedCatalogue);
}

