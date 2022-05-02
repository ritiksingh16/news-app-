
var inventory = JSON.parse(localStorage.getItem("data"))



inventory.map(function(elem,index){
    var box = document.createElement("div")

    var col1 = document.createElement("h3")
    col1.innerText = elem.dataBrand

    var col2 = document.createElement("p")
    col2.innerText=elem.dataName

    var col3 = document.createElement("p")
    col3.innerText = elem.dataPrice

    var col4 = document.createElement("img")
    col4.src = elem.dataImage

    var col5 = document.createElement("button")
    col5.innerText = "Remove Product"
    col5.addEventListener("click",function(){
    box.innerHTML=""
    });




    box.append(col1,col2,col3,col4,col5)

    document.getElementById("products_data").append(box)


});




