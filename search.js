// Contains the search functionality.


import { renderCruiseCatalogue } from './render.js';

export function applySearch() {
    const searchInputElement = document.getElementById("searchInput");
    const searchTerm = searchInputElement.value.toLowerCase();

    const searchResults = cruiseCatalogue.filter(function (cruise) {
        return (
            cruise.cruiseTitle.toLowerCase().includes(searchTerm) ||
            cruise.destination.toLowerCase().includes(searchTerm)
        );
    });

    renderCruiseCatalogue(searchResults);
}
