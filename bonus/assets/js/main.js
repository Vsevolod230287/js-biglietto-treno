var km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));

// Calcoliamo il costo in base ai chilometri
var distanzaEuro = km * 0.21;

if(isNaN(eta) || isNaN(km)) {
  prompt("Reinserisci i campi correttamante");
}else if (eta < 18) {  // Veddiamo se l'età entra nelle casistiche di sconto e stampiamo il risultato;
  prezzoMinorenni = distanzaEuro - (distanzaEuro * 0.2);   // sconto minorenni di 20%
  document.getElementById("costoBiglietto").innerHTML = "Il prezzo del biglietto è: " + prezzoMinorenni.toFixed(2) + " euro.";
} else if (eta > 65) {
  prezzoOver65 = distanzaEuro - (distanzaEuro * 0.4); // sconto over 65 di 40%
  document.getElementById("costoBiglietto").innerHTML = "Il prezzo del biglietto è: " + prezzoOver65.toFixed(2) + " euro.";
} else {
  document.getElementById("costoBiglietto").innerHTML = "Il prezzo del biglietto è: " + distanzaEuro.toFixed(2) + " euro.";
}
