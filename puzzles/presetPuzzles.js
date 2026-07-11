const presetPuzzle = {
    pool: {
        suspects: suspects.slice(0, 4),
        weapons: weapons.slice(0, 4),
        locations: locations.slice(0, 4),
        motives: motives.slice(0, 4)
    },
    killer: suspects[2],     // Clara
    weapon: weapons[1],      // Rope
    location: locations[0],  // Kitchen
    motive: motives[3]       // Fear
};
