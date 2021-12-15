// snack-2 Stampa il cubo di ciascuno dei primi N numeri, 
// dove N è un numero indicato dall’utente. 
// (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)


 
const N = parseInt(prompt("Inserisci il numero N"));

for(let i=0;i<N;i++){

    let cubo=i*i*i;

    console.log(`il cubo di ${i} è ${cubo}`)
}