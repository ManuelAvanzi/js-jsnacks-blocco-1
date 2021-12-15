// snack-5 Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli 
// nell’array fino a quando la somma degli elementi è minore di 50.


const list=[];

while(list.length<50){

    let element=prompt("inserisci un elemento nella lista");
    
    // questa è la versione "ovvia" con push() 
    // per ora costato che funziona molto bene 
    list.push(element);

    console.log(list);
}




//versione senza push()