//store the products array in localstorage as "data"

document.querySelector("#product_form").addEventListener("submit",form)

var localdata = JSON.parse(localStorage.getItem("data")) || []

function form(event){
    event.preventDefault()

    var brand = document.getElementById("product_brand").value
    var name1 = document.getElementById("product_name").value 
    var price = document.getElementById("product_price").value
    var image = document.getElementById("product_image").value


    var dataProduct = {
        dataBrand:brand,
        dataName:name1,
        dataPrice:price,
        dataImage:image
    
    }

    localdata.push(dataProduct)
    // console.log(data)


    localStorage.setItem("data",JSON.stringify(localdata))
}





