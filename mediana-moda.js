let list = [];
let objList = {};

const mitadList = parseInt(list.length / 2);
let mediana = 0;


function addNumber() {
    const numbers = document.getElementById("each-number").value;
    const result = document.getElementById("result-list");

    list.push(numbers);

    result.innerHTML = list;

}

function isPar(number) {
    return (number % 2 === 0)
}

function calculateMediana() {
    let listLenght = list.length;
    let mitadList = parseInt(listLenght/2);
    const resultMediana = document.getElementById("result-prome");

    list.sort((a, b) => a - b);

    if (isPar(listLenght)) {
        const element1 = parseFloat(list[mitadList]);
        const element2 = parseFloat(list[mitadList - 1]);

        mediana = (element1 + element2)/2;
        resultMediana.innerHTML = mediana;
        return resultMediana;
    } else {
        const element = list[mitadList];
        mediana = element;
        resultMediana.innerHTML = mediana;
        return resultMediana;
    }
}

function calculateModa() {
    const resultModa = document.getElementById("result-moda");

    list.map(function(elemento) {
        if (objList[elemento]) {
            objList[elemento] += 1;
        } else {
            objList[elemento] =  1;
        }
    })
    let listConvert = Object.entries(objList).sort( (element1, element2) => element1[1] - element2[1] );
    let moda = listConvert.pop();
    resultModa.innerHTML = moda[0];
}

