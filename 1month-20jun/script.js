// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4
const a = 0;
const b = 0;

const doSum = (a, b) => a + b;

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

const doBetterSum = (a, b) => {
  a = parseInt(prompt("Primo numero"));
  b = parseInt(prompt("Secondo numero"));

  if (typeof a === "string" && typeof b === "string") {
    console.error("Non hai inserito numeri");
  } else {
    console.log(a + b);
  }
};

// doBetterSum(a, b);

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0

const doBetterSub = (a, b) => {
  a = parseInt(prompt("Primo numero"));
  b = parseInt(prompt("Secondo numero"));

  if (typeof a === "string" && typeof b === "string") {
    console.error("Non hai inserito numeri");
  } else {
    console.log(a - b);
  }
};

const doBetterMult = (a, b) => {
  a = parseInt(prompt("Primo numero"));
  b = parseInt(prompt("Secondo numero"));

  if (typeof a === "string" && typeof b === "string") {
    console.error("Non hai inserito numeri");
  } else {
    console.log(a * b);
  }
};

const doBetterDiv = (a, b) => {
  a = parseInt(prompt("Primo numero"));
  b = parseInt(prompt("Secondo numero"));

  if (typeof a === "string" && typeof b === "string") {
    console.error("Non hai inserito numeri");
  } else if (a === 0 || b === 0) {
    console.error("Non si può dividere per zero (0)");
  } else {
    console.log(a / b);
  }
};

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

const operation = (a, b) => {
  a = parseInt(prompt("Primo numero"));
  b = parseInt(prompt("Secondo numero"));
  operationChoice = prompt("scegli l'operazione [+, -, *, /]");

  if (typeof a === "string" && typeof b === "string") {
    console.error("Non hai inserito numeri");
  } else {
    switch (operationChoice) {
      case "+":
        console.log(a + b);
        break;

      case "-":
        console.log(a - b);
        break;

      case "*":
        console.log(a * b);
        break;

      case "/":
        if (a === 0 || b === 0) {
          console.error("Non si può dividere per zero (0)");
        } else {
          console.log(a / b);
        }
        break;

      default:
        console.log("Operazione non scelta");
    }
  }
};
