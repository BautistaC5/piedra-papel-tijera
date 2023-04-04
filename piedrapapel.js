const ROCK = "ROCK"
const PAPER = "PAPER"
const TIJERA = "TIJERA"

const TIE = 0

const WIN = 1

const LOST = 2

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const tijeraBtn = document.getElementById("tijera")

const resultadoText = document.getElementById("startText")

const userImg = document.getElementById("userImg")
const machineImg = document.getElementById("machineImg")

rockBtn.addEventListener("click", () => {
    play(ROCK)
})

paperBtn.addEventListener("click", () => {
    play(PAPER)
})

tijeraBtn.addEventListener("click", () => {
    play(TIJERA)
})

function play(userOption) {
    const machineOption = calcularOpcionMachine()
    const resultado = calcularResultado(userOption, machineOption)

    userImg.src = `img/${userOption}.png`
    machineImg.src = `img/${machineOption}.png`

    switch (resultado) {
        case TIE: 
            resultadoText.innerHTML = "EMPATASTE"
            break

        case WIN:
            resultadoText.innerHTML = "WENA PO DEFTSU GANASTE"
            break
        
        case LOST: 
        resultadoText.innerHTML = "PERDISTE DEFTSU D0WN"
            break
    }


}


function calcularResultado (userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE

    } else if (userOption === ROCK) {
        
        if (machineOption === PAPER) return LOST
        if (machineOption === TIJERA) return WIN

    } else if (userOption === PAPER) {

        if (machineOption === TIJERA) return LOST
        if (machineOption === ROCK) return WIN

    } else if (userOption === TIJERA) {

        if (machineOption === ROCK) return LOST
        if (machineOption === PAPER) return WIN

    }
}

function calcularOpcionMachine() {
    const number = Math.floor(Math.random() * 3)

    switch (number) {
        case 0:
            return "ROCK"
        
        case 1: 
            return "PAPER"

        case 2:
            return "TIJERA"
    }
}