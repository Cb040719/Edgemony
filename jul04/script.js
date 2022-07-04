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
    let shop = [];

    // shop = [
        // {id: 001, 
        //  name: "Mikintosh", 
        //  price: "1.000.000€",

        //  get productInfo () {
        //     return this.name + this.price
        //  }
        // }, 


        // {id: 002, 
        //  name: "Uauei", 
        //  price:"90€",

        //  get productInfo () {
        //     return this.name + this.price;
        //  }
        // }, 


        let product = {id: 003, 
         name: "TOPPEphone",
         price: "4,99cent",

         get productInfo () {
            return this.name + this.price;
         },

         set productInfo (value) {
            [this.name, this.price] = value.split(" ");
         },
        };
    // ]
    product.productInfo = "gionni 400"
    console.log(product);

    document.getElementById("para1").innerHTML = JSON.stringify(this.product);
})();