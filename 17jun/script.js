let phones = [];
let tablets = [];
let laptops = [];

let aPhone = {};
let aTablet = {};
let aLaptop = {};

const phonesQty = parseInt(prompt("phones array lenght"));
const tabletsQty = parseInt(prompt("tablets array lenght"));
const laptopsQty = parseInt(prompt("laptops array lenght"));

// phones item input
for(i=1; i<=phonesQty; i++){
    aPhone.name = prompt('Inserisci il nome del ' + i + '° cellulare');
    aPhone.ram = prompt("Inserisci la quantità di RAM desiderata");
    aPhone.memoria = prompt("Inserisci la quantità di memoria desiderata");
    aPhone.anno = prompt("Inserisci l'anno di produzione");
    phones.push(aPhone);
    console.log(i + '° cellulare: ' + aPhone);
}

// tablets item input
for(i=1; i<=tabletsQty; i++){
    aTablet.name = prompt('Inserisci il nome del ' + i + '° tablet');
    aTablet.ram = prompt("Inserisci la quantità di RAM desiderata");
    aTablet.memoria = prompt("Inserisci la quantità di memoria desiderata");
    aTablet.anno = prompt("Inserisci l'anno di produzione");
    tablets.push(aTablet);
    console.log(i + '° tablet: ' + aTablet);
}

// laptops item input
for(i=1; i<=laptopsQty; i++){
    aLaptop.name = prompt('Inserisci il nome del ' + i + '° laptop');
    aLaptop.ram = prompt("Inserisci la quantità di RAM desiderata");
    aLaptop.memoria = prompt("Inserisci la quantità di memoria desiderata");
    aLaptop.anno = prompt("Inserisci l'anno di produzione");
    laptops.push(aLaptop);
    console.log(i + '° laptop: ' + aLaptop);
}
const choice = prompt("Vuoi che ti vengano mostrati i dispositivi che hai scelto e le relative caratteristiche?")

switch(choice){
    case 'si':
        console.log(aPhone);
        console.log(aTablet);
        console.log(aLaptop);
        break;
    
    case 'no':
        prompt("ok alla prossima");
}