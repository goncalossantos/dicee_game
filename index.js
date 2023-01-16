function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function randomizeDice() {
    const p1 = randomIntFromInterval(1, 6)
    const p2 = randomIntFromInterval(1, 6)
    return [p1, p2]
}

function getDiceImageFromNumber(n) {
    return "dice" + n + ".png"
}

function refresh() {
    // Get new values
    [p1, p2] = randomizeDice()

    //Set new images
    document.querySelector("img.img1").setAttribute("src", "images/" + getDiceImageFromNumber(p1))
    document.querySelector("img.img2").setAttribute("src", "images/" + getDiceImageFromNumber(p2))

    // Set Title
    if (p1 > p2) {
        document.querySelector("h1").textContent = "Player 1 Wins!"
    }
    else if (p1 < p2) {
        document.querySelector("h1").textContent = "Player 2 Wins!"
    }
    else {
        document.querySelector("h1").textContent = "Draw!"
    }
}

refresh()