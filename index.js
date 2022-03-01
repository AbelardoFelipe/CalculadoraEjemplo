var Mousetrap = require('mousetrap')

var operandoa
var operandob
var operacion

function init() {
    var resultado = document.getElementById('resultado')
    var reset = document.getElementById('botonReset')
    var retrocedera = document.getElementById('botonRetroceder')
    var retrocederb = document.getElementById('botonRetroceder')
    var suma = document.getElementById('botonSuma')
    var resta = document.getElementById('botonResta')
    var multiplicación = document.getElementById('botonMult')
    var division = document.getElementById('botonDiv')
    var igual = document.getElementById('botonIgual')
    var uno = document.getElementById('botonUno')
    var dos = document.getElementById('botonDos')
    var tres = document.getElementById('botonTres')
    var cuatro = document.getElementById('botonCuatro')
    var cinco = document.getElementById('botonCinco')
    var seis = document.getElementById('botonSeis')
    var siete = document.getElementById('botonSiete')
    var ocho = document.getElementById('botonOcho')
    var nueve = document.getElementById('botonNueve')
    var cero = document.getElementById('botonCero')

    uno.addEventListener('click', ClickUno)
    dos.addEventListener('click', ClickDos)
    tres.addEventListener('click', ClickTres)
    cuatro.addEventListener('click', ClickCuatro)
    cinco.addEventListener('click', ClickCinco)
    seis.addEventListener('click', ClickSeis)
    siete.addEventListener('click', ClickSiete)
    ocho.addEventListener('click', ClickOcho)
    nueve.addEventListener('click', ClickNueve)
    cero.addEventListener('click', ClickCero)
    suma.addEventListener('click', ClickSuma)
    resta.addEventListener('click', ClickResta)
    multiplicación.addEventListener('click', ClickMultiplicacion)
    division.addEventListener('click', ClickDivision)
    igual.addEventListener('click', ClickIgual)
    reset.addEventListener('click', ClickReset)
    retrocedera.addEventListener('click', ClickRetrocedera)
    retrocederb.addEventListener('click', ClickRetrocederb)

    Mousetrap.bind('1', ClickUno)
    Mousetrap.bind('2', ClickDos)
    Mousetrap.bind('3', ClickTres)
    Mousetrap.bind('4', ClickCuatro)
    Mousetrap.bind('5', ClickCinco)
    Mousetrap.bind('6', ClickSeis)
    Mousetrap.bind('7', ClickSiete)
    Mousetrap.bind('8', ClickOcho)
    Mousetrap.bind('9', ClickNueve)
    Mousetrap.bind('0', ClickCero)
    Mousetrap.bind('+', ClickSuma)
    Mousetrap.bind('-', ClickResta)
    Mousetrap.bind('*', ClickMultiplicacion)
    Mousetrap.bind('/', ClickDivision)
    Mousetrap.bind('enter', ClickIgual)
    Mousetrap.bind('esc', ClickReset)
    Mousetrap.bind('backspace', ClickRetrocedera)
    Mousetrap.bind('backspace', ClickRetrocederb)

    function ClickUno () {
        resultado.innerHTML = resultado.innerHTML + "1"
    }
    function ClickDos(){
        resultado.innerHTML = resultado.innerHTML + "2"
    }
    function ClickTres() {
        resultado.innerHTML = resultado.innerHTML + "3"
    }
    function ClickCuatro() {
        resultado.innerHTML = resultado.innerHTML + "4"
    }
    function ClickCinco() {
        resultado.innerHTML = resultado.innerHTML + "5"
    }
    function ClickSeis() {
        resultado.innerHTML = resultado.innerHTML + "6"
    }
    function ClickSiete() {
        resultado.innerHTML = resultado.innerHTML + "7"
    }
    function ClickOcho() {
        resultado.innerHTML = resultado.innerHTML + "8"
    }
    function ClickNueve() {
        resultado.innerHTML = resultado.innerHTML + "9"
    }
    function ClickCero() {
        resultado.innerHTML = resultado.innerHTML + "0"
    }

    function ClickReset() {
        resetear()
    }
    function ClickRetrocedera() {
        reseteara()
    }
    function ClickRetrocederb() {
        resetearb()
    }

    function ClickSuma() {
        operandoa = resultado.innerHTML
        operacion = "+"
        limpiar()
    }
    function ClickResta() {
        operandoa = resultado.innerHTML
        operacion = "-"
        limpiar()
    }
    function ClickMultiplicacion() {
        operandoa = resultado.innerHTML
        operacion = "*"
        limpiar()
    }
    function ClickDivision() {
        operandoa = resultado.innerHTML
        operacion = "/"
        limpiar()
    }

    function ClickIgual() {
        operandob = resultado.innerHTML
        resolver()
    }
}

function limpiar() {
    resultado.innerHTML = ""
}

function resetear() {
    resultado.innerHTML = ""
    operandoa = 0
    operandob = 0
    operacion = ""
}

function reseteara() {
    resultado.innerHTML = ""
}
function resetearb() {
    resultado.innerHTML = ""
}

function resolver() {
    var res = 0
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob)
                break;
    }
    resetear()
    resultado.innerHTML = res
}