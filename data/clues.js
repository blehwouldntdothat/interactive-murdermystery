function buildClues(puzzle) {
    const { killer, weapon, location, motive, pool } = puzzle;
    const clues = [];

    // Murder location
    clues.push(`The murder happened in the ${location.name}.`);

    // Weapon material
    clues.push(`The murder weapon was made of ${weapon.material}.`);

    // Eliminate one innocent suspect
    const innocent = pool.suspects.filter(s => s.id !== killer.id);
    const eliminated = innocent[Math.floor(Math.random() * innocent.length)];
    clues.push(`${eliminated.name} was confirmed to NOT be in the ${location.name}.`);

    // Eliminate one wrong motive
    const wrongMotives = pool.motives.filter(m => m.id !== motive.id);
    const wrong = wrongMotives[Math.floor(Math.random() * wrongMotives.length)];
    clues.push(`The killer’s motive was NOT ${wrong.name}.`);

    return clues;
}
