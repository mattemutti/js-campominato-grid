

// - Creare un id="container" e stilizzarlo al centro  e richiamiamo in js l'id=container 
// - creare un div dove aggiugeremo le caselle del campo minato
// - creare delle caselle stilizzate in css e assegnamoli una classe

const containerEl = document.getElementById('container'); //dichiaro la variabile associandola al container in html
// console.log(containerEl);
const maxCellsNumber = 101; // dichiariamo una costante con il numero di celle che vogliamo creare
const startPlay = document.getElementById('btn_start')


startPlay.addEventListener('click', function(){
	
	
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
		console.log(element);
	
		element.addEventListener('click', function (e) {
	
			element.style.backgroundColor = 'azure'
			console.log("È stata selezionata la cella:",  element);
			
	
		});
	
	}


	
})


