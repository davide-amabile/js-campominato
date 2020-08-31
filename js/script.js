// // generare 16 numeri random da 1 a 100
  var bomba = numRdnFrom1(1, 10);
  console.log(bomba);

// chiedere all'utente di inserire 16 numeri se il numero è uguale ad un numero random ha perso se no continuare
// var numUtente = [];
// console.log(numUtente);

for ( i = 0; i < 5; i++) {
  var numUtente = [];
  var numIns = parseInt(prompt("Inserire un numero"));
  if (bomba.indexOf(numUtente) === -1) {
    numUtente.push(numIns);
  } else {
    alert("hai perso!!! numero già iserito");
  }
  console.log(numUtente);
}



// funzione generare numeri random da 1 a 100 non ripetuti
function numRdnFrom1 (min, max) {
  var lista = [];
  var i = 1;
  while ( i <= 5) {
  var numRandom =Math.floor(Math.random() * (max - min + 1) ) + min;
  if ( lista.indexOf(numRandom) === -1 ) {
    lista.push(numRandom);
  i++;
  }
}
  return lista;
}
