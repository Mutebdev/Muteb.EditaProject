console.log("procurando elementos")
const displayTempo = document.getElementById("numero-25")
const botaoIniciar = document.getElementById("botao-iniciar")
const botaoPausar = document.getElementById("botao-pausar")
const botaoReiniciar = document.getElementById("botao-reiniciar")



let tempoRestante = 25 * 60
let timerAtivo = false
let intervalo


function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60)
    const segundos1 = segundos % 60
    return `${minutos.toString().padStart(2, "0")}: ${segundos1.toString().padStart(2, "0")}`
}


displayTempo.textContent = formatarTempo(tempoRestante)


function iniciarTimer() {
    if (timerAtivo) {
        return

    }

    timerAtivo = true

    intervalo = setInterval(() => {
        tempoRestante--

        displayTempo.textContent = formatarTempo(tempoRestante)

        if (tempoRestante <= 0) {
            pausarTimer()
        }
    }, 1000)
}

botaoIniciar.addEventListener("click", iniciarTimer)


function pausarTimer() {
    timerAtivo = false

    clearInterval(intervalo)


    if (tempoRestante <= 0) {
        tocarSomAlerta()
    }
}


function tocarSomAlerta() {

    const audio = new Audio()

    const context = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.type = 'sine'
    oscillator.frequency.value = 800
    gainNode.gain.value = 0.3

    oscillator.start()

    setTimeout(() => {
        oscillator.stop()
    }, 1000)

    console.log("🔔 Tempo esgotado!")
}
botaoPausar.addEventListener("click", pausarTimer)


function reiniciarTimer() {
    pausarTimer()

    tempoRestante = 25 * 60

    displayTempo.textContent = formatarTempo(tempoRestante)
}

botaoReiniciar.addEventListener("click", reiniciarTimer)

console.log("Carregou")