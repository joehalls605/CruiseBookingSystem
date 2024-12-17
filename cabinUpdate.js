function cabinUpdate(selectedDestination, cruiseCatalogue){

console.log("Cabin update");

const locatedDestination = cruiseCatalogue.find(function(item){
    // JOE FINISH THIS LOGIC
    if(item.destination === selectedDestination){
        // Iteratin through the cabins and update roomAvailable
        item.cabins.forEach(cabin => {
            if(cabin.interiorCabin){
                cabin.interiorCabin.roomsAvailable --;
            }
            if(cabin.OceanViewCabin){
                cabin.OceanViewCabin.roomsAvailable --;
            }
            if(cabin.Suite){
                cabin.Suite.roomsAvailable --;
            }
        });
        return item.destination === selectedDestination;
    }
});

console.log("Updated cabins:", locatedDestination.cabins);
}

export default cabinUpdate;