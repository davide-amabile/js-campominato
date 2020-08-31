// // generare 16 numeri random da 1 a 100
  var bomba = numRdnFrom1(1, 10, 5);
  console.log(bomba);

// chiedere all'utente di inserire 16 numeri se il numero è uguale ad un numero random ha perso se no continuare
  // var numUtente = [];
  //
  // var i = 0;
  // while ( i < 5 ) {
  //   var numIns = parseInt(prompt("Inserire un numero");
  //
  //   i++;
  // }




// funzione generare numeri random da 1 a 100 non ripetuti
function numRdnFrom1 (min, max, numRdn) {
  var lista = [];
  var i = 1;
  while ( i <= numRdn) {
  var numRandom =Math.floor(Math.random() * (max - min + 1) ) + min;
  if ( lista.indexOf(numRandom) === -1 ) {
    lista.push(numRandom);
  i++;
  }
}
  return lista;
}
