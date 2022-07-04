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

(function () {
    const shop = [];
    const namePrice = () => `${this.name} ${this.price}`

    shop.products = [
        {id: 001, 
         name: "Mikintosh", 
         price: "1.000.000€",

         get productInfo () {
            namePrice();
         }
        }, 


        {id: 002, 
         name: "Uauei", 
         price:"90€",

         get productInfo () {
            namePrice();
         }
        }, 


        {id: 003, 
         name: "TOPPEphone",
         price: "4,99cent",

         get productInfo () {
            namePrice();
         },

         set productInfo (value) {
            [this.name, this.price] = value.split(" ");
         }
        }
    ]
})();