const open1 = document.getElementById("openModal1");
const open2 = document.getElementById("openModal2");
const open3 = document.getElementById("openModal3");
const open4 = document.getElementById("openModal4");
const open5 = document.getElementById("openModal5");
const open6 = document.getElementById("openModal6");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");

open1.onclick = () => modal1.classList.add("open");
open2.onclick = () => modal2.classList.add("open");
open3.onclick = () => modal3.classList.add("open");
open4.onclick = () => modal4.classList.add("open");
open5.onclick = () => modal5.classList.add("open");
open6.onclick = () => modal6.classList.add("open");

document.querySelectorAll(".modal").forEach(m => {
    m.onclick = () => m.classList.remove("open");
});


function UserInput() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)
}

function RandomComputerInput() {
    computerInput = Math.floor((Math.random() * 100) % 3)
    console.log(computerInput)

}

function CompareUserAndComputerInput() {
    if (userInput == computerInput) {
        console.log("Draw")
    } else if (userInput == 0 && computerInput == 2) {
        // USER: ROCK
        // COMPUTER: SCISSOR
        console.log("User wins")
    } else if (userInput == 1 && computerInput == 0) {
        // USER: PAPER
        // COMPUTER: ROCK
        console.log("User wins")
    } else if (userInput == 2 && computerInput == 1) {
        // USER: SCISSOR
        // COMPUTER: PAPER
        console.log("User wins")
    } else {
        console.log("Computer wins")
    }

}

function Readname() {
    focustext = document.getElementById("focus-text").value
    text1 = document.getElementById("nameR")
    console.log(focustext)
    text1.innerText = "complete"
    
}

function PlayGame() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)

    computerInput = Math.floor((Math.random() * 100) % 3)
    console.log(computerInput)

    text = document.getElementById("result")
    text2 = document.getElementById("bot")

    if (userInput == computerInput) {
        console.log("Draw")
        text2.innerText = ("Bot choose "+computerInput)
        text.innerText = "Draw"
    } else if (userInput == 0 && computerInput == 2) {
        // USER: ROCK
        // COMPUTER: SCISSOR
        console.log("User wins")
        text2.innerText = ("Bot choose "+computerInput)
        text.innerText = (focustext+" wins")
    } else if (userInput == 1 && computerInput == 0) {
        // USER: PAPER
        // COMPUTER: ROCK
        console.log("User wins")
        text2.innerText = ("Bot choose "+computerInput)
        text.innerText = (focustext+" wins")
    } else if (userInput == 2 && computerInput == 1) {
        // USER: SCISSOR
        // COMPUTER: PAPER
        console.log("User wins")
        text2.innerText = ("Bot choose "+computerInput)
        text.innerText = (focustext+" wins")
    } else {
        console.log("Computer wins")
        text2.innerText = ("Bot choose "+computerInput)
        text.innerText = (focustext+" lose")
    }

}

