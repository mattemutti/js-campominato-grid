
// - Creare un id="container" e stilizzarlo al centro  e richiamiamo in js l'id=container 
// - creare un div dove aggiugeremo le caselle del campo minato
// - creare delle caselle stilizzate in css e assegnamoli una classe

const containerEl = document.getElementById('container'); //dichiaro la variabile associandola al container in html
// console.log(containerEl);
const maxCellsNumber = 101; // dichiariamo una costante con il numero di celle che vogliamo creare
const startPlay = document.getElementById('btn_start');
let countmovesOk;

let numbMushrooms = []; // dichiaro un array vuoto

let boxElements = [];

startPlay.addEventListener('click', function () {

	// cancelliamo un eventuale partita già iniziata
	// bisogna cancellare eventuali div con class="box" in pagina

	containerEl.innerHTML = ""

	// Creo e controllo 16 numeri randomici diversi che fungeranno da funghi

	let numbArray = true // variabile di fine ciclo while
	
	numbMushrooms = [];
	// console.log(numbArray, numbMushrooms, i);

	while (numbArray) {

		let numbRand = randomNumber(1, 100);

		if (cercaInArray(numbMushrooms, numbRand) == true) {
			numbMushrooms.push(numbRand);
		}

		if (numbMushrooms.length >= 16) {
			numbArray = false
		}

	}

	console.log(numbMushrooms);

	// - richiamiamo da js il container e gli aggiungiamo al suo interno 100 div con la classe .box stilizzata in css
	// - ogni div dovrà essere numerato progressivamente con un ciclo for, lo stesso che creerà i div.

	for (let i = 1; i < maxCellsNumber; i++) {

		const markUp = `<div class="box">${i}</div>` // dichiariamo la variabile con l'oggetto html che vogliamo aggiungere e all'interno il numero corrispondente
		containerEl.insertAdjacentHTML('beforeend', markUp) //ogni volta che cicla crea un markUp al .containerprima della fine

	}

	// - creare una regola css che colora il background della cella di azzurro quando clicchiamo dulla casella e
	// dia in console log il numero della casella cliccata
	// - quando clicchiamo sulla cella, questa dovrà colorarsi di azzuro e stampare il numero corrispondente in console

	boxElements = document.getElementsByClassName('box')
	// console.log(boxEl);

	countmovesOk = 0 // RESET variabile che conta le volte che l'utente clicca su una casella

	for (let i = 0; i < boxElements.length; i++) {
		const element = boxElements[i];
		//console.log(element);


		element.addEventListener('click', chechWinLose)
	}		
})

function chechWinLose(event) {
	let element = event.target;

	// numero della casella
	let numClickUser = Number(element.innerHTML)
	
	// controllo del numero cliccato dall'utente con il numero scelto randomico e do una variabile booleana
	let checkNumChoiceUser = cercaInArray(numbMushrooms, numClickUser)
	
	// Controlli variabili
	//console.log("cliccato");
	//console.log("numero cella cliccat adall'utente", numClickUser, typeof numClickUser); // numero cella cliccata dall'utente
	//console.log("Il numero è presente nell'array dei numeri random?", checkNumChoiceUser, typeof checkNumChoiceUser); // condizione se il numero selezionato dall'utente è presente nell'array
	//console.log("array con numeri random", numbMushrooms, typeof numbMushrooms);//array con numeri random
	
	// se il numero cliccato dall'utente è presente nel array
	if (checkNumChoiceUser === false) {
		
		console.log("hai perso");
		
		element.style.backgroundColor = 'red'
		element.innerHTML = "🍄"
		console.log("Loser");
		
	
		//element.removeEventListener('click',chechWinLose)
		stopClick();
		
		alert(`Il tuo punteggio è: ${countmovesOk}`);
	} else {
		
		element.style.backgroundColor = 'blue'
		countmovesOk++
		console.log(countmovesOk);
		//element.removeEventListener('click',chechWinLose)
	
	}
}
	
	
	
	/*
	function chechWinLose() {
		
		const boxElements = document.getElementsByClassName('box')

} */

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


/**
 * Funzione che controlla se il valore è all'interno dell'array
 * @param {number} l_array 
 * @param {number} il_valore 
 * @returns {boolean}
 */
function cercaInArray(l_array, il_valore) {
	let flagTrovatoOno = true;
	for (i = 0; i < l_array.length; i++) {
		if (l_array[i] == il_valore) {
			flagTrovatoOno = false; // aggiorno il flag se ho trovato il valore cercato
		}
	}
	// altrimenti non faccio nulla, e rimane false, perche' non ho trovato quello che mi serviva
	return flagTrovatoOno;
}




function stopClick() {	
	console.log(boxElements);
	for (let i = 0; i < boxElements.length; i++) {
		const element = boxElements[i];
		//console.log(element);

		element.removeEventListener('click', chechWinLose);
	}	
}