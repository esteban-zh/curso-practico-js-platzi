
const cupons = [
    {
        name: "abcd",
        discount: 10,
    },
    {
        name: "abce",
        discount: 20,
    },
    {
        name: "abcf",
        discount: 50,
    },
    {
        name: "abcg",
        discount: 70,
    }
]

const form = document.getElementById("form")

form.addEventListener("keypress", listenEvent)

function calculatePayPrice(productPrice, totalDiscountPercentage) {

    if ((totalDiscountPercentage <= 100) && (totalDiscountPercentage > 0)) {
        return totalPrice = parseFloat(productPrice - (productPrice * totalDiscountPercentage / 100));
    } else {
        return totalPrice = " this percentage does not apply  "
    }
}

function calculateDiscount() {

    const productPrice = parseFloat(document.getElementById("price").value);

    const discountPercentage = parseFloat(document.getElementById("discount").value);

    const valueCupon = document.getElementById("cupon").value;

    function validateCupon(cupon) {

    return cupon.name === valueCupon;
    }

    const validateCup = cupons.find(validateCupon);

    if (!validateCup) {
        const result = document.getElementById("result");
        return result.innerHTML = `el cupon ${valueCupon} no es valido`;
    } else {
        const discountCupon = validateCup.discount;

        const totalDiscountPercentage = discountCupon + discountPercentage;

        const totalPrice = calculatePayPrice(productPrice, totalDiscountPercentage);

        const result = document.getElementById("result");

        result.innerHTML = `${totalPrice} $`

        return result;
    }
}

function listenEvent(e) {
    if (e.key === 'Enter') {
        calculateDiscount();
    }
}


