//PUSH DI ELEMENTI IN INPUT
//------------------------------------------------------------
// const qty = parseInt(prompt("Specify array length"));
// const array = [];
//
// for(i=0; i<qty; i++){
//     const item = parseInt(prompt("Specify array item"));
//     array.push(item);
// }
// alert('Array display: ' + array);
//------------------------------------------------------------
// function phoneInfo(){
//     console.log(aPhone.ram + " " + aPhone.memoria + " " + aPhone.anno);
// }


// let tablets = [];
// let laptops = [];

// let randomAM = 0;
// let memory = 0;
// let year = 0;


//----WORKING!!----//
let phones = [];

let randomAM = prompt("Inserisci la quantità di RAM desiderata");
let memory = prompt("Inserisci la quantità di memoria desiderata");
let year = prompt("Inserisci l'anno di produzione");

let aPhone = {
    ram: randomAM,
    memoria: memory,
    anno: year
};

console.log(aPhone);
//-----------------//


// let aTablet = {
//     ram: randomAM,
//     memoria: memory,
//     anno: year
// };
// let aLaptop = {
//     ram: randomAM,
//     memoria: memory,
//     anno: year
// };

// const phonesQty = parseInt(prompt("phones array lenght"));
// const tabletsQty = parseInt(prompt("tablets array lenght"));
// const laptopsQty = parseInt(prompt("laptops array lenght"));

//phones item input
// for(i=1; i<=phonesQty; i++){
    // aPhone = prompt('Inserisci il nome del cellulare');
    // phones.push(aPhone);
// }

// tablets item input
// for(i=1; i<=tabletsQty; i++){
//     aTablet = prompt('Inserisci il nome del ' + i + '° tablet');
//     tablets.push(aTablet);
//     randomAM = prompt("Inserisci la quantità di RAM desiderata");
//     memory = prompt("Inserisci la quantità di memoria desiderata");
//     year = prompt("Inserisci l'anno di produzione");
//     console.log(i + '° tablet: ' + aTablet);
// }

//laptops item input
// for(i=1; i<=laptopsQty; i++){
//     aLaptop = prompt('Inserisci il nome del ' + i + '° laptop');
//     laptops.push(aLaptop);
//     randomAM = prompt("Inserisci la quantità di RAM desiderata");
//     memory = prompt("Inserisci la quantità di memoria desiderata");
//     year = prompt("Inserisci l'anno di produzione");
//     console.log(i + '° laptop: ' + aLaptop);
// }



// currently not working
// const choice = prompt("Vuoi che ti vengano mostrati i dispositivi che hai scelto e le relative caratteristiche?")

// switch(choice){
//     case 'si':
//         console.log(aPhone.ram);
//         break;
    
//     case 'no':
//         prompt("ok alla prossima");
// }