# Processo Logico

## Const Age - Validazione input
- **Aspettativa**: Il valore di `age` deve essere numerico e intero.
- **Implementazione**: Utilizzo di `parseInt()` per convertire l'età dell'utente in un intero.
- **Controllo**: Uso di `if` per verificare se `age` è `isNaN`. Aggiungo un controllo per mostrare un alert se `age < 16`, richiedendo la presenza di un genitore.

## Const KM - Validazione input
- **Aspettativa**: Il valore per KM può essere sia intero che float.
- **Implementazione**: Conversione dell'input da stringa a numero usando `parseFloat()`, evitando problemi se l'utente inserisce un numero float.
- **Controllo**: Verifico tramite `if` se `KM` è `isNaN` e se il valore è positivo (KM > 0).

## Verifica di input parzialmente numerici
- **Problema**: Input come "123abc" possono causare errori.
- **Soluzione**: Convertire l'input in intero o float e confrontare il risultato con l'input originale. Se differiscono, significa che l'input originale conteneva caratteri non numerici.

## Verifica per valori nulli o vuoti
- **Implementazione**: Controllo se l'input dell'utente è `null` o vuoto (`input.trim() === ""`) usando un'istruzione condizionale.

## Verifica valori troppo alti (es: KM = 99999999 o Età = 929121)

## Const prezzoOriginale
- **Uso**: Serve per calcolare il prezzo del biglietto basato su `KM * 0.21`, in assenza di sconti.

## Const TwentyDiscount
- **Formula**: Applicata da un'istruzione condizionale se l'utente ha diritto ad uno sconto del 20%. Utilizzo di `prezzoOriginale * (20/100)` per calcolare il 20% di sconto su `prezzoOriginale`.

## Const FortyDiscount
- **Formula**: Applicata da un'istruzione condizionale se l'utente ha diritto ad uno sconto del 40%. Utilizzo di `prezzoOriginale * (40/100)` per calcolare il 40% di sconto su `prezzoOriginale`.

## Output pulito
- **Metodo**: Uso di `.toFixed(2)` per arrotondare il prezzo a due cifre decimali.

Dopo tutte queste considerazioni, il programma dovrebbe essere a prova di proiettile.
