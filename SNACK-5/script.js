// snack-5 Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli 
// nell’array fino a quando la somma degli elementi è minore di 50.


const list=[];
let sum=0;
while(list.length<50 && sum<=50){

    let element=parseInt(prompt("inserisci un numero nella lista"));
    sum+=element;

    list.push(element);

}
console.log(list);
console.log(`la somma dei numeri è ${sum}`);



