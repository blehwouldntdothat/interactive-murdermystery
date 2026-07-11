let currentPuzzle = null;

function getById(id, arr) {
    return arr.find(x => x.id === id);
}

function renderClues(puzzle) {
    const killer = getById(puzzle.killer, suspects);
    const weapon = getById(puzzle.weapon, weapons);
    const location = getById(puzzle.location, locations);
    const motive = getById(puzzle.motive, motives);

    let output = "";

    clueTemplates.forEach(template => {
        output += `<p>${template(killer, motive, weapon, location)}</p>`;
    });

    document.getElementById("clues").innerHTML = output;
}

function renderStatements(puzzle) {
    let output = "";

    suspects.forEach(s => {
        const isKiller = s.id === puzzle.killer;
        const truth = !isKiller;

        output += `<h3>${s.name}</h3>`;

        statements[s.id].forEach(st => {
            output += `<p>${truth ? st : "❌ " + st}</p>`;
        });
    });

    document.getElementById("statements").innerHTML = output;
}

function populateGuessSelectors() {
    const sSel = document.getElementById("guessSuspect");
    const wSel = document.getElementById("guessWeapon");
    const lSel = document.getElementById("guessLocation");
    const mSel = document.getElementById("guessMotive");

    suspects.forEach(s => sSel.innerHTML += `<option value="${s.id}">${s.name}</option>`);
    weapons.forEach(w => wSel.innerHTML += `<option value="${w.id}">${w.name}</option>`);
    locations.forEach(l => lSel.innerHTML += `<option value="${l.id}">${l.name}</option>`);
    motives.forEach(m => mSel.innerHTML += `<option value="${m.id}">${m.name}</option>`);
}

function checkGuess() {
    const s = document.getElementById("guessSuspect").value;
    const w = document.getElementById("guessWeapon").value;
    const l = document.getElementById("guessLocation").value;
    const m = document.getElementById("guessMotive").value;

    let result = "";

    result += `<p>Suspect: ${s === currentPuzzle.killer ? "✔️ Correct" : "❌ Wrong"}</p>`;
    result += `<p>Weapon: ${w === currentPuzzle.weapon ? "✔️ Correct" : "❌ Wrong"}</p>`;
    result += `<p>Location: ${l === currentPuzzle.location ? "✔️ Correct" : "❌ Wrong"}</p>`;
    result += `<p>Motive: ${m === currentPuzzle.motive ? "✔️ Correct" : "❌ Wrong"}</p>`;

    document.getElementById("results").innerHTML = result;
}

document.getElementById("randomBtn").onclick = () => {
    currentPuzzle = generateRandomPuzzle();
    renderClues(currentPuzzle);
    renderStatements(currentPuzzle);
};

document.getElementById("presetBtn").onclick = () => {
    currentPuzzle = presetPuzzles[0];
    renderClues(currentPuzzle);
    renderStatements(currentPuzzle);
};

document.getElementById("submitGuess").onclick = checkGuess;

populateGuessSelectors();
