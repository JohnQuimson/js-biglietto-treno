'use strict';

//DICHIARAZIONI
const prezzoKilometro = 0.21;

const kilometri = parseInt(prompt('Distanza in km: '));
console.log(kilometri);

const eta = parseInt(prompt('Età del passeggero: '));
console.log(eta);

//Calcolo prezzo
const prezzo = prezzoKilometro * kilometri;
console.log('Prezzo: ' + prezzo + '€');
