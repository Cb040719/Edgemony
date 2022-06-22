//---------FOREACH-----------//

// Esercizio 1 //
// Eseguire console.log() di ogni elemento di nomi //

const nomi = [
  "ugo",
  "genoveffo",
  "ignazio",
  "marione",
  "tommanuele",
  "mariangelo",
  "eufemio",
  "ghirlando",
];

const itemIndexName = nomi.forEach((element, index, nomi) =>
  console.log(index + " - " + element)
);

// Esercizio 2
// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

const getDelay4Element = (delay) => {
  nomi.forEach((element, index) => {
    delay = 1000 * index;

    setTimeout(() => {
      console.log(index + " - " + element);
    }, delay);
  });
};
// getDelay4Element();

// ------------------------------------------------------------------------------------------ //

//---------FILTER-----------//

// Esercizio 1
// Tenere dentro l'array solo i numeri pari

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const arrery = [10, 1, 2, 5, 6];

const evenNumbas = array.filter((numba) => numba % 2 === 0);
console.log(evenNumbas);

// Esercizio 2
/* Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], 
usare utility come Array.includes oppure Array.indexOf.*/

const commonNumbas = array.filter((numba) => arrery.indexOf(numba) > -1);
console.log(commonNumbas);
