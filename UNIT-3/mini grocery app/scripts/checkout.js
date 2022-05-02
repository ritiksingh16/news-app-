function submit() {

    alert("Your order is accepted ");
    setTimeout(threeSeconds, 3000);
}

function threeSeconds() {

    alert("Your order is being Packed ");
    setTimeout(eightSeconds, 8000);
}

function eightSeconds() {

    alert("Your order is in transit");
    setTimeout(tenSeconds, 10000);
}

function tenSeconds() {

    alert("Your order is out for delivery ");
    setTimeout(twelve, 12000);
}

function twelve() {

    alert(" Order delivered");
}