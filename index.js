// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let blocks = Math.abs(location - 42);
    return  blocks;
}


function distanceFromHqInFeet(location)
 {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, desti){
    return Math.abs(desti - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = Math.abs(destination - start) * 264;
    if(feet <= 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return ((feet - 400) * 2)/100;
    } else if (feet > 2000 && feet < 2500){
        return 25;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    }
}
