#Processo Logico


#Const Age - Validazione input
Il valore di age mi aspetto che sia numerico e intero, pertanto nella const age dove richiedo l'età all'utente dovrò assicurarmi di convertirlo in intero utilizzando parseInt()
successivamente tramite IF dovrò verificare se age isNaN (Una chicca potrebbe essere aggiungere un IF in modo tale che se age<16 spunti l'alert di compilare con la presenza di un genitore.)

#Const KM - Validazione input
Per il valore KM potrebbe sia essere un Int che float, pertanto la conversione da stringa a numero la farò per sicurezza utilizzando parseFloat() per evitare che l'utente inserisca un numero float e io converta la stringa con parseInt() tagliando di conseguenza il valore. Sempre con un istruzione condizionale verificherò se KM isNaN().
Posso inoltre implementare un controllo sul numero di KM per verificare che l'utente non imposti valori negativi (banalmente un IF che controlla se KM maggiore di 0)

#Verifica di input parzialmente numerici
Si presenta un potenziale problema : Per entrambi gli input potrei potenzialmente inserire un input parzialmente numerico (123abc) questo renderebbe fin troppo facile "rompere" il programma.
Dovrò quindi implementare un controllo. l'idea è quella di convertire l'input in intero o float tramite parseInt() - parseFloat() e successivamente confrontare l'input numerico con l'input stringa, se sono differenti ciò vuol dire che l'input originale conteneva caratteri non numerici.

#Verifica per valori nulli o vuoti
Dovro inoltre verificare che l'input dell'utente non sia NULL o vuoto...posso utilizzare un istruzione condizionale per verificare se input stringa dell'utente è ===null || input.trim() === "" ed in base a questo, scartare l'input.

#Const prezzoOriginale
Questa variabile mi serve per calcolare il prezzo del biglietto che è KM * 0.21, nel caso in cui non vengano applicati sconti.

#Const TwentyDiscount
Questa formula viene applicata da un istruzione condizionale, nel caso in cui l'utente abbia diritto ad uno sconto del 20%. La formula dovrà essere : prezzoOriginale * (20/100) questo mi consente di calcolare il 20% di prezzoOriginale.

#Const FortyDiscount
Questa formula viene applicata da un istruzione condizionale, nel caso in cui l'utente abbia diritto ad uno sconto del 40%. La formula dovrà essere : prezzoOriginale * (40/100) questo mi consente di calcolare il 40% di prezzoOriginale.

#Output pulito
Per pulire l'output dovrò utilizzare .toFixed(2) in questo specifico caso per arrotondare a 2 cifre decimali il prezzo calcoalto tramite la formula utilizzata


Dopo tutte queste considerazioni, dovrei teoricamente aver creato un programma a prova di proiettile.



