
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
const numbMushrooms = [];
console.log(numbMushrooms);
// - Con un ciclo generiamo tramite Math.random, 16 numeri (min 1 max 16) che però devono essere diversi tra loro e li salviamo pushandoli  all'interno dell'array

console.log();
/**
 * crea un numero random da 1 a max
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


/*
for (let i = 0; i < 16; i++) {
	const element = numbMushrooms[i];
	console.log(element);

	 // calcolo un numero randomico e lo inserisco nell'array
	
}
*/

let numbArray = true

while (numbArray) {
	
	let numbRand = randomNumber(1, 16);

	if (numbRand != numbMushrooms && numbMushrooms.length <= 15) {
		numbMushrooms.push(numbRand);
	} else {

		numbArray = false;
	}

}

console.log(numbMushrooms);


// - cicliamo all'interno dei numeri delle celle ed al numero corrispondente inseriamo nella casella un emmoticon con innerHTML



for (let i = 0; i < numbMushrooms.length; i++) {
	const element = numbMushrooms[i];

	console.log(element);
	if (element != ) {
		
	}
	
}