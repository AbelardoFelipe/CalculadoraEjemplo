var Mousetrap = require('mousetrap')

var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonMult = document.getElementById('botonMult')
var botonDiv = document.getElementById('botonDiv')
var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonTres.addEventListener('click', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
botonSeis.addEventListener('click', clickSeis)
botonSiete.addEventListener('click', clickSiete)
botonOcho.addEventListener('click', clickOcho)
botonNueve.addEventListener('click', clickNueve)
botonCero.addEventListener('click', clickCero)

botonSuma.addEventListener('click', clickSuma)
botonResta.addEventListener('click', clickResta)
botonMult.addEventListener('click', clickMult)
botonDiv.addEventListener('click', clickDiv)

Mousetrap.bind('1', clickUno)

function clickUno() {
    actual.innerHTML+='1'
}
function clickDos() {
    actual.innerHTML += '2'
}
function clickSuma() {
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'
}