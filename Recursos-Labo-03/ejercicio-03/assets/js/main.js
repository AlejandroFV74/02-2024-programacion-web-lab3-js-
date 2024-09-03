const calculateFactorial = (number) => {
    if (number < 0) return "El número debe ser entero no negativo";
    let result = 1;
    while (number>0) {
        result*=number;
        number--;
    }
    return result;

}

const requestNumber = () => {
    /* Numero entero no negativo */
    while (true) {
        let num1 = prompt('Ingrese un número entero no negativo');

        if (num1 === null) {
            alert("Entrada cancelada por el usuario.");
            return null; 
        }

        const parsed = parseInt(num1, 10);

        if (!isNaN(parsed) && parsed >= 0) {
            return parsed;
        }

        alert("Por favor, ingrese un número entero no negativo válido.");
    }
    
    
}

const main = () => {
    const number= requestNumber();
    const factorial= calculateFactorial(number);
    alert(`El factorial de ${number} es ${factorial}`);
}

main();
