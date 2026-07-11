const statementTemplates = {
    location: (s, l, negate) =>
        negate
            ? `${s.name} claims they were NOT in the ${l.name}.`
            : `${s.name} claims they were in the ${l.name}.`,

    weapon: (s, w, negate) =>
        negate
            ? `${s.name} says they DID touch the ${w.name}.`
            : `${s.name} says they never touched the ${w.name}.`,

    motive: (s, m, negate) =>
        negate
            ? `${s.name} insists their motive WAS ${m.name}.`
            : `${s.name} insists their motive wasn’t ${m.name}.`
};

function buildStatements(puzzle) {
    const { killer, pool, location, weapon, motive } = puzzle;
    const statements = {};

    pool.suspects.forEach(s => {
        const types = ["location", "weapon", "motive"];
        const type = types[Math.floor(Math.random() * types.length)];
        const negate = s.id === killer.id;

        let text;

        if (type === "location") {
            text = statementTemplates.location(s, location, negate);
        } else if (type === "weapon") {
            text = statementTemplates.weapon(s, weapon, negate);
        } else {
            text = statementTemplates.motive(s, motive, negate);
        }

        statements[s.id] = text;
    });

    return statements;
}
