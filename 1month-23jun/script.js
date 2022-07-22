//-----------TIMEOUT-&&-DOM------------
// Esercizio 1
// Stampiamo dopo 1,5,10 secondi l'orario

(function () {
  console.clear();

  const getCurrentTime = () => {
    const hours = `${new Date().getHours()}`.padStart(2, "0");
    return `${hours} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
  };
  const logCurrentTime = () => {
    console.log(getCurrentTime());
  };
  [1, 5, 10].forEach((time) => {
    setTimeout(logCurrentTime, 1_000 * time);
  });
})();

//---------------DOM---------------//

const getTimeHTML = () => {
  document.body.innerHTML = `
  <h1>${new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()}</h1>`;
};
setInterval(getTimeHTML, 1000);