function perimeterRectangle(sideA, sideB) {
    const perimeter = 2*(sideA+sideB);
    return perimeter;
}

function areaRectangle(sideA, sideB){
    const area = sideA * sideB;
    return area;
}

function calculatePerimeterRectangle(){

    const height = parseInt(document.getElementById("input-rectangle-a").value);
    const base = parseInt(document.getElementById("input-rectangle-b").value);

    const perimeter = perimeterRectangle(height, base);

    const showPerimeter = document.getElementById("result-rectangle");
    showPerimeter.innerHTML = `perimeter rectangle = ${perimeter} cm`;

    return showPerimeter;
}

function calculateAreaRectangle(){

    const height = parseInt(document.getElementById("input-rectangle-a").value);

    const base = parseInt(document.getElementById("input-rectangle-b").value);

    const area = areaRectangle(height, base);

    const showArea = document.getElementById("result-rectangle");
    showArea.innerHTML = `area rectangle = ${area} cm^2`;

    return showArea;

}