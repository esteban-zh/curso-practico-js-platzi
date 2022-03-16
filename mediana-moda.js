let list = [];

const mitadList = parseInt(list.length / 2);
let mediana = 0;


function addNumber() {
    const numbers = document.getElementById("each-number").value;
    const result = document.getElementById("result-list");

    list.push(numbers);

    result.innerHTML = list;

}

function isPar(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculateMediana() {
    let listLenght = list.length;
    let mitadList = parseInt(listLenght/2);
    list.sort((a, b) => a - b);

    if (isPar(listLenght)) {
        const element1 = parseFloat(list[mitadList]);
        const element2 = parseFloat(list[mitadList - 1]);

        mediana = (element1 + element2)/2
        return mediana;
    } else {
        const element = list[mitadList];
        mediana = element;
        return mediana;
    }
}

