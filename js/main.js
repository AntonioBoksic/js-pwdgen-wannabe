// dichiarare variabili
let nome, cognome, colorePreferito;

// chiedi nome utente
nome = prompt ("Inserisci il tuo nome");
console.log(nome);


// chiedi cognome utente
cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// chiedi colore preferito utente
colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);

// genera messaggio da restituire
messaggio = `la tua password è ${nome}${cognome}${colorePreferito}21`;

// scrivi sulla pagina nomecognomecolore21
document.getElementById("mio-id").innerHTML = messaggio;