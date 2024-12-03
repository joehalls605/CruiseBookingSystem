const cruiseCatalogue = [
    {
        cruiseTitle: "Barbados Tour",
        destination: "Barbados",
        ship: "Victoria",
        cabins: [
            {
                interiorCabin: {
                    price: 900,
                    roomsAvailable: 40
                },
                oceanViewCabin: {
                    price: 1400,
                    roomsAvailable: 30
                },
                Suite: {
                    price: 2500,
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
        cabins: [
            {
                interiorCabin: {
                    price: 700,
                    roomsAvailable: 25
                },
                oceanViewCabin: {
                    price: 1200,
                    roomsAvailable: 20
                },
                Suite: {
                    price: 2300,
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
        cabins: [
            {
                interiorCabin: {
                    price: 800,
                    roomsAvailable: 30
                },
                oceanViewCabin: {
                    price: 1400,
                    roomsAvailable: 40
                },
                Suite: {
                    price: 2600,
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

console.log("Hi Joe");

document.addEventListener("DOMContentLoaded", function(){
    renderCruiseCatalogue(cruiseCatalogue);
    console.log("DOM Loaded");
});



function renderCruiseCatalogue(cruiseCatalogue){

    const html = cruiseCatalogue.map(item => `
        <li>
        <h3>Cruise Title:${item.cruiseTitle}</h3>
        <p>Destination:${item.destination}</p>
        <p>shipName:${item.ship}</p>
        <p>Cabin Options:<p>
        <ul>
         ${item.cabins.map(cabin => `
            <li>
            <p>Interior Cabin:</p>
            <p>Room Price: ${cabin.interiorCabin.price}</p>
            <p>Rooms Left: ${cabin.interiorCabin.roomsAvailable}</p>
            </li>
            <li>
            <p>Ocean View Cabin:</p>
            <p>Room Price: ${cabin.oceanViewCabin.price}</p>
            <p>Rooms Left: ${cabin.oceanViewCabin.roomsAvailable}</p>
            </li>
              <li>
            <p>Suite:</p>
            <p>Room Price: ${cabin.Suite.price}</p>
            <p>Rooms Left: ${cabin.Suite.roomsAvailable}</p>
            </li>
            `)}
        </ul>
        
        </li>
        `).join("");

    cruiseCatalogueElement.innerHTML = html;
}