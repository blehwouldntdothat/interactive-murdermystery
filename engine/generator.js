function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomPuzzle() {
    return {
        killer: randomItem(suspects).id,
        weapon: randomItem(weapons).id,
        location: randomItem(locations).id,
        motive: randomItem(motives).id
    };
}
