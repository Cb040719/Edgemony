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

let phones = [];
let tablets = [];
let laptops = [];

let randomAM = "";
let memory = "";
let year = "";

let aPhone = {
    ram: randomAM,
    memoria: memory,
    anno: year
};
let aTablet = {
    ram: randomAM,
    memoria: memory,
    anno: year
};
let aLaptop = {
    ram: randomAM,
    memoria: memory,
    anno: year
};

const phonesQty = parseInt(prompt("phones array lenght"));

//phones item input
for(i=1; i<=phonesQty; i++){
    aPhone = prompt('Inserisci il nome del ' + i + '° cellulare');
    phones.push(aPhone);
    randomAM = prompt("Inserisci la quantità di RAM desiderata");
    memory = prompt("Inserisci la quantità di memoria desiderata");
    year = prompt("Inserisci l'anno di produzione");
    console.log(i + '° cellulare: ' + aPhone);
}

// tablets item input
for(i=1; i<=tabletsQty; i++){
    aTablet = prompt('Inserisci il nome del ' + i + '° tablet');
    tablets.push(aTablet);
    randomAM = prompt("Inserisci la quantità di RAM desiderata");
    memory = prompt("Inserisci la quantità di memoria desiderata");
    year = prompt("Inserisci l'anno di produzione");
    console.log(i + '° tablet: ' + aTablet);
}

//laptops item input
for(i=1; i<=laptopsQty; i++){
    aLaptop = prompt('Inserisci il nome del ' + i + '° laptop');
    laptops.push(aLaptop);
    randomAM = prompt("Inserisci la quantità di RAM desiderata");
    memory = prompt("Inserisci la quantità di memoria desiderata");
    year = prompt("Inserisci l'anno di produzione");
    console.log(i + '° laptop: ' + aLaptop);
}

// currently not working
const choice = prompt("Vuoi che ti vengano mostrati i dispositivi che hai scelto e le relative caratteristiche?")

switch(choice){
    case 'si':
        console.log(Object.values(aPhone))
        break;
    
    case 'no':
        prompt("ok alla prossima");
}