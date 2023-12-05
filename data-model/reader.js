const fs = require("node:fs");
const fh = fs.openSync("./urxn.csv", "w");

const pokeurl = "https://pokeapi.co/api/v2/pokemon/";
async function writeSome() {
    for (let i = 10001; i <= 10275; i++) {
        const poke = await fetch(pokeurl + i);
        const cp = await poke.json();
        let outstr = `${cp.id};${cp.name};${cp.height};${cp.weight};${cp.base_experience};`;
        outstr += cp.abilities.map((_) => _.ability.name).join("|") + ";";
        outstr += cp.moves.map((_) => _.move.name).join("|") + ";";
        outstr += cp.types.map((_) => _.type.name).join("|") + "\n";
        fs.writeSync(fh, outstr);
    }
    fs.closeSync(fh);
}
writeSome().then((_) => console.log("done"));
