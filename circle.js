function perimeterCircle(radius) {
    const perimeterCircle = 2 * Math.PI * radius;
    return perimeterCircle;
}

function areaCircle(radius) {
    const areaCircle = Math.PI * (radius ** 2);
    return areaCircle;
}

function calculatePerimeterCircle() {
    const radius = document.getElementById("input-circle").value;

    const perimeterC = perimeterCircle(radius);
    const resultCircle = document.getElementById("result-circle");

    resultCircle.innerHTML = `Perimeter circle= ${perimeterC} cm`;

    return resultCircle;
}

const calculateAreaCircle = () => {
    const radius = document.getElementById("input-circle").value;

    const areaC = areaCircle(radius);
    const resultArea = document.getElementById("result-circle");
    resultArea.innerHTML = `Area circle = ${areaC}cm^2`;

    return resultArea;
} 