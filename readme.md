# Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

# tools

- const/let 
- for/while
- getElementById/querySelection
- getEventListener()
-  classlist().add


# Pseudo codice

- Creare un id="container" e stilizzarlo al centro
- creare un div dove aggiugeremo le caselle del campo minato
- creare delle caselle stilizzate in css e assegnamoli una classe
- richiamiamo da js il container e gli aggiungiamo al suo interno 100 div con quella classe
- ogni div dovrà essere numerato progressivamente con un ciclo for, lo stesso che creerà i div.
- creare una regola css che colora il background della cella di azzurro
- quando clicchiamo sulla cella, questa dovrà colorarsi di azzuro e stampare il numero corrispondente in console


# Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

# Consigli del giorno:

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

