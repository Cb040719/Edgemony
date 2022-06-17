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
    
    let summa = aNumber[0];
    let sub = aNumber[0];
    let mult = aNumber[0];
    let fract = aNumber[0];
    aNumber[0] = 0;

    switch(Operation) {
        case "+":
            for(i=0; i<nNumbers; i++){ 
                summa = sum(summa, aNumber[i]);
                console.log(summa);
            }
            
            break;
        case "-":
            for(i=0; i<nNumbers; i++){
                sub = subtraction(sub, aNumber[i]);
            }
            break;
    
        case "*":
            console.log("Risultato: ", parseFirstNum * parseSecondNum)
            break;
        
        case "/":
            console.log("Risultato: ", parseFirstNum / parseSecondNum)
            break;
    
        default:
            alert("Non hai specificato l'operazione")
    }
    
