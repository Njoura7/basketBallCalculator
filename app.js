let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let count = 0
let countGuest = 0

function homeAdd1() {
    count += 1
    homeScore.textContent = count
}
function homeAdd2() {
    count += 2
    homeScore.textContent = count
}
function homeAdd3() {
    count += 3
    homeScore.textContent = count
}

function guestAdd1() {
    console.log(guestScore.textContent)
    countGuest += 1
    guestScore.textContent = countGuest
}
function guestAdd2() {
    countGuest += 2
    guestScore.textContent = countGuest
}
function guestAdd3() {
    countGuest += 3
    guestScore.textContent = countGuest
}
function restart() {
    count = 0
    homeScore.textContent = count
    countGuest = 0
    guestScore.textContent = countGuest
}
