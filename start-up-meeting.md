# Open Friday - RN App

-----
**POC**

Lista delle pagine

- Creazione match
- Lista match in corso
- Lista match conclusi
- Singolo match in corso
- Singolo match concluso
- Classifica

## Inizializzazione Match
Invito gli utenti a giocare, chi ha già la app comparirà in un autocomplete, altrimenti mando la mail per scaricare la app

Si può settare il tempo massimo dello sparo 5h, 7h, 24h, il server poi decidere un orario random entro a questo tempo.

## Match
Il match si apre con una schermata di tutti i concorrenti e poi zooma sul singolo giocatore che in quel momento è sotto tiro.
Il match a una durata che può variare da pochi minuti al tempo massimo impostato in fase di startup.

TODO: capire se fare una sorta di conto alla rovesci e quando si arriva a zero il gioco finisce oppure l'orario stabilito non è conosciuto dai giocatori, è conosciuta solo una forbice. Potrebbero anche essere due versioni del gioco diverse da decidere in fase di startup

Ogni giocatore corrisponde a un utente loggato, ci potrebbe essere la possibilità di avere utenti fake se non si raggiunge un minimo di partecipanti, ma sarà da valutare in fase di startup.

Il giocatore sotto tiro deve cambiare il tiro facendo swipe da un giocatore all'altro, mettendo così sotto tiro un altro giocatore.

Il giocatore che sarà sotto tiro nel momento dello sparo sarà il giocatore perdente.
Lo sparo fa finire la partita 

## Match concluso
Nel momento in cui la partita finisce ci potrebbe essere la schermata con l'utente morto e delle statistiche base sulla partita, quante persone hanno partecipato, chi ha fatto più mosse, chi è stato messo sotto target più volte etc etc.

## Finito il match
Ci sarà la classifica totale delle morti, delle giocate etc

## Skin / Design
Creazione di skin personalizzate, country, fantasy, fiorellini, porno.
