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

// Destinations
const destinationOptionsElement = document.getElementById("destinationOptions");


const applyFiltersElement = document.getElementById("applyFilters");


document.addEventListener("DOMContentLoaded", function(){
    renderCruiseCatalogue(cruiseCatalogue);
    console.log("DOM Loaded");
});

applyFiltersElement.addEventListener("click", applyFilters);


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

filterByDestination(cruiseCatalogue);


function applyFilters(){
    const minPrice = filterByPriceMinInputElement.value;
    const maxPrice = filterByPriceMaxInputElement.value;
    console.log(minPrice);
    console.log(maxPrice);
    filterByPrice(minPrice, maxPrice, cruiseCatalogue);
}

function filterByPrice(minPrice, maxPrice, cruiseCatalogue){
    // const cruisesFilteredByPrice = cruiseCatalogue.filter(element => element.pricePerPerson <= minPrice && element.pricePerPerson <= maxPrice);
    const cruisesFilteredByPrice = cruiseCatalogue.filter(function(element){
        return element.pricePerPerson >= minPrice && element.pricePerPerson <= maxPrice;
    })

    console.log(cruisesFilteredByPrice);
    renderCruiseCatalogue(cruisesFilteredByPrice);
}

// JOE WORK ON THIS.


function filterByDestination(cruiseCatalogue){
    const cruiseDestinations = cruiseCatalogue.map(element => element.destination);
    renderCruiseDestinations(cruiseDestinations);
    console.log("JOE THESE ARE THE CRUISE DESNTATIONS", cruiseDestinations);
}

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

    console.log(destinationOptionsElement);
}
