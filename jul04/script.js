(function () { //Esercizio 1

    const obj1 = {
        nome: "Gionni",
        id: "001",
        job: "Spaventapasseri"
    }

    const obj2 = {
        nome2: "Ciro",
        matricola: "002",
        intrallazzo: "Ministro delle Infrastrutture"
    }

    const objMerged = {...obj1, ...obj2};
    console.log(objMerged);
})(); 

(function () { //Esercizio 2
    const bigArray = ["trapano", "precipitevolissimevolmente", "ugo", "mondello", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "grandeCompa"];

    bigArrFiltered = bigArray.filter((element) => {
        return element.length > 10;
    });
    console.log(bigArrFiltered);
})();

(function () { //Esercizio 3
    let shop = [];

    shop = [
        {id: 001, 
         name: "Mikintosh", 
         price: "1.000.000€",

         get productInfo () {
            return this.name + this.price
         },

         set productInfo (value) {
            [this.name, this.price] = value.split(" ");
         }
        }, 

        {id: 002, 
         name: "Uauei", 
         price:"90€",

         get productInfo () {
            return this.name + this.price;
         },

         set productInfo (value) {
            [this.name, this.price] = value.split(" ");
         }
        }, 

        {id: 003, 
         name: "TOPPEphone",
         price: "4,99cent",

         get productInfo () {
            return this.name + " " + this.price;
         },

         set productInfo (value) {
            [this.name, this.price] = value.split(" ");
         }
        }
    ]

    const a = prompt("inserisci valori")
    const b = prompt("inserisci valori")
    const c = prompt("inserisci valori")

    shop[0].productInfo = a
    shop[1].productInfo = b
    shop[2].productInfo = c
    
    console.log(shop);

    document.getElementById("para1").innerHTML = shop[0].productInfo;
    document.getElementById("para2").innerHTML = shop[1].productInfo;
    document.getElementById("para3").innerHTML = shop[2].productInfo;
})();