let phones = [];
let tablets = [];
let laptops = [];

const phonesQty = parseInt(prompt("phones array lenght"));
const tabletsQty = parseInt(prompt("tablets array lenght"));
const laptopsQty = parseInt(prompt("laptops array lenght"));

// phones item input
for(i=1; i<=phonesQty; i++){
    let aPhone = {};
    aPhone.name = prompt('Inserisci il nome del ' + i + '° cellulare');
    aPhone.ram = prompt("Inserisci la quantità di RAM desiderata");
    aPhone.memoria = prompt("Inserisci la quantità di memoria desiderata");
    aPhone.anno = prompt("Inserisci l'anno di produzione");
    phones.push(aPhone);
    console.log(i + '° cellulare: ' + aPhone);
    console.log(aPhone);
}

// tablets item input
for(i=1; i<=tabletsQty; i++){
    let aTablet = {};
    aTablet.name = prompt('Inserisci il nome del ' + i + '° tablet');
    aTablet.ram = prompt("Inserisci la quantità di RAM desiderata");
    aTablet.memoria = prompt("Inserisci la quantità di memoria desiderata");
    aTablet.anno = prompt("Inserisci l'anno di produzione");
    tablets.push(aTablet);
    console.log(i + '° tablet: ' + aTablet);
    console.log(aTablet);
}

// laptops item input
for(i=1; i<=laptopsQty; i++){
    let aLaptop = {};
    aLaptop.name = prompt('Inserisci il nome del ' + i + '° laptop');
    aLaptop.ram = prompt("Inserisci la quantità di RAM desiderata");
    aLaptop.memoria = prompt("Inserisci la quantità di memoria desiderata");
    aLaptop.anno = prompt("Inserisci l'anno di produzione");
    laptops.push(aLaptop);
    console.log(i + '° laptop: ' + aLaptop);
    console.log(aLaptop);
}