//snack-4 Chiedi un numero di 4 cifre all’utente e calcola
//la somma di tutte le cifre che compongono il numero.

let num=parseInt(prompt("inserisci un numeri di 4 cifre"));

while(num<1000 || num >9999){
   num=parseInt(prompt("numero non valido , inserisci un numero di 4 cifre"));
}

console.log(`numero = ${num}`);

//sum contiene la somma dei numeri 
let sum=0;

//finche il numero è maggiore di zero continuo a dividerlo per 10 
while(num>0){
    
    //estraggo l'ultima cifra con %10 e la aggiungo al valore di sum 
    sum=sum+num%10;

    //tolgo una cifra al valore iniziale
    num=num/10;

    //elimino la parte decimale
    num=Math.trunc(num);
    

}
console.log(`la somma dei numeri contenuti nel numero che hai inserito è ${sum}`);

