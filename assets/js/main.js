

// - Creare un id="container" e stilizzarlo al centro  e richiamiamo in js l'id=container 
// - creare un div dove aggiugeremo le caselle del campo minato
// - creare delle caselle stilizzate in css e assegnamoli una classe

const containerEl = document.getElementById('container'); //dichiaro la variabile associandola al container in html
console.log(containerEl);

const maxCellsNumber = 100; // dichiariamo una costante con il numero di celle che vogliamo creare
const markUp = `<div class="box"></div>` // dichiariamo la variabile con l'oggettoi html che vogliamo aggiungere

// - richiamiamo da js il container e gli aggiungiamo al suo interno 100 div con la classe .box stilizzata in css

for (let i = 0; i < maxCellsNumber; i++) {
	
	containerEl.insertAdjacentHTML('beforeend', markUp)
	
}


// - ogni div dovrà essere numerato progressivamente con un ciclo for, lo stesso che creerà i div.

// - creare una regola css che colora il background della cella di azzurro

// - quando clicchiamo sulla cella, questa dovrà colorarsi di azzuro e stampare il numero corrispondente in console
 