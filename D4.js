/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  console.log(areaRettangolo);
}

area(3, 5);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    sum = (n1 + n2) * 3;
  }

  return sum;
};

console.log(crazySum(6, 6));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num) {
  let diff = Math.abs(num - 19);
  if (num > 20) {
    diff = Math.abs(num - 19) * 3;
  }

  return diff;
};

console.log(crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(401));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return (string = "EPICODE " + string);
  }
};

console.log(epify("Sara"));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num) {
  if (num > 0) {
    if (num % 3 === 0 || num % 7 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(check3and7(25));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  // return str.split("").reverse().join("");
  const splitStr = str.split("");
  const revArr = splitStr.reverse();
  const joinArr = revArr.join("");
  return joinArr;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  let words = str.split(" ");
  completeWord = [];
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0);
    const firstUpper = firstLetter.toUpperCase();
    let sliceFirstLetter = words[i].slice(1);
    const upperWord = firstUpper + sliceFirstLetter;
    completeWord.push(upperWord);
  }
  console.log(completeWord.join(" "));
};

upperFirst("ciao paolo");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  const newStr = str.slice(1, -1);
  return newStr;
};

console.log(cutString("Federer"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (num) {
  const myArray = [];
  for (let i = 0; i < num; i++) {
    myArray.push(Math.floor(Math.random() * 11));
  }
  return myArray;
};

console.log(giveMeRandom(7));
