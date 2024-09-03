const countVotes = (votos) => {
    //Code
    let resultado={};
    votos.forEach((votos) =>{
        resultado[votos.candidate] = (resultado[votos.candidate] || 0) + 1;

    });
    return resultado;
    
};

const showResults = (resultado) => {
    //Code
    alert("Resultado");
    for (let candidate in resultado) {
        alert(`${candidate} : ${resultado[candidate]} votos`)
        
    }
};

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    //Code
    const resultado =countVotes(votes);
    showResults(resultado);

}

main();
