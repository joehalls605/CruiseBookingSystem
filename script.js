const cruiseCatalogue = [
    {
        cruiseTitle: "Barbados Tour",
        destination: "Barbados",
        ship: "Victoria",
        cabins: [
            {
                interiorCabin: {
                    price: 900,
                    totalAvailable: 40
                },
                oceanViewCabin: {
                    price: 1400,
                    totalAvailable: 30
                },
                Suite: {
                    price: 2500,
                    totalAvailable: 20
                }
            }
        ],
        daysTravelledTotal: 20
    },
    {
        cruiseTitle: "Norway Tour",
        destination: "Norway",
        ship: "Olena",
        cabins: [
            {
                interiorCabin: {
                    price: 700,
                    totalAvailable: 25
                },
                oceanViewCabin: {
                    price: 1200,
                    totalAvailable: 20
                },
                Suite: {
                    price: 2300,
                    totalAvailable: 15
                }
            }
        ],
        daysTravelledTotal: 15
    },
    {
        destination: "Lisbon",
        cruiseTitle: "Lisbon Tour",
        ship: "Bella",
        cabins: [
            {
                interiorCabin: {
                    price: 800,
                    totalAvailable: 30
                },
                oceanViewCabin: {
                    price: 1400,
                    totalAvailable: 40
                },
                Suite: {
                    price: 2600,
                    totalAvailable: 20
                }
            }
        ],
        daysTravelledTotal: 15
    },
];

const bookingList = [];

// DOM elements

const cruiseCatalogueElement = document.getElementById("cruiseCatalogue");

console.log("Hi Joe");

document.addEventListener("DOMContentLoaded", function(){
    renderCruiseCatalogue();
    console.log("DOM Loaded");
});



function renderCruiseCatalogue(cruiseCatalogue){
    return cruiseCatalogue.map(item => `
        <li>
        <h3>Cruise Title:${item.cruiseTitle}</h3>
        <p>Destination:${item.destination}</p>
        <p>shipName:${item.ship}</p>
        <p>Cabin Options:<p>
        <li>
        <p>Interior Cabin:</p>
        <p>Room Price: ${item.price}</p>
        <p>Rooms Left: ${item.price}</p>
        </li>
        </li>
        `)
}