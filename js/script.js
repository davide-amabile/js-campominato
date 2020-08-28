// // generare 16 numeri random da 1 a 16
// for ( var i = 1; i <= 5; i++) {
  var numCpu = numRdnFrom1(1, 2);
  console.log(numCpu);
// }
number = 10;

var controllo = checkNum(numCpu, number );
console.log(controllo)


// funzione generare numeri random da 1

function numRdnFrom1 (min, max) {
  var lista = [];
  for ( var i = 1; i <= 5; i++) {
  var numRandom =Math.floor(Math.random() * (max - min + 1) ) + min;
  lista.push(numRandom);
}
  return lista;
}

// funzione controllo numero
function checkNum (str, num) {
  var lista = str;
  var numero = num;
  var check = lista.includes(numero);
  return check;
}
