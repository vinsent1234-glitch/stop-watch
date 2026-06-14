// Display element select
const display = document.getElementById("display"); // fix typo

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start the stopwatch
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

// Stop the stopwatch
function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Reset the stopwatch
function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 60000;
    display.textContent = "00:00:00:00";
}

// Update display
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}