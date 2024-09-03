
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
    let fAlias = prompt('Ingrese un número:')
    let fAliasRegex = /^[0-9]+/;
    let aliasResult = fAliasRegex.test(fAlias);

    if (aliasResult) {
        return parseInt(fAlias, 10);
    }
    else {
        alert('Entrada no válida, intentar nuevamente.');
        return requestNumber();
    }

};

const selectOperation = () => {
    //Code

    let mensaje = 'Ingrese una operación:\n';
    mensaje += '1 - Suma\n';
    mensaje += '2 - Resta\n';
    mensaje += '3 - Multiplicación\n';
    mensaje += '4 - División';
    let respuesta = prompt(mensaje);
    return parseInt(respuesta, 10);;
};

const main = () => {
    
    const number1 = requestNumber();
    const number2 = requestNumber();

    const resultOpr = selectOperation();
    let resultado;

    /* Prueba de depuración en la consola */
    console.log(`Número 1: ${number1}, Número 2: ${number2}, Operación seleccionada: ${resultOpr}`);


    if (isNaN(number1) || isNaN(number2)) {
        alert('Uno de los números ingresados no es válido.');
        return;
    }

    switch (resultOpr) {
        case 1:
            resultado = plus(number1, number2);
            alert('El resultado de la suma es: ' + resultado);

            break;
        case 2:
            resultado = subtract(number1, number2);
            alert('El resultado de la resta es: ' + resultado);

            break;
        case 3:
            resultado = multiply(number1, number2);
            alert('El resultado de la multiplicación es: ' + resultado);


            break;
        case 4:
            if (number2 == 0) {
                alert('No se permite división por 0');
            } else {
                /* Prueba de depuración en la consola */
                console.log(`Resultado de la división: ${resultado}`);
                resultado = split(number1, number2)
                alert('El resultado de la división es: ' + resultado);

            }

            break;

        default:
            alert('Opción no válida');
            break;
    }
}

main();
