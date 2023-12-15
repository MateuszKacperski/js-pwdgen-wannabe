console.log('JS OK');


//Dichiaro le variabili 
/* le variabili sono tutte let in quanto verranno sovrascritte. 
L'unica const e la stringa con il numero in quanto sarà sempre uguale*/
let firstname= '';
let surname='';
let color='';
let password='';
const number='21';

console.log(firstname, surname, color, password, number);

// Chiedo all'utente i dati da inserire

firstname = prompt('Come ti chiami ?');
console.log(firstname);

surname = prompt("Qual'è il tuo cognome ?");
console.log(surname);

color = prompt("Qual'è il tuo colore preferito ?");
console.log(color);


// Creo la password

password = firstname + surname + color + number;
console.log(password);


