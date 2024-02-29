
// - Creare un id="container" e stilizzarlo al centro  e richiamiamo in js l'id=container 
// - creare un div dove aggiugeremo le caselle del campo minato
// - creare delle caselle stilizzate in css e assegnamoli una classe

const containerEl = document.getElementById('container'); //dichiaro la variabile associandola al container in html
// console.log(containerEl);
const maxCellsNumber = 101; // dichiariamo una costante con il numero di celle che vogliamo creare
const startPlay = document.getElementById('btn_start')

startPlay.addEventListener('click', function () {

	// cancelliamo un eventuale partita già iniziata
	// bisogna cancellare eventuali div con class="box" in pagina

	containerEl.innerHTML = ""


	// - richiamiamo da js il container e gli aggiungiamo al suo interno 100 div con la classe .box stilizzata in css
	// - ogni div dovrà essere numerato progressivamente con un ciclo for, lo stesso che creerà i div.

	for (let i = 1; i < maxCellsNumber; i++) {

		const markUp = `<div class="box">${i}</div>` // dichiariamo la variabile con l'oggetto html che vogliamo aggiungere e all'interno il numero corrispondente
		containerEl.insertAdjacentHTML('beforeend', markUp) //ogni volta che cicla crea un markUp al .containerprima della fine

	}

	// - creare una regola css che colora il background della cella di azzurro quando clicchiamo dulla casella e
	// dia in console log il numero della casella cliccata
	// - quando clicchiamo sulla cella, questa dovrà colorarsi di azzuro e stampare il numero corrispondente in console

	const boxElements = document.getElementsByClassName('box')
	// console.log(boxEl);

	for (let i = 0; i < boxElements.length; i++) {
		const element = boxElements[i];
		//console.log(element);

		element.addEventListener('click', function (e) {

			element.style.backgroundColor = 'blue'
			numClickUser = this.innerHTML;					//variabile che contiene il numero di casella cliccata dall'utente
			console.log(numClickUser);

		});
	}
})






// - Creare un'array vuoto


// Funzione per creare un numero randomico da un min e un max
/**
 * crea un numero random da 1 a un numero max
 * @param {number} min numero di partenza
 * @param {number} max numero massimo
 * @returns {number}
*/
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let numbMushrooms = [];
let numbArray = true // variabile di fine ciclo while

console.log(numbMushrooms);

for (let i = 0; i < 15; i++) {
	const element = numbMushrooms[i];
	
	let numbRand = randomNumber(1, 100);
	
	
	if (cercaInArray(numbMushrooms, numbRand) == true) {
		numbMushrooms.push(numbRand);
		 
		
	}
	
	
	
	
	console.log(numbMushrooms);
	
}	






/**
 * Cerca in array un `valore`
 * e restituisci true se trovato, false se non trovato
 * return {boolean} 
*/
function cercaInArray(l_array, il_valore) {
	let flagTrovatoOno = false;
    for (i = 0; i < l_array.lenght; i++) {
        if (l_array[i] != il_valore) {

            flagTrovatoOno = true; // aggiorno il flag se ho trovato il valore cercato
        }
    }  
    // altrimenti non faccio nulla, e rimane false, perche' non ho trovato quello che mi serviva
    return flagTrovatoOno;
}











/*

while (numbArray) {
	console.log("inizio while");
	
	for (let i = 0; i < numbMushrooms.length; i++) {
		const element = numbMushrooms[i];
		console.log(typeof element, element);
		
		
		if (element != numbRand) {
		} 
		
		
	}

	
	
	// if (numbMushrooms.length = 15) {
	// 	numbArray = false;	
	// }

	
}
*/


console.log(numbMushrooms);


// - cicliamo all'interno dei numeri delle celle ed al numero corrispondente inseriamo nella casella un emmoticon con innerHTML

