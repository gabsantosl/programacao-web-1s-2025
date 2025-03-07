/*
    1 2 3
    4 5 6
    7 8 9
 */

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function imprimirMatriz(A){
    for(let i = 0; i < A, length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < A[i], length; j++){
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_DF: 11,
    RJ: "Rio de Janeiro",
    DDD_DF: 21,
};

for(const key in capitais){
    //console.log(key + " . " + capitais[key]);
}

function verificarNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

console.log(verificarNumeroPar(3));
console.log(verificarNumeroPar(6));