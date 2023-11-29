let urxn = 42;
async function y() {
    return await new Promise((resolve, reject) => {
        console.log("promise created ...");
        setTimeout(() => {
            console.log("rejecting with Hello World!");
            reject("Hello World!");
        }, 1000);
        setTimeout(() => {
            console.log("resolving whitch what");
            resolve("Hello World! ( what? )");
        }, 2000);
    });
}
// .then((a) => console.log("erstes then / sollte nicht"))
// .catch((err) => {
//     console.log("catch: ", err);
// })
// .then((a) => console.log(`zweites then ${a}`));

async function x() {
    try {
        urxn = await y();
    } catch (err) {
        console.log("catch: ", err, "urxn untouched", urxn);
    }
}
