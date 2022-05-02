
var productData = [{
    Image: 'https://m.media-amazon.com/images/I/51HBom8xz7L._SY355_.jpg',
    name: 'Airdopes 141',
    price: 'Rs - 1440'

},
{
    Image: 'https://m.media-amazon.com/images/I/91Ud-cUDLUL._SX679_.jpg',
    name: 'ASUS WT200',
    price: 'Rs - 633'

}
    ,
{
    Image: 'https://images-eu.ssl-images-amazon.com/images/I/41aObp88XLL._SY300_SX300_QL70_FMwebp_.jpg',
    name: 'Redmi 80 cm (32 inches)',
    price: 'Rs - 15000'

}
    , {
    Image: 'https://m.media-amazon.com/images/I/61MJ5dXkSNL._SY355_.jpg',
    name: 'Mi Braided USB',
    price: 'Rs - 299'

}];


var productlist = [];
display(productData);

function display(productData) {
    productData.map(function (elem) {


        var box = document.createElement("div")


        var img1 = document.createElement("img")
        img1.src = elem.Image;

        var name1 = document.createElement("h3")
        name1.innerText = elem.name

        var price1 = document.createElement("p")
        price1.innerText = elem.price

        var remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.setAttribute('id', "remove")
        remove.addEventListener("click", function () {
            remove.style.backgroundColor = "green"
            img1.src = "";
            name1.innerText = "";
            price1.innerText = "";
            sold.innerHTML = ""






        });
        var sold = document.createElement("button")
        sold.innerText = "Sold"
        sold.addEventListener("click", function () {
            sold.style.backgroundColor = "red"


        });
        box.append(img1, name1, price1, remove, sold)
        document.querySelector("#container").append(box)
        // productPage(elem)

    });

    // function productPage(){
    //     productlist.push(elem)
    //     localStorage.setItem("")


    // }

}




