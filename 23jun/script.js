//-----------TIMEOUT-&&-DOM------------
// Esercizio 1
// Stampiamo dopo 1,5,10 secondi l'orario

const getTimeHours = () => {
  document.body.innerHTML = `
  <h1>${new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()}</h1>`;
}; // setInterval(getTimeHours, 1000);

timeOutValues = [5, 10, 15];
const timeSet = timeOutValues.forEach((element) => console.log(getTimeHours));
// const timer = setTimeout(getTimeHours, timeSet);
