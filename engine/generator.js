function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickFour(arr) {
    return arr
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
}

function generateRandomPuzzle() {
    const pool = {
        suspects: pickFour(suspects),
        weapons: pickFour(weapons),
        locations: pickFour(locations),
        motives: pickFour(motives)
    };

    const killer   = randomItem(pool.suspects);
    const weapon   = randomItem(pool.weapons);
    const location = randomItem(pool.locations);
    const motive   = randomItem(pool.motives);

    return { pool, killer, weapon, location, motive };
}

