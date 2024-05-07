import "./style.css";

("use strict");

const km = prompt("Quanti KM vuoi percorrere?");
const age = prompt("Quanti anni hai?");
const kmNumeric = parseFloat(km); 
const ageNumeric = parseInt(age); 

if (isNaN(kmNumeric) || isNaN(ageNumeric)) {
  console.log("Inserisci valori numerici validi per KM e per l'età.");
} else {
  const pricePerKm = 0.21;
  const formula = kmNumeric * pricePerKm;

  if (ageNumeric < 18) {
    const discount = (formula * 20) / 100;
    const discountedPrice = formula - discount;
    console.log(
      `Hai diritto ad uno sconto del 20%, il prezzo originale è di ${formula.toFixed(2)}€ ma tu pagherai solamente ${discountedPrice.toFixed(2)}€`,
    );
  } else if (ageNumeric >= 65) {
    const discount = (formula * 40) / 100;
    const discountedPrice = formula - discount;
    console.log(
      `Hai diritto ad uno sconto del 40%, il prezzo originale è di ${formula.toFixed(2)}€ ma tu pagherai solamente ${discountedPrice.toFixed(2)}€`,
    );
  } else {
    console.log(
      `Non hai diritto a nessuno sconto, il prezzo totale è di ${formula.toFixed(2)}€`,
    );
  }
}
