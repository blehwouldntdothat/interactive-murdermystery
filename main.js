let currentPuzzle = null;

function renderPuzzle(p) {
    const cluesDiv = document.getElementById("clues");
    const statementsDiv = document.getElementById("statements");

    cluesDiv.innerHTML = "";
    statementsDiv.innerHTML = "";

    // Generate clues
    const clues = [
        clueTemplates[0](randomItem(p.pool.suspects), randomItem(p.pool.locations)),
        clueTemplates[1](randomItem(p.pool.suspects), randomItem(p.pool.weapons)),
        clueTemplates[2](p.weapon),
        clueTemplates[3](randomItem(p.pool.motives)),
        clueTemplates[4](p.location)
    ];

    clues.forEach(c => cluesDiv.innerHTML += `<p>${c}</p>`);

    // Generate statements
    p.pool.suspects.forEach(s => {
        const template = randomItem(statementTemplates);

        let statement = template(
            s,
            randomItem([...p.pool.locations, ...p.pool.weapons, ...p.pool.motives])
        );

        // If killer → invert truth
        if (s.id === p.killer.id) {
            statement = invertStatement(statement);
        }

        statementsDiv.innerHTML += `<p><strong>${s.name}:</strong> ${statement}</p>`;
    });
}

function invertStatement(text) {
    return text.replace("never", "did").replace("was", "was not").replace("was not", "was");
}

document.getElementById("randomBtn").onclick = () => {
    currentPuzzle = generatePuzzle();
    renderPuzzle(currentPuzzle);
};

document.getElementById("presetBtn").onclick = () => {
    currentPuzzle = presetPuzzle;
    renderPuzzle(currentPuzzle);
};
