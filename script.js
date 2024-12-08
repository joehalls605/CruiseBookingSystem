
// JOE TO DO

// Apply filters to work only,choose option does not update filtering.
// Split out files with export import etc.

const cruiseCatalogue = [
    {
        cruiseTitle: "Barbados Tour",
        destination: "Barbados",
        ship: "Victoria",
        pricePerPerson: 1700,
        cabins: [
            {
                interiorCabin: {
                    roomsAvailable: 40
                },
                oceanViewCabin: {
                    roomsAvailable: 30
                },
                Suite: {
                    roomsAvailable: 20
                }
            }
        ],
        daysTravelledTotal: 20
    },
    {
        cruiseTitle: "Norway Tour",
        destination: "Norway",
        ship: "Olena",
        pricePerPerson: 1400,
        cabins: [
            {
                interiorCabin: {
                    roomsAvailable: 25
                },
                oceanViewCabin: {
                    roomsAvailable: 20
                },
                Suite: {
                    roomsAvailable: 15
                }
            }
        ],
        daysTravelledTotal: 15
    },
    {
        destination: "Lisbon",
        cruiseTitle: "Lisbon Tour",
        ship: "Bella",
        pricePerPerson: 1200,
        cabins: [
            {
                interiorCabin: {
                    roomsAvailable: 30
                },
                oceanViewCabin: {
                    roomsAvailable: 40
                },
                Suite: {
                    roomsAvailable: 20
                }
            }
        ],
        daysTravelledTotal: 15
    },
];

const bookingList = [];

// DOM elements

const cruiseCatalogueElement = document.getElementById("cruiseCatalogue");
const filterByPriceElement = document.getElementById("filterByPrice");
const filterByPriceMinInputElement = document.getElementById("filterByPriceMinInput");
const filterByPriceMaxInputElement = document.getElementById("filterByPriceMaxInput");

// Destination
const destinationOptionsElement = document.getElementById("destinationOptions");
destinationOptionsElement.addEventListener("change", storeDestination);


const applyFiltersElement = document.getElementById("applyFilters");
applyFiltersElement.addEventListener("click", applyFilters);



document.addEventListener("DOMContentLoaded", function(){
    renderCruiseCatalogue(cruiseCatalogue);
    console.log("DOM Loaded");
});





function renderCruiseCatalogue(cruiseCatalogue){

    const html = cruiseCatalogue.map(item => `
        <h3>${item.cruiseTitle}</h3>
        <p>Destination:${item.destination}</p>
        <p>ShipName:${item.ship}</p>
        <p>Price per person ${item.pricePerPerson}</p>
        <p>Cabin Options:<p>
        <ul>
         ${item.cabins.map(cabin => `
            <li>
            <p>Interior Cabin:</p>
            <p>Rooms Left: ${cabin.interiorCabin.roomsAvailable}</p>
            </li>
            <li>
            <p>Ocean View Cabin:</p>
            <p>Rooms Left: ${cabin.oceanViewCabin.roomsAvailable}</p>
            </li>
              <li>
            <p>Suite:</p>
            <p>Rooms Left: ${cabin.Suite.roomsAvailable}</p>
            </li>
            `)}
        </ul>
        `).join("");

    cruiseCatalogueElement.innerHTML = html;
}



// APPLY FILTERS

function applyFilters(){
    const minPrice = Number(filterByPriceMinInputElement.value) || 0;
    const maxPrice = Number(filterByPriceMaxInputElement.value) || 0;
    const selectedDestination = storeDestination();

    let filteredCatalogue = cruiseCatalogue.filter(function(element){
        // Checking the price range
        if(maxPrice > 0 && element.pricePerPerson > maxPrice) return false;
        if(element.pricePerPerson < minPrice) return false;
   
        // Checking the destination
        if(selectedDestination && element.destination !== selectedDestination) return false;

        return true;
    });

    renderCruiseCatalogue(filteredCatalogue);
}

function filterByPrice(minPrice, maxPrice, cruiseCatalogue){
    // const cruisesFilteredByPrice = cruiseCatalogue.filter(element => element.pricePerPerson <= minPrice && element.pricePerPerson <= maxPrice);
    const cruisesFilteredByPrice = cruiseCatalogue.filter(function(element){
        return element.pricePerPerson >= minPrice && element.pricePerPerson <= maxPrice;
    })

    console.log(cruisesFilteredByPrice);
    renderCruiseCatalogue(cruisesFilteredByPrice);

    
}

const cruiseDestinations = cruiseCatalogue.map(element => element.destination);
console.log("these are the cruise destinations array", cruiseDestinations);

function renderCruiseDestinations(cruiseDestinations){

    // Clearing existing options
    destinationOptionsElement.innerHTML = "";

    // Creating a default choose destination option
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose destination";
    defaultOption.value="";
    destinationOptionsElement.appendChild(defaultOption);

    // Adding destinations as options
    cruiseDestinations.forEach(destination => {
        const optionElement = document.createElement("option");
        optionElement.textContent = destination;
        optionElement.value = destination;
        destinationOptionsElement.appendChild(optionElement);
    });

}

renderCruiseDestinations(cruiseDestinations);

function storeDestination(){
    const selectedDestination = destinationOptionsElement.value;
    return selectedDestination;
}

function filterByDestination(cruiseCatalogue, selectedDestination){
    if(!selectedDestination) return cruiseCatalogue; // Return original if no destination selected.
    return cruiseCatalogue.filter(function(element){
        return element.destination === selectedDestination;
    })
}