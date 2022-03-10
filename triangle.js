function getSideA() {
    const sideA = document.getElementById("input-triangle-a").value;
    return sideA;
}

function getSideB() {
    const sideB = document.getElementById("input-triangle-b").value;
    return sideB;
}

function getSideC() {
    const sideC = document.getElementById("input-triangle-c").value;
    return sideC;
}

function calculatePerimeter() {

    const sideA = parseFloat(getSideA());
    const sideB = parseFloat(getSideB());
    const sideC = parseFloat(getSideC());

    const perimeterTriangle = (sideA + sideB + sideC);

    const resultPerimeter = document.getElementById("result-triangle");

    resultPerimeter.append(` Perimeter = ${perimeterTriangle} cm`)

    return resultPerimeter;
}

function getSemiPerimeter(sideA, sideB, sideC) {
    const sp = parseFloat((sideA + sideB + sideC)/2);
    return sp;
}

function getAreaTriangle(a, b, c, sP) {
    const radicando = parseFloat((sP * (sP - a) * (sP - b) * (sP - c)));
    const areaTri = Math.sqrt(radicando);
    return areaTri;
}

function calculateArea() {

    const sideA = parseFloat(getSideA());
    const sideB = parseFloat(getSideB());
    const sideC = parseFloat(getSideC());
    const semiPerimeter = getSemiPerimeter(sideA, sideB, sideC);
    const areaTriangle = getAreaTriangle(sideA, sideB, sideC, semiPerimeter);

    resultArea = document.getElementById("result-triangle");
    resultArea.append(`Area triangle = ${areaTriangle} cm^2`);

    return resultArea;

}

