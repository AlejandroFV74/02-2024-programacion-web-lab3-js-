
const plus = (number1, number2) => {
    //Code
    return number1 + number2;
};
const subtract = (number1, number2) => {
    //Code
    return number1 - number2;
};
const multiply = (number1, number2) => {
    //Code
    return number1 * number2;
};
const split = (number1, number2) => {
    //Code
    return number1 / number2;
};
const requestNumber = () => {
    //Code
    console.log('Ingrese un numero: ');
    let inputfAlias = input;
    let fAlias = input.value;
    let fAliasRegex = /^[0-9]+/;
    let aliasResult = fAliasRegex.test(fAlias);
    
    return aliasResult;

};

const selectOperation = () => {
    //Code

    console.log('Ingrese una operación:');
    console.log('1-Suma');
    console.log('2-Resta');
    console.log('3-Multiplicacion');
    console.log('4-División');
    let respuesta =input.value;
    return respuesta
};

const main = () => {
    console.log('Menu');
    const number1 = requestNumber();
    const number2 = requestNumber();

    const resultOpr = selectOperation();

    switch (resultOpr) {
        case 1:
            plus(number1, number2);
            break;
        case 2:
            subtract(number1, number2);
            break;
        case 3:
            multiply(number1, number2);

            break;
        case 4:
            if (number2 == 0) {
                console.log('Imposible realizar acción')
            } else {
                console.log('El resultado de la división es: ');
                split(number1 / number2)
            }

            break;

        default:
            console.log('Opcion no valida')
            break;
    }
}

main();
