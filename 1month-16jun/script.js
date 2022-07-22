function sum(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b; 
}

function division(a, b){
    return a / b;
}


const nNumbers = prompt("Su quanti numeri vuoi eseguire l'operazione?");
const parse_nNumbers = parseInt(nNumbers);

let aNumber = [];


for(i=0; i<nNumbers; i++){
    const getPromptValue = prompt("Inserisci un numero.");
    aNumber.push(parseInt(getPromptValue));
    console.log(getPromptValue, aNumber);
}


    const Operation = prompt("Scegli l'operazione desiderata");
    
    
    
    
    

    switch(Operation) {
        case "+":
            for(i=0; i<nNumbers; i++){ 
                let summa = aNumber[0];
                aNumber[0] = 0;
                summa = sum(summa, aNumber[i]);
                console.log(summa);
            }
            
            break;
        case "-":
            for(i=0; i<nNumbers; i++){
                let sub = aNumber[0];
                aNumber[0] = 0;
                sub = subtraction(sub, aNumber[i]);
                console.log(sub);
            }
            break;
        //not working
        // case "*":
        //     for(i=0; i<nNumbers; i++){
        //         let mult = 1;
        //         mult = multiplication(mult, aNumber[i]);
        //         console.log(mult);
        //     }
        //     break;
        
        // case "/":
        //     for(i=0; i<=nNumbers; i++){
        //         let fract = aNumber[0];
        //         fract = division(fract, aNumber[i]);
        //         console.log(fract);
        //     }
        //     break;
    
        default:
            alert("Non hai specificato l'operazione")
    }
    
