const calculateFactorial = (number) => {
    let iterator = number;
    let result = number;
    while (iterator !=0) {
        result*=number;
        iterator--;
    }
    return result;

}

const requestNumber = () => {
    /* Numero entero no negativo */
    let num1= prompt('Ingrese un numero');
    return num1;
    
}

const main = () => {
    const number= requestNumber();
    calculateFactorial();
    
}

main();
