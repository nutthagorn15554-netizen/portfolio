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