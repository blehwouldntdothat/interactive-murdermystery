let currentPuzzle = null;

function populateSelectors(puzzle) {
    const sSel = document.getElementById("guessSuspect");
    const wSel = document.getElementById("guessWeapon");
    const lSel = document.getElementById("guessLocation");
    const mSel = document.getElementById("guessMotive");

    sSel.innerHTML = "";
    wSel.innerHTML = "";
    lSel.innerHTML = "";
    mSel.innerHTML = "";

    puzzle.pool.suspects.forEach(s => {
        sSel.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    });
    puzzle.pool.weapons.forEach(w => {
        wSel.innerHTML += `<option value="${w.id}">${w.name}</option>`;
    });
    puzzle.pool.locations.forEach(l => {
        lSel.innerHTML += `<option value="${l.id}">${l.name}</option>`;
    });
    puzzle.pool.motives.forEach(m => {
        mSel.innerHTML += `<option value="${m.id}">${m.name}</option>`;
    });
}

function renderPuzzle(puzzle) {
    currentPuzzle = puzzle;

    const cluesDiv = document.getElementById("clues");
    const statementsDiv = document.getElementById("statements");

    cluesDiv.innerHTML = "";
    statementsDiv.innerHTML = "";

    const clues = buildClues(puzzle);
    const statements = buildStatements(puzzle);

    clues.forEach(c => {
        cluesDiv.innerHTML += `<p>${c}</p>`;
    });

    puzzle.pool.suspects.forEach(s => {
        const text = statements[s.id];
        statementsDiv.innerHTML += `<p><strong>${s.name}:</strong> ${text}</p>`;
    });

    populateSelectors(puzzle);
}

function submitGuess() {
    if (!currentPuzzle) return;

    const s = document.getElementById("guessSuspect").value;
    const w = document.getElementById("guessWeapon").value;
    const l = document.getElementById("guessLocation").value;
    const m = document.getElementById("guessMotive").value;

    const resDiv = document.getElementById("results");
    resDiv.innerHTML = "";

    resDiv.innerHTML += `<p>Suspect: ${s === currentPuzzle.killer.id ? "✔️ Correct" : "❌ Wrong"}</p>`;
    resDiv.innerHTML += `<p>Weapon: ${w === currentPuzzle.weapon.id ? "✔️ Correct" : "❌ Wrong"}</p>`;
    resDiv.innerHTML += `<p>Location: ${l === currentPuzzle.location.id ? "✔️ Correct" : "❌ Wrong"}</p>`;
    resDiv.innerHTML += `<p>Motive: ${m === currentPuzzle.motive.id ? "✔️ Correct" : "❌ Wrong"}</p>`;
}

document.getElementById("randomBtn").onclick = () => {
    renderPuzzle(generateRandomPuzzle());
};

document.getElementById("presetBtn").onclick = () => {
    renderPuzzle(presetPuzzle);
};

document.getElementById("submitGuess").onclick = submitGuess;
