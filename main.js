// dichiaro i  valori fissi
const prezzoPerKm = 0.21;
const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
// dichiaro le variabili
let kmUtente = Number(prompt("Quanti km devi percorrere?"));
let etaUtente = Number(prompt("Quanti anni hai?"));
let costoBiglietto = prezzoPerKm * kmUtente;