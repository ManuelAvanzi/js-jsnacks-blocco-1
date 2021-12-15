
// SNACK-1 Il software deve chiedere per 10 volte
// all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti



let number=0;
let sum=0;

for(let i=1;i<=10;i++){
 
    //parse int per evitare di lavorare su una stringa 
    number=parseInt(prompt(`inserisci il ${i}° numero ; `));

    //aggiungo a sum il nuovo valore di number
    sum+=number;
}


console.log(`la somma dei 10 numeri inseriti è ${sum}`);