//Stampa le potenze di 2 fino a 1000.

console.log("stampo le potenze di 2 fino a 1000");

// creo la variabile che conterrà il risultato delle operazioni
// e la variabile non strettamente necessaria che conta il numero di
// operazioni vengono svolte , cosi da fare da indice per l'utente

let risultato=1;
let counter=0;


while(risultato<1000){
    
    //risultato ora contiene una potenza di 2 
    risultato=risultato*2;
    counter++;
    //con questo if interrompo il ciclo while prima che stampi 1024
    if(risultato>=1000){
        break;
    }
    
    console.log(`2 elevato alla ${counter} = ${risultato}`);
}