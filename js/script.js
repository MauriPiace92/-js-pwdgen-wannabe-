// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito


// Dichiarazione variabili
var nomeUtente= prompt("Ciao, come ti chiami?");

var cognomeUtente= prompt("Il Tuo Cognome?");

var coloreUtente= prompt ('Qual è il tuo colore preferito?');

var yearFinalPwd= 21; //al finale stampa le due cifre finali dell'anno corrente



// Logica del programma
var pwdFinall= nomeUtente + cognomeUtente + coloreUtente + yearFinalPwd;


// Output
document.getElementById("password").innerHTML= pwdFinall;

