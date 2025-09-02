const counterDisplay = document.getElementById("counter");

let count = 0;

document.getElementById("inc").onclick = function() {
    count++;
    document.getElementById("counter").textContent = count;
}

document.getElementById("dec").onclick = function() {
    count--;
    document.getElementById("counter").textContent = count;
}

document.getElementById("res").onclick = function() {
    count = 0;
    document.getElementById("counter").textContent = count;
}