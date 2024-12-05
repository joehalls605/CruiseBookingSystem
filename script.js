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

function applyFilters(){
    const minPrice = filterByPriceMinInputElement.value;
    const maxPrice = filterByPriceMaxInputElement.value;
    console.log(minPrice);
    console.log(maxPrice);
}