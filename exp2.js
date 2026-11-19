console.log("Start");

setTimeout(() => {
    console.log("Set Timeout");
}, 0);

setImmediate(() => {
    console.log("Set Immediate");
});

process.nextTick(() => {
    console.log("Next Tick");
});

console.log("End");