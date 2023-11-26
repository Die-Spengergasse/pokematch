let allPokes;
const startURL = "https://pokeapi.co/api/v2/pokemon?limit=";
const fetchLimit = document.getElementById("fetch-limit");
const fetchBtn = document.getElementById("fetch-btn");
const fetchStatus = document.getElementById("fetch-status");
const cancelBtn = document.getElementById("cancel-btn");
const gridX = document.getElementById("grid-x");
const gridY = document.getElementById("grid-y");
const gritDraw = document.getElementById("grid-draw");
const gridMain = document.getElementById("main-grid");
const gridStatus = document.getElementById("grid-status");

async function fetchAllPokes() {
    allPokes = [];
    let limit = fetchLimit.value;
    let answer;
    let controller, signal;
    do {
        controller = new AbortController();
        signal = controller.signal;
        cancelBtn.controller = controller;
        const response = answer
            ? await fetch(answer.next, { signal })
            : await fetch(startURL + limit, { signal });
        answer = await response.json();
        answer.results.forEach((poke) => {
            allPokes.push(poke);
        });
        // console.log("stored answer", answer.results.length);
        fetchStatus.innerHTML = `Loading... ${allPokes.length} pokemons loaded`;
    } while (answer.next);
}
fetchBtn.addEventListener("click", () => {
    fetchStatus.innerHTML = "Loading...";
    fetchStatus.style.color = "red";
    let startDate = new Date();
    fetchAllPokes()
        .then(() => {
            let timeDiff = new Date() - startDate;
            fetchStatus.innerHTML = `Done: ${allPokes.length} pokemons loaded\nTime: ${timeDiff}ms`;
            fetchStatus.style.removeProperty("color");
        })
        .catch((error) => {
            let timeDiff = new Date() - startDate;
            if (error.name === "AbortError") {
                fetchStatus.innerHTML = `Canceled: ${allPokes.length} pokemons loaded\nTime: ${timeDiff}ms`;
                console.log("Fetch cancelled");
            } else {
                throw error;
            }
        });
});
cancelBtn.addEventListener("click", (e) => {
    e.target.controller.abort();
});
gritDraw.addEventListener("click", () => {
    let x = gridX.value;
    let y = gridY.value;
    let cell, odd;
    gridMain.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridMain.style.gridTemplateRows = `repeat(${y}, 1fr)`;
    while (gridMain.firstChild) {
        gridMain.removeChild(gridMain.firstChild);
    }
    for (let i = 0; i < x * y; i++) {
        cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.innerHTML = i + 1;
        gridMain.appendChild(cell);
    }
    odd = gridMain.childNodes.length % 2 === 0 ? false : true;
    if (odd) {
        gridStatus.innerHTML = `Grid: ${x}x${y} (odd)`;
        gridStatus.style.color = "red";
    } else {
        gridStatus.innerHTML = `Grid: ${x}x${y} (even)`;
        gridStatus.style.removeProperty("color");
    }
});
