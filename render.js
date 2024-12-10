// Render cruise catalogue and destinations
export function renderCruiseCatalogue(cruiseCatalogue) {
    const cruiseCatalogueElement = document.getElementById("cruiseCatalogue");

    const html = cruiseCatalogue.map(item => `
        <h3>${item.cruiseTitle}</h3>
        <p>Destination: ${item.destination}</p>
        <p>Ship Name: ${item.ship}</p>
        <p>Price per person: ${item.pricePerPerson}</p>
        <p>Cabin Options:</p>
        <ul>
            ${item.cabins.map(cabin => `
                <li>Interior Cabin: ${cabin.interiorCabin.roomsAvailable} rooms left</li>
                <li>Ocean View Cabin: ${cabin.oceanViewCabin.roomsAvailable} rooms left</li>
                <li>Suite: ${cabin.Suite.roomsAvailable} rooms left</li>
            `).join('')}
        </ul>
    `).join("");

    cruiseCatalogueElement.innerHTML = html;
}

export function renderCruiseDestinations(cruiseDestinations) {
    const destinationOptionsElement = document.getElementById("destinationOptions");

    // Clearing existing options
    destinationOptionsElement.innerHTML = "";

    // Creating a default choose destination option
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose destination";
    defaultOption.value = "";
    destinationOptionsElement.appendChild(defaultOption);

    // Adding destinations as options
    cruiseDestinations.forEach(destination => {
        const optionElement = document.createElement("option");
        optionElement.textContent = destination;
        optionElement.value = destination;
        destinationOptionsElement.appendChild(optionElement);
    });
}

export function renderDurationOptions(cruiseDurations){
    console.log("cruise destinations",cruiseDurations);
    const durationOptionsElement = document.getElementById("durationOptions");

    durationOptionsElement.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose a duration";
    defaultOption.value = "";
    durationOptionsElement.appendChild(defaultOption);

    // Adding durations as options
    cruiseDurations.forEach(duration => {
        const optionElement = document.createElement("option");
        optionElement.textContent = `${duration} days`
        optionElement.value = duration;
        durationOptionsElement.appendChild(optionElement);
    })
}

export function destinationThankYou(destination){
    const destinationThankYou = document.getElementById("destinationThankYou");

    switch(destination){
        case "Barbados":
            destinationThankYou.textContent = "Thank you for choosing Barbados!";
            destinationThankYou.appendChild(text);
            break;
        case "Norway":
            destinationThankYou.textContent = "Thank you for choosing Norway!";
            destinationThankYou.appendChild(text);
            break;
        case "Lisbon":
            destinationThankYou.textContent = "Thank you for choosing Lisbon!";
            destinationThankYou.appendChild(text);
            break;

    }
}