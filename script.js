let allPokes;
const startURL = "https://pokeapi.co/api/v2/pokemon?limit=";
const fetchLimit = document.getElementById("fetch-limit");
const fetchBtn = document.getElementById("fetch-btn");
const fetchStatus = document.getElementById("fetch-status");
const cancelBtn = document.getElementById("cancel-btn");
let tmp;
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
