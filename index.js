function distanceFromHqInBlocks(currentBlock) {
    const hq = 42;
    if (currentBlock === hq) {
        return 0;
    } else if (currentBlock < hq) {
        return hq - currentBlock;
    } else {
        return currentBlock - hq;
    }
}

function distanceFromHqInFeet(currentBlock) {
    return distanceFromHqInBlocks(currentBlock) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    if (startingBlock === endingBlock) {
        return 0;
    } else if (startingBlock < endingBlock) {
        return (endingBlock - startingBlock) * 264;
    } else {
        return (startingBlock - endingBlock) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000)
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}










// if (start === destination) {
//     return 0;

// } else if (start < destination || start > destination) {
//     let feetTraveled = (destination - start) * 264 || (start - destination) * 264;

//     if (feetTraveled <= 400) {
//         return 0;

//     } else if (400 < feetTraveled <= 2000) {
//         return (feetTraveled - 400) * .02;

//     } else if (2000 < feetTraveled <= 2500) {
//         return 25;

//     } else {
//         return 'cannot travel that far';
//     }
// }