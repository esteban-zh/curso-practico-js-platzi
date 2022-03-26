let filaFinal = "<tr><th> NUMERO</th><th>PESO</th></tr>";
let arrObjProme = [];
// let lista = [];

function addNumbers() {
    let tableList = {};

    const number = document.getElementById("each-number").value;
    const peso = document.getElementById("each-peso").value;
    const resultTable = document.getElementById("result-table");

    // lista.push([number, peso]);
    // console.log ("esta seria la lista", lista)

    tableList[number] = peso;

    for (let element in tableList){
        let fila = "<tr><td>"
        fila += element;
        fila += "</td>"

        fila += "<td>"
        fila += peso;
        fila += "</td>"
        fila += "</tr>";
        filaFinal += fila;
    }
    arrObjProme.push(tableList)
    document.getElementById("table-data").innerHTML = filaFinal;
    return arrObjProme;
}

let arrObj = addNumbers();

function calculate(){
 
}

function calculatePonderado() {

    let resultPonderado = document.getElementById("result-ponde");
    let arrObjFinal = arrObj.slice(1, arrObj.length);

    const valoresMultiplicados = [];
    const arrPesos = [];

    arrObjFinal.map(function (objets){
        const pesos = parseFloat(Object.values(objets));
        arrPesos.push(pesos);
    })
    const sumaPesos = arrPesos.reduce(function(previousValue, nextValue){
        const sumValues = previousValue + nextValue;
        return sumValues;
    })

    arrObjFinal.map(function (objets){
        const multiplicados = parseFloat(Object.keys(objets)*Object.values(objets));
        valoresMultiplicados.push(multiplicados);
    })
    const sumaMult = valoresMultiplicados.reduce(function(previousValue, nextValue){
        const sumElements = previousValue + nextValue;
        return sumElements;
    })
    let promedioPonderado = (sumaMult/sumaPesos);

    resultPonderado.innerHTML = promedioPonderado;
}


