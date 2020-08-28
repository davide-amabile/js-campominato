// // generare 16 numeri random da 1 a 16
// for ( var i = 1; i <= 5; i++) {
  var numCpu = numRdnFrom1(1, 100);
  console.log(numCpu);
// }


// funzione generare numeri random da 1

function numRdnFrom1 (min, max) {
  var bomb = [];
  for ( var i = 1; i <= 5; i++) {
  var numRandom =Math.floor(Math.random() * (max - min + 1) ) + min;
  bomba.push(numRandom);
}
  return bomba;
}
