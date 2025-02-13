// dichiaro i  valori fissi
const prezzoPerKm = 0.21;
const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
// dichiaro le variabili
let kmUtente = Number(prompt("Quanti km devi percorrere?"));
let etaUtente = Number(prompt("Quanti anni hai?"));
let costoBiglietto = prezzoPerKm * kmUtente;
//utilizzo if per calcolare lo sconto
if (etaUtente < 18) {  // sconto per minorenni
    costoBiglietto -= costoBiglietto * scontoMinorenni; // costoBiglietto = costoBiglietto - (costoBiglietto * scontoMinorenni)
} else if (etaUtente >= 65) {  // sconto per over 65
    costoBiglietto -= costoBiglietto * scontoAnziani; // costoBiglietto = costoBiglietto - (costoBiglietto * scontoAnziani)
}
// stampo il risultato
console.log("Il costo del biglietto è: €" + costoBiglietto.toFixed(2));