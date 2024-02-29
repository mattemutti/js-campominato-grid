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

-----------------------------------------------------------------------------------------


## Parte 2

# 1 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.


- Creare un'array vuoto
- Con un ciclo generiamo tramite Math.random, 16 numeri (min 1 max 16) che però devono essere diversi tra loro e li salviamo pushandoli  all'interno dell'array

- cicliamo all'interno dei numeri delle celle ed al numero corrispondente inseriamo nella casella un emmoticon con innerHTML



# 2
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

- quando l'utenet clicca su una cella dobbiamo capire se in quella cella c'è il fungo allora la partita è finita,
	- messaagio di fine e numero contatore delle celle già cliccate mostrato all'utente
- altrimenti incrementa una variabile che conterrà il numero delle celle cliccate






# 3
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

- quabdo clicca sul fungo perde al passaggio 2
- se il contatore è uguale a 100-16 allora l'utente ha vinto, (possi inserirlo nella condiozioe di controllo al punto 2)


BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



_______ steps Fabio

# Milestone 1
// Generare massimo 16 funghi in questi range relativi al livello scelto // 100 -> min: 1 max: 100 | Totale funghi 16 // 81 -> min: 1 max: 81 | Totale funghi 16 // 49 -> min: 1 max: 49 | Totale funghi 16

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

Steps

create a random numbers function to generate a number between a min and max (using the range 1-100 | 1-81 | 1-49)
create an empty mushroomsArray

(while) loop over until the empty array has 16 elements (not repeated)
check if the generated random number is included in the mushroomsArray
if not push it inside the array

ripete il ciclo finché l'array vuoto non ha 16 elementi (non ripetuti)
controlla se il numero casuale generato è incluso nell'array
in caso contrario spingerlo all'interno dell'array



# Milestone 2
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una fungo - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

Steps

read the number of the clicked cell
check if the clicked cell's number is included inside the mushrooms array
IF true
paint the cell to red
end the game console.log('end game')
ELSE
paint the cell to blue
Milestone 3
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

Steps

keep the count of the clicked cells
end the game
quando il numbero di celle cliccate é uguale al numero di celle totali meno il numero dei funghi hai vinto il gioco.
prevent the user from clicking again after the game is over
