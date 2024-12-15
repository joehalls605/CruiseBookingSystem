function cabinUpdate(cruiseCatalogue, selectedDestination){

console.log("Cabin update");

const locatedDestination = cruiseCatalogue.find(function(item){
    
    // JOE FINISH THIS LOGIC
    return item.destination === selectedDestination;
    // FINISH DEDUCTING THIS CABIN 
    // THEN SORT SEARCH
});

console.log(locatedDestination);
    
}

export default cabinUpdate;