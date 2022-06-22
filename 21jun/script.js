//Esercizio 1
// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"

const nomi = ["Ugo", "Renato", "Gigi"];

const getIndexNames = (item, index, array) => {
  return index + 1 + " - " + item;
};

//Esercizio 2
//Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso

const getReverseIndex4Names = (_, index, array) => {
  return array.length - 1 - index;
};

//Esercizio 3
//Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario

const getReverseArray = (_, index, array) => {
  const reversedIndex = array.length - 1 - index;
  return array(reversedIndex);
};

console.log(nomi.map(getIndexNames));
console.log(nomi.map(getReverseIndex4Names));
console.log(nomi.map(getReverseArray));
