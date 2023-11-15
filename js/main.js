/*************** 
    CODE MINEFIELD GRID
***************/

const playBtn = document.querySelector('#btn-play'); //dichiarazione variabile per indicare il bottone di play
//console.log('Tasto di play:', playBtn);
const delateBtn = document.querySelector('#btn-delate'); //dichiarazione variabile per indicare il bottone di annulla
//console.log('Tasto di annulla:', delateBtn);

playBtn.addEventListener('click', function(){ //dichiarazione per indicare la funzione di click sul bottone
    //console.log('Tasto premuto!');
    gridCreate(); //richiamo la funzione della creazione del game-board
})

delateBtn.addEventListener('click', function(){
    //console.log('Tasto premuto!');
    window.location.reload(); //funzione che ricarica la pagina HTML
})

/*
* Funzione per indicare la selezione
* del livello
*/

function getLevel(){
    const level = document.querySelector('#get-level').value; //dichiarazione variabile per indicare il livello scelto
    //console.log('Valore:', level);
    
    return level;
}

/*
* Funzione per indicare la creazione
* della cella
*/

function cellsCreate(){
    const cell = document.createElement('div'); //dichiarazione variabile che crea un <div></div>
    //console.log('Creazione div:', cell);
    cell.classList.add('cell'); //aggiunge all'elemento cella la classe: cell

    return cell;
}

/*
* Funzione per indicare la creazione
* delle griglie
*/

function gridCreate(){
    const grid = document.querySelector('#game-board'); //dichiarazione variabile per indicare la game-board
    //console.log('Griglia:', grid);
    const level = getLevel(); //dichiarazione variabile che riprende la funzione
    //console.log('Livello scelto:', level);
    let gridDimension = [ //dichiarazione array per indicare le celle presenti all'interno del game-board
        100,
        81,
        49
    ];
    //console.log('Dimensioni game-boards:', gridDimension);
    let totalCells = gridDimension[level - 1];
    //console.log('Celle totali:', totalCells);
    let rowCells = Math.sqrt(totalCells); //radice quadrata di un numero nell'array
    //console.log('Radice quadrata:', rowCells);

    /*
    * Ciclo for per la creazione delle celle
    * all'interno della griglia
    */

    for(let i = 0; i < totalCells; i++){
        let cell = cellsCreate(i); //dichiarazione variabile che dipende dalla funzione
        //console.log('Celle create:', cell);
        cell.style.width = `calc(100% / ${rowCells})`; //modifichiamo la grandezza delle celle
        cell.style.height = `calc(100% / ${rowCells})`; //modifichiamo l'altezza delle celle
        grid.appendChild(cell);
    }
}

